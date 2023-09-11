import React, { useState } from "react";
import {
  Table,
  Button,
  Modal,
  Form,
  Input,
  message,
  Space,
  Pagination,
} from "antd";
import { CategoriesData } from "../../../Data/CategoriesData";
import { UsersData } from "../../../Data/MovieData";
import {FaUserAstronaut} from "react-icons/fa";
const initialData = [];

const Tables = (data) => {
  const [, setData] = useState(initialData);
  const [modalVisible, setModalVisible] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [form] = Form.useForm();

  const columns = [
    {
      title: "IMAGE",
      // dataIndex: "image",
      key: "icon",
      render: (icon) => (
        <FaUserAstronaut icon={icon} size={40}/>
      )
      // render: (data) => (
      //   <img
      //     src={`/images/${data.image ? data.image : "user.png"} `}
      //     alt="Avatar"
      //     width={50}
      //   />
      // ),
     
    },
    { title: "ID", dataIndex: "id" },

    { title: "DATE", dataIndex: "date" },

    { title: "FULL NAME", dataIndex: "fullName" },
    { title: "EMAIL", dataIndex: "email" },

    {
      title: "Action",
      dataIndex: "action",
      render: (_, record) => (
        <Space>
          <Button className="edit" type="link" onClick={() => editUser(record)}>
            Edit
          </Button>
          <Button
            className="delete"
            type="link"
            danger
            onClick={() => deleteUser(record)}
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ];
  const filteredData = UsersData.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );
  const showModal = () => {
    form.resetFields();
    setEditingUser(null);
    setModalVisible(true);
  };

  const handleOk = () => {
    form.validateFields().then((values) => {
      if (editingUser) {
        const updatedData = UsersData.map((user) =>
          user.id === editingUser.id ? { ...user, name: values.name } : user
        );

        message.success("User updated successfully");
      } else {
        const newUser = {
          id: data.length + 1,
          name: values.name,
          email: values.email,
        };
        filteredData.push(newUser);
        message.success("User added successfully");
      }
      setModalVisible(false);
    });
  };

  const handleCancel = () => {
    setModalVisible(false);
  };

  const editUser = (user) => {
    form.setFieldsValue({ Date: user.date });
    form.setFieldsValue({ Tilte: user.title });
    setEditingUser(user);
    setModalVisible(true);
  };

  const deleteUser = (user) => {
    Modal.confirm({
      title: "Confirm",
      content: `Are you sure you want to delete user "${user.title}"?`,
      onOk: () => {
        const filteredData = data.filter((u) => u.id !== user.id);
        setData(filteredData);
        message.success("User deleted successfully");
      },
    });
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const handlePageSizeChange = (current, size) => {
    setCurrentPage(1);
    setPageSize(size);
  };
  const customItemRender = (current, type, originalElement) => {
    if (type === "prev") {
      return <span className=" text-white hover:text-red-400">Previous</span>;
    }
    if (type === "next") {
      return <span className=" text-white hover:text-red-400">Next</span>;
    }
    return originalElement;
  };
  return (
    <div>
      <Table
        dataSource={UsersData}
        columns={columns}
        rowKey="id"
        pagination={false}
      />
      <div style={{ textAlign: "right", textAlignLast: "auto" }}>
        <Pagination
          className="item-center, border-collapse"
          current={currentPage}
          pageSize={pageSize}
          total={CategoriesData.length}
          onChange={handlePageChange}
          onShowSizeChange={handlePageSizeChange}
          showSizeChanger
          pageSizeOptions={["10", "20", "50"]}
          itemRender={customItemRender}
        />
      </div>
      <Modal
        title={editingUser ? "Edit User" : "Add User"}
        visible={modalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            label="Title"
            name="title"
            rules={[{ required: true, message: "Please enter name" }]}
          >
            <Input />

            <Form.Item
              label="Date"
              name="date"
              rules={[
                { required: true, message: "Please enter email" },
                { type: "date", message: "Please enter a valid email" },
              ]}
            >
              <Input />
            </Form.Item>
          </Form.Item>
          {!editingUser && (
            <Form.Item
              label="Date"
              name="date"
              rules={[
                { required: true, message: "Please enter email" },
                { type: "date", message: "Please enter a valid email" },
              ]}
            >
              <Input />
            </Form.Item>
          )}
        </Form>
      </Modal>
    </div>
  );
};

export default Tables;
