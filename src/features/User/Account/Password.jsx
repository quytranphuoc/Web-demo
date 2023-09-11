import React, { useEffect, useState } from "react";
import Layout from "../../../Components/Layout";
import SideBar from "./SideBar";
import { Form, Space, Input, Button } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

// import { useFirebaseApp, useAuth } from "reactfire";
// import firebase from "firebase/app";
// import "firebase/auth";
function Password() {
  // const [oldPassword, setOldPassword] = useState("");
  // const [newPassword, setNewPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   const user = firebase.auth().currentUser;
  //   if (user) {
  //     const email = user.email;
  //     setOldPassword(email);
  //     setNewPassword("");
  //     setConfirmPassword("");
  //   }
  // }, []);

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   if (oldPassword === "") {
  //     setError("Please enter your new password.");
  //   }
  //   if (newPassword === "") {
  //     setError("Please enter your new password.");
  //   }
  //   if (confirmPassword === "") {
  //     setError("Please confirm your new password.");
  //   }
  //   if (newPassword !== confirmPassword) {
  //     setError("Your new passwords do not match.");
  //     return;
  //   }
  //   // firebase
  //   //   .auth()
  //   //   .ChangePassword(oldPassword, newPassword)
  //   //   .then(
  //   //     () => {
  //   //       setError(null);
  //   //       setOldPassword("");
  //   //       setNewPassword("");
  //   //       setNewPassword("");
  //   //       setConfirmPassword("");
  //   //     },
  //   //     (error) => {
  //   //       setError(error.message);
  //   //     }
  //   //   );
  //   const user = firebase.auth().currentUser;
  //   if (user) {
  //     const credential = firebase.auth.EmailAuthProvider.credential(
  //       user.email,
  //       oldPassword
  //     );
  //     user
  //       .reauthenticateWithCredentail(credential)
  //       .then(() => {
  //         return user.updatePassword(newPassword);
  //       })
  //       .then(() => {
  //         setError(null);
  //         setOldPassword("");
  //         setNewPassword("");
  //         setError("");
  //         setConfirmPassword("");
  //       })
  //       .catch((error) => {
  //         setError(error.message);
  //       });
  //   }
  // };

  // Reauthenticate the user with the old password
  return (
    <Layout>
      <SideBar className="">
        <div className=" flex-col gap-6">
          <h2 className="text-white">Change Password</h2>
          <div className="flex justify-center  items-center ">
            <Form className="p-4 w-2/3  shadow-md justify-center">
              <Input.Password
             
                  className=" p-3 my-2 rounded"
                  type="password"
                  placeholder="Password"
                  autoComplete="password"
                /><br/>
                <Input.Password
                
                  className="  p-3 my-2 rounded"
                  type="password"
                  placeholder="New Password"
                  autoComplete="current-password"
                  iconRender={(visible) => visible ? <EyeTwoTone/> : <EyeInvisibleOutlined/>}
                /><br/>
                <Input.Password
               
                  className=" p-3 my-2 rounded"
                  type="password"
                  placeholder="Confirm Password"
                  autoComplete="current-password"
                iconRender={(visible) => visible ? <EyeTwoTone/> : <EyeInvisibleOutlined/>}
                />

              <div className="flex justify-center items-center my-4">
                <button className="text-white font-sans ">
                Ripristina password
               
                </button>
              </div>
            </Form>
          </div>
        </div>
      </SideBar>
    </Layout>
  );
}

export default Password;
