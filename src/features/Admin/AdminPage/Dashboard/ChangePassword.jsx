import React, { useState } from "react";
import LayoutAdmin from "../../../../Components/LayoutAdmin";
import SideBarAdmin from "./SideBarAdmin";
import { Form, Space, Input,Button } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { sendPasswordResetEmail, getAuth, updatePassword, reauthenticateWithCredential } from "firebase/auth";

function ChangePassword() {
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
    
    // Reauthenticate the user with the old password
  return (
    <LayoutAdmin>
      <SideBarAdmin className="">
        <div className="flex flex-col gap-6">
          <h2 className="text-white">Change Password</h2>
          <Form onSubmit={sendPasswordResetEmail} className="gap-6">
            <Input
              placeholder="Email" type="email" value={email} onChange={e => setEmail(e.target.value)}
              bg={true}
            />
            <Input.Password
            className="my-4"
              placeholder="input password"
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
              onChange={e => setPasswordVisible(e.target.value)}
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
      </SideBarAdmin>
    </LayoutAdmin>
  );
}

export default ChangePassword;
