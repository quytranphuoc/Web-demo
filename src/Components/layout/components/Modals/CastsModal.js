// import React, { useState } from "react";
// import MainModal from "./MainModal";
// import { PlusOutlined } from "@ant-design/icons";
// import {
//   Button,
//   Cascader,
//   Checkbox,
//   DatePicker,
//   Form,
//   Input,
//   InputNumber,
//   Radio,
//   Select,
//   Slider,
//   Switch,
//   TreeSelect,
//   Upload,
// } from "antd";

// const { RangePicker } = DatePicker;
// const { TextArea } = Input;
// const normFile = (e) => {
//   if (Array.isArray(e)) {
//     return e;
//   }
//   return e?.fileList;
// };
// function CastsModal({ modalOpen, setModalOpen, cast }) {
//   const [componentDisabled, setComponentDisabled] = useState(true);
//   return (
//     <MainModal modalOpen={modalOpen} setModalOpen={setModalOpen}>
//       <div className="inline-block sm:w-4/5 border border-border md:w-3/5 lg:w-2/5 w-full align-middle p-10 overflow-y-auto h-full bg-main text-white rounded-2xl">
//         <h2>{cast ? "Update Cast" : "Create Cast"}</h2>
//         <Form className="flex flex-col gap-6 text-left ">
//         <Checkbox
//         checked={componentDisabled}
//         onChange={(e) => setComponentDisabled(e.target.checked)}
//       >
//         Form disabled
//       </Checkbox>
//       <Form
//         labelCol={{
//           span: 4,
//         }}
//         wrapperCol={{
//           span: 14,
//         }}
//         layout="horizontal"
//         disabled={componentDisabled}
//         style={{
//           maxWidth: 600,
//         }}
//       >
//         <Form.Item label="Checkbox" name="disabled" valuePropName="checked">
//           <Checkbox>Checkbox</Checkbox>
//         </Form.Item>
//         <Form.Item label="Input">
//           <Input label="Cast name" placeholder={cast ? cast.fullName : "John Doe"}
//             type="text" bg={false}
//           />
//         </Form.Item>
//         <Form.Item label="Select">
//           <Select>
//             <Select.Option value="demo">Demo</Select.Option>
//           </Select>
//         </Form.Item>
//         <Form.Item label="DatePicker">
//           <DatePicker />
//         </Form.Item>
//         <Form.Item label="RangePicker">
//           <RangePicker />
//         </Form.Item>
//         <Form.Item label="TextArea">
//           <TextArea rows={4} />
//         </Form.Item>
//         <Form.Item label="Upload" valuePropName="fileList" getValueFromEvent={normFile}>
//           <Upload action="/upload.do" listType="picture-card">
//             <div>
//               <PlusOutlined />
//               <div
//                 style={{
//                   marginTop: 8,
//                 }}
//               >
//                 Upload
//               </div>
//             </div>
//           </Upload>
//         </Form.Item>
//         <Form.Item label="Button">
//           <Button>Button</Button>
//         </Form.Item>
//         <Form.Item label="Slider">
//           <Slider />
//         </Form.Item>
//       </Form>
//         </Form>
//       </div>
//     </MainModal>
//   );
// }

// export default CastsModal;

import React from "react";
import MainModal from "./MainModal";
import { Input} from "../UsedInput"
import Uploder from "../Uploder";

function CastsModal({ modalOpen, setModalOpen, cast }) {
  return (
    <MainModal modalOpen={modalOpen} setModalOpen={setModalOpen}>
      <div className="inline-block sm:w-4/5 border border-border md:w-3/5 lg:w-2/5 w-full align-middle p-10 overflow-y-auto h-full bg-main text-white rounded-2xl">
        <h2 className="text-3xl font-bold">
          {cast ? "Update Cast" : "Create Cast"}
        </h2>
        <form className="flex flex-col gap-6 text-left mt-6">
          <Input
            label="Cast Name"
            placeholder={cast ? cast.fullName : "John Doe"}
            type="text"
            bg={false}
          />
          <div className="flex flex-col gap-2">
            <p className="text-border font-semibold text-sm">Cast Image</p>
            <Uploder />
            <div className="w-32 h-32 p-2 bg-main border border-border rounded">
              <img
                src={`/images/${cast ? cast.image : "user.png"}`}
                alt={cast?.fullName}
                className="w-full h-full object-cover rounded"
              />
            </div>
          </div>
          <button
            onClick={() => setModalOpen(false)}
            className="w-full flex-rows gap-4 py-3 text-lg transitions hover:bg-dry border-2 border-subMain rounded bg-subMain text-white"
          >
            {cast ? "Update" : "Add"}
          </button>
        </form>
      </div>
    </MainModal>
  );
}

export default CastsModal;
