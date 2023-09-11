import React, { useState } from "react";
import { Button, Form, Input, InputNumber, TextArea } from "antd";
import { BgColorsOutlined } from "@ant-design/icons";

const ContactForm = () => {
  const [form] = Form.useForm();
  const [formData, setFormData] = useState(null);

  const onFinish = (values) => {
    setFormData(values);
    form.resetFields();
  };
  const labelStyles = {
    color: "white",
  };
  return (
    <div>
      <div className="container mx-auto px-2 my-10 w-1/3">
        <div className="border border-border flex-colo p-12 bg-dry rounded-lg text-center text-white">
          <Form form={form} name="basic" onFinish={onFinish}>
            <Form.Item
              label={<span style={labelStyles}>Name</span>}
              name="name"
              rules={[{ required: true, message: "Please enter a name!" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label={<span style={labelStyles}>Email</span>}
              name="email"
              rules={[
                { required: true, message: "Please enter a email!" },
                { type: "email", message: "Invalid email!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label={<span style={labelStyles}>Your review of the site</span>}
              name="evaluate"
              rules={[
                { required: true, message: "Please enter a Evaluate!" },
                { type: "number", min: 1, message: "Invalid evaluate!" },
              ]}
            >
              <InputNumber />
            </Form.Item>

            <Form.Item  label={<span style={labelStyles}>Introduction</span>} name="introduction">
              <Input.TextArea rows={5} />
            </Form.Item>

            <Form.Item>
              <button type="primary" htmlType="submit">
                Submit
              </button>
            </Form.Item>
          </Form>

          {formData && (
            <div>
              <h2>Thông tin đã nhập:</h2>
              <p>Tên: {formData.name}</p>
              <p>Email: {formData.email}</p>
              <p>Tuổi: {formData.age}</p>
              <p>Giới thiệu bản thân: {formData.introduction}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default ContactForm;
