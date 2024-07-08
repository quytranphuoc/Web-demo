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
import { Movies } from "../../../../Data/MovieData";


const initialData = [];

const Tables = (movie) => {
  const [data, setData] = useState(initialData);
  const [modalVisible, setModalVisible] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [form] = Form.useForm();

  const columns = [
    { title: "ID", dataIndex: "id" },
    { title: "Name", dataIndex: "name" },
    { title: "Category", dataIndex: "category" },
    { title: "Language", dataIndex: "language" },
    { title: "Year", dataIndex: "year" },
    { title: "Hours", dataIndex: "time" },
    {
      title: "Action",
      dataIndex: "action",
      className: "item-center",
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
  const filteredData = Movies.slice(
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
        const updatedData = Movies.map((user) =>
          user.id === editingUser.id ? { ...user, name: values.name } : user
        );
        setData(updatedData);
        message.success("User updated successfully");
      } else {
        const newUser = {
          id: Movies.length + 1,
          name: values.name,
          email: values.email,
        };
        filteredData.push([newUser]);
        message.success("User added successfully");
      }
      setModalVisible(false);
    });
  };

  const handleCancel = () => {
    setModalVisible(false);
  };

  const editUser = (user) => {
    form.setFieldsValue({ name: user.name });
    setEditingUser(user);
    setModalVisible(true);
  };

  const deleteUser = (user) => {
    Modal.confirm({
      title: "Confirm",
      content: `Are you sure you want to delete user "${user.title}"?`,
      okButtonProps: {
        style: {
          backgroundColor: "green", 
          color: "white",
        },
      },
      onOk: () => {
        const updatedData = filteredData.filter((u) => u._id !== user._id);
        setData(updatedData);
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
    <div className="text-black">
      <Table
        dataSource={filteredData}
        columns={columns}
        rowKey="id"
        pagination={false}
      />
      <div style={{ textAlign: "right", textAlignLast: "auto" }}>
        <Pagination
    className=""
          current={currentPage}
          pageSize={pageSize}
          total={Movies.length}
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
        okButtonProps={{style: { backgroundColor: "green", color:"white"}}}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please enter name" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Category"
            name="category"
            rules={[{ required: true, message: "Please enter category" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Language"
            name="language"
            rules={[{ required: true, message: "Please enter category" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Year"
            name="year"
            rules={[{ required: true, message: "Please enter category" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Hour"
            name="time"
            rules={[{ required: true, message: "Please enter category" }]}
          >
            <Input />
          </Form.Item>

          {!editingUser && (
            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: "Please enter email" },
                { type: "email", message: "Please enter a valid email" },
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
