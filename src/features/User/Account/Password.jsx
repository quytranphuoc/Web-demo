import React, { useState } from "react";
import Layout from "../../../Components/Layout";
import SideBar from "./SideBar";
import { Form, Space, Input,Button } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { sendPasswordResetEmail, getAuth } from "firebase/auth";

function Password() {
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  const [email, setEmail] = useState("");
  const auth = getAuth();
  sendPasswordResetEmail(auth, email)
    .then(() => {
      alert("Password reset email sent!");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(`
    Error sending password reset email: Code: ${errorCode} Message: ${errorMessage}`);
    });
    const triggerResetEmail = async () => {
        await sendPasswordResetEmail(auth, email);
        console.log("Password reset email sent")
    }
  return (
    <Layout>
      <SideBar className="">
        <div className="flex flex-col gap-6">
          <h2 className="text-white">Change Password</h2>
          <Form onSubmit={sendPasswordResetEmail} className="gap-6">
            <Input
              label="Previous Password"
              placeholder="Password"
              type="password"
              bg={true}
            />
            <Input.Password
            className="my-4"
              placeholder="input password"
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
            />
            <Input.Password
              label="Confirm Password"
              placeholder="New password"
              type="password"
              bg={true}
            />
          <div className="flex justify-end items-center my-4">
          <button className="bg-red" onClick={triggerResetEmail}>
              Ripristina password
            </button>
          </div>
          </Form>
        </div>
      </SideBar>
    </Layout>
  );
}

export default Password;
