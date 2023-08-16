// import React from "react";
// import { Input } from "antd";
// import SideBar from "./SideBar";

// function Password() {

//   return (
//     <SideBar>
//       <div className="flex flex-col gap-6" >
//         <h2 className="text-white">Change Password</h2>
//         <Input
//           label="Previous Password"
//           placeholder="Password ..."
//           type="email"
//           bg={true}
//         />
//         <Input
//           label="New Password"
//           placeholder="New Password....."
//           type="password"
//           bg={true}
//         />
//         <Input
//           label="Confirm Password"
//           placeholder="********"
//           type="password"
//           bg={true}
//         />
//         <div className="flex justify-end items-center my-4">
//           <button className="bg-main font-medium transitions hover:bg-subMain border border-subMain text-white py-3 px-6 rounded w-full sm:w-auto">
//             Change Password
//           </button>
//         </div>
//       </div>
//     </SideBar>
//   );
// }

// export default Password;

import React, { useState } from "react";
import SideBar from "./SideBar";
import { getAuth, updatePassword, reauthenticateWithCredential, EmailAuthProvider, sendPasswordResetEmail} from "firebase/auth";
import { Form, Input } from "antd";
import Layout from "../../../Components/Layout";

function Password() {
  // const [email, setEmail] = useState("");
  // const auth = getAuth();
  // sendPasswordResetEmail(auth, email)
  // .then(() => {
  //   console.log("Password reset email sent")
  // })
  // .catch ((error) => {
  //   const errorCode = error.code;
  //   const errorMessage = error.message;
  // });
  // const triggerResetEmail = async () => {
  //   await sendPasswordResetEmail(auth, email);
  //   console.log ("Password reset email sent")
  // }
  // const oldPassWord = resetPassword(auth, email)
  // const credential = EmailAuthProvider.credential (
  //   this.currentUser.email,
  //   oldPassWord
  // );
  // await reauthenticateWithCredential(auth.currentUser, credential);
  // const newPassword = 
  // await updatePassword(auth.currentUser, newPassword);
  return (
    <Layout>
      <SideBar>
      <div className="flex flex-col gap-6">
        <h2 className="text-white">Change password</h2>
        <div className="">
          <Form onSubmit={sendPasswordResetEmail}>
            <Input
              className="resetEmailInput"
              label="Email"
              placeholder="Email"
              type="email"
            />
            <Input
              className="resetPwInput"
              label="New Password"
              placeholder="New Password....."
              type="password"
            />   
            <div className="flex justify-end items-center my-4">
              <button
                className="bg-main font-medium transitions hover:bg-subMain border border-subMain text-white py-3 px-6 rounded w-full sm:w-auto"
                type="button"
              >
                Change Password
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
