// import React, { useEffect, useState } from "react";
// import LayoutAdmin from "../../../../Components/LayoutAdmin";
// import SideBarAdmin from "./SideBarAdmin";
// import { Form, Space, Input, Button } from "antd";
// import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
// function ChangePassword() {

//   return (
//     <LayoutAdmin>
//       <SideBarAdmin className="">
//         <div className=" flex-col gap-6">
//           <h2 className="text-white">Change Password</h2>
//           <div className="flex justify-center  items-center ">
//             <Form className="p-4 w-2/3  shadow-md justify-center">
//               <Input.Password
             
//                   className=" p-3 my-2 rounded"
//                   type="password"
//                   placeholder="Password"
//                   autoComplete="password"
//                 /><br/>
//                 <Input.Password
                
//                   className="  p-3 my-2 rounded"
//                   type="password"
//                   placeholder="New Password"
//                   autoComplete="current-password"
//                   iconRender={(visible) => visible ? <EyeTwoTone/> : <EyeInvisibleOutlined/>}
//                 /><br/>
//                 <Input.Password
               
//                   className=" p-3 my-2 rounded"
//                   type="password"
//                   placeholder="Confirm Password"
//                   autoComplete="current-password"
//                 iconRender={(visible) => visible ? <EyeTwoTone/> : <EyeInvisibleOutlined/>}
//                 />

//               <div className="flex justify-center items-center my-4">
//                 <button className="text-white font-sans ">
//                 Ripristina password
               
//                 </button>
//               </div>
//             </Form>
//           </div>
//         </div>
//       </SideBarAdmin>
//     </LayoutAdmin>
//   );
// }

// export default ChangePassword;

import React, { useState } from "react";
import LayoutAdmin from "../../../../Components/LayoutAdmin";
import SideBarAdmin from "./SideBarAdmin";
import { Form, Input, Button, message } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { auth } from "../../../../firebase"; // Thay đổi đường dẫn này để import cấu hình Firebase của bạn

function ChangePassword() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handleChangePassword = async (values) => {
    setLoading(true);
    try {
      const user = auth.currentUser;

      // Đổi mật khẩu sử dụng Firebase Authentication
      await user.updatePassword(values.newPassword);

      message.success("Đổi mật khẩu thành công.");
      form.resetFields();
    } catch (error) {
      console.error("Lỗi khi đổi mật khẩu:", error);
      message.error("Đã xảy ra lỗi khi đổi mật khẩu.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <LayoutAdmin>
      <SideBarAdmin className="">
        <div className="flex-col gap-6">
          <h2 className="text-white">Change Password</h2>
          <div className="flex justify-center items-center ">
            <Form
              form={form}
              onFinish={handleChangePassword}
              className="p-4 w-2/3  shadow-md justify-center"
            >
              <Form.Item
                name="password"
                rules={[{ required: true, message: "Vui lòng nhập mật khẩu hiện tại." }]}
              >
                <Input.Password
                  className="p-3 my-2 rounded"
                  placeholder="Password"
                  autoComplete="password"
                />
              </Form.Item>
              <Form.Item
                name="newPassword"
                rules={[{ required: true, message: "Vui lòng nhập mật khẩu mới." }]}
              >
                <Input.Password
                  className="p-3 my-2 rounded"
                  placeholder="New Password"
                  autoComplete="new-password"
                  iconRender={(visible) =>
                    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                  }
                />
              </Form.Item>
              <Form.Item
                name="confirmNewPassword"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng xác nhận mật khẩu mới.",
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("newPassword") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject("Mật khẩu mới và xác nhận không khớp.");
                    },
                  }),
                ]}
              >
                <Input.Password
                  className="p-3 my-2 rounded"
                  placeholder="Confirm Password"
                  autoComplete="new-password"
                  iconRender={(visible) =>
                    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                  }
                />
              </Form.Item>

              <div className="flex justify-center items-center my-4">
                <button
                  type="primary"
                  htmlType="submit"
                  loading={loading}
                >
                      Ripristina password
                </button>
              </div>
            </Form>
          </div>
        </div>
      </SideBarAdmin>
    </LayoutAdmin>
  );
}

export default ChangePassword;