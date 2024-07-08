import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import HeroImg from "../../assets/logo.webp";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { LogoutOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import { UserOutlined as LogoutIcon, BellFilled } from "@ant-design/icons";
import { MdAdminPanelSettings } from "react-icons/md";
import { UserAuth } from "../../features/Auth/AuthContext";
import { Image, Space, Badge, Drawer, List, Typography, Button } from "antd";
import { getComments } from "./components/MapApi/fetch";

const HeaderAd = () => {
  const { user, logOut } = UserAuth();

  const [comments, setComments] = useState([]);
  const [orders, setOders] = useState([]);
  const [commentsOpen, setCommentsOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/*");
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getComments().then((res) => {
      setComments(res.comments);
    });
  });
  return (
    <div className="w-full h-[110px] bg-main">
      <div className="w-full flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/*admin">
          <Image src={HeroImg} alt="logo" className="w-20" sizes="25"></Image>
        </Link>
        {user?.email ? (
          <Space>
            <Badge count={comments.length} dot>
              <MailOutlined
                style={{ color: "#fff", fontSize: 24 }}
                onClick={() => {
                  setCommentsOpen(true);
                }}
              />
            </Badge>
            <Badge count={orders.length} dot>
              <BellFilled
                style={{ color: "#fff", fontSize: 24 }}
                onClick={() => {
                  setNotificationsOpen(true);
                }}
              />
            </Badge>
            <Button>
              <LogoutOutlined
                style={{ fontSize: 24, color: "#fff" }}
                onClick={handleLogout}
              />
            </Button>
          </Space>
        ) : (
          <Space>
            <Button>
              <LogoutOutlined style={{ fontSize: 24, color: "white" }} />{" "}
            </Button>
          </Space>
        )}

        <Drawer
          title="Comments"
          open={commentsOpen}
          onClose={() => {
            setCommentsOpen(false);
          }}
          maskClosable
        >
          <List
            dataSource={comments}
            renderItem={(item) => {
              return <List.Item>{item.body}</List.Item>;
            }}
          ></List>
        </Drawer>

        <Drawer
          title="Notifications"
          open={notificationsOpen}
          onClose={() => {
            setNotificationsOpen(false);
          }}
          maskClosable
        >
          <List
            dataSource={orders}
            renderItem={(item) => {
              return (
                <List.Item>
                  <Typography.Text strong>{item.title}</Typography.Text> has
                  been ordered!
                </List.Item>
              );
            }}
          ></List>
        </Drawer>
      </div>
    </div>
  );
};

export default HeaderAd;
