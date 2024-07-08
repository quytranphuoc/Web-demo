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

const Tables = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [form] = Form.useForm();

  const columns = [
    { title: "ID", dataIndex: "_id" },
    { title: "DATE", dataIndex: "date" },
    { title: "TITLE", dataIndex: "title" },
    {
      title: "Action",
      style: "center",
      dataIndex: "action",
      render: (_, record) => (
        <Space
          // style={{
          //   display: "flex",
          //   justifyContent: "center",
          //   alignContent: "center",
          // }}
        >
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

  // Filter data based on pagination
  const filteredData = CategoriesData.slice(
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
        // Update the edited user in the filteredData
        const updatedData = filteredData.map((user) =>
          user._id === editingUser._id ? { ...user, title: values.title } : user
        );
        message.success("User updated successfully");
      } else {
        // Add a new user to the filteredData
        const newUser = {
          _id: CategoriesData.length + 1,
          title: values.title,
          date: values.date,
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
    form.setFieldsValue({ title: user.title, date: user.date });
    setEditingUser(user);
    setModalVisible(true);
  };

  const deleteUser = (user) => {
    Modal.confirm({
      title: "Confirm",
      content: `Are you sure you want to delete user "${user.title}"?`,
      okButtonProps: {
        style: {
          backgroundColor: "green", // Màu nền nút OK
          color: "white", // Màu văn bản nút OK
        },
      },
      onOk: () => {
        const updatedData = filteredData.filter((u) => u._id !== user._id);
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
      return <span className=" text-white hover:tex">Next</span>;
    }
    return originalElement;
  };
  return (
    <div>
      <Table
        dataSource={filteredData}
        columns={columns}
        rowKey="_id"
        pagination={false}
      />
      <div
        style={{
          textAlign: "right",
          textAlignLast: "auto",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
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
        okButtonProps={{ style: { backgroundColor: "green", color: "white" } }}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            label="Title"
            name="title"
            rules={[{ required: true, message: "Please enter title" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Date"
            name="date"
            rules={[{ required: true, message: "Please enter date" }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Tables;
