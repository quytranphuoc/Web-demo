import React, { useState, useEffect } from "react";
import LayoutAdmin from "../../../../Components/LayoutAdmin";
import SideBarAdmin from "./SideBarAdmin";
import { Form, Avatar, Popconfirm, Rate, Space, Table, Typography } from "antd";
import { getCustomers } from "../../../../Request";
import Uploder from "../../../../Components/layout/components/Uploder";
const originData = [];
function UpdateProfile() {
  const [form] = Form.useForm();

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(originData);
  const [UsersData, setDataSource] = useState([]);
  const [editingKey, setEditingKey] = useState("");
  const isEditing = (record) => record.key === editingKey;
  const edit = (record) => {
    form.setFiledsValue({
      image: "",
      name: "",
      email: "",
      address: "",
      ...record,
    });
    setEditingKey(record.key);
  };
  useEffect(() => {
    setLoading(true);
    getCustomers().then((res) => {
      setDataSource(res.users);
      setLoading(false);
    });
  }, []);
  const handleDelete = (key) => {
    const newData = UsersData.filter((item) => item.key !== key);
  };
  const cancel = () => {
    setEditingKey("");
  };
  const save = async (key) => {
    try {
      const row = await form.validateFields();
      const newData = [...data];
      const index = newData.findIndex((item) => key === item.key);
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row,
        });
        setData(newData);
        setEditingKey("");
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey("");
      }
    } catch (errInfo) {
      console.log("Validate Failed:", errInfo);
    }
  };
  return (
    <LayoutAdmin>
      <SideBarAdmin>
        <div className="flex flex-col gap-6 ">

          <Space size={20} direction="vertical"> 
            <Typography.Title level={4}>
              <span className="text-white">UpdateProfile</span>
            </Typography.Title>
            <Uploder/>
            <Table
         
              loading={loading}
              columns={[
                {
                  title: "Image",
                  dataIndex: "image",
                  render: (link) => {
                    return <Avatar src={link} />;
                  },
                  
                },
                {
                  title: "Name",
                  dataIndex: "firstName",
                },
                {
                  title: "Email",
                  dataIndex: "email",
                },
                {
                  title: "address",
                  dataIndex: "address",
                  render: (address) => {
                    return (
                      <span>
                        {address.address}, {address.city}
                      </span>
                    );
                  },
                },
                {
                  title: "Actions",
                  dataIndex: "operations",
                  render: (_, record) =>
                    UsersData.length >= 1 ? (
                      <Popconfirm
                        title="Sure to delete?"
                        onConfirm={() => handleDelete(record.key)}
                      >
                        <a>Delete</a>
                      </Popconfirm>
                      
                    ) : null,
                  render: (_, record) => {
                    const editable = isEditing(record);
                    return editable ? (
                      <span>
                        <Typography.Link onClick={() => save(record.key)}>
                          Save
                        </Typography.Link>
                        <Popconfirm title="Sure to cancel" onConfirm={cancel}>
                          <a href="">Cancel</a>
                        </Popconfirm>
                      </span>
                    ) : (
                      <Typography.Link
                        disabled={editingKey !== ""}
                        onClick={() => editable(record)}
                      >
                       <button>Edit</button>
                        
                      </Typography.Link>
                      
                    );
                  },
                },
              ]}
              dataSource={UsersData}
              pagination={{
                pageSize: 9,
                size: 10,
              }}
            ></Table>
          </Space>
        </div>
      </SideBarAdmin>
    </LayoutAdmin>
  );
}

export default UpdateProfile;
