import React from "react";
import { Form, Button, Select, Input, Option } from "antd";

function DELIVERY(props) {
  //   const { Form, Button, Select } = antd;
  const { Option } = Select;

  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 14,
    },
  };
  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not validate email!",
      number: "${label} is not a validate number!",
    },
    number: {
      range: "${label} must be between ${min} and ${max}",
    },
  };
  const prefixSelector = (
    <Form.Item name="prefix" style={{ margin: "auto" }}>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="86">+46</Option>
        <Option value="87">+49</Option>
        <Option value="86">+92</Option>
        <Option value="87">+96</Option>
      </Select>
    </Form.Item>
  );
  //   const Demo = () => {
  //     const onFinish = (values) => {
  //       console.log(values);
  //     };

  const renderItems = () => (
    <Form
      {...layout}
      name="nest-messages"
      //   onFinish={onClick}
      validateMessages={validateMessages}
    >
      <Form.Item
        name={["user", "name"]}
        label="Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={["user", "email"]}
        label="Email"
        rules={[
          {
            required: true,
            type: "email",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="phone"
        label="Phone Number"
        rules={[
          {
            required: true,
            message: "Please input your phone number!",
          },
        ]}
      >
        <Input
          addonBefore={prefixSelector}
          style={{
            width: "100%",
            height: "50px",
          }}
        />
      </Form.Item>

      <Form.Item
        name={["user", "address"]}
        label="Address"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input.TextArea />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}></Form.Item>
    </Form>
  );

  return (
    <div>
      <h2>Delivery Address</h2>
      <div>{renderItems()}</div>
    </div>
  );
  //   };
  //   <div>
  //     <Demo />
  //   </div>;
}

export default DELIVERY;
