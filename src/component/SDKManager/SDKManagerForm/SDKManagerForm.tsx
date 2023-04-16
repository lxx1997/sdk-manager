import React from 'react';
import { v1 } from "uuid"
import { Button, Form, Input } from 'antd';
import SDKManagerStore, { addSDK } from '../../../store/sdkManagerStore';
import "./SDKManagerForm.scss"

const SDKManagerForm = (props: any) => {
  const [form] = Form.useForm();
  const requireProps = ["name", "boardName", "requestor"]

  React.useEffect(() => {
    if(props.sdk) {
      form.setFieldsValue(props.sdk)
    }
  },[props.sdk, form])

  const onFinish = () => {
    let formData = form.getFieldsValue()
    if(Object.keys(formData).some(data => requireProps.includes(data) && !formData[data])) {
      return
    }
    addSDK({id: v1(), ...formData})
    SDKManagerStore.modalOptions = {}
  }

  const handleCancel = () => {
    SDKManagerStore.modalOptions = {}
  }

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
    >
      <Form.Item
        label="Client name"
        name="name"
        required
      >
        <Input  placeholder="input placeholder" />
      </Form.Item>
      <Form.Item
        label="Board"
        name="boardName"
        required
      >
        <Input  placeholder="input placeholder" />
      </Form.Item>
      <Form.Item
        label="Tags"
        name="tags"
      >
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item
        label="Requestor"
        name="requestor"
        required
      >
        <Input  placeholder="input placeholder" />
      </Form.Item>
      <Form.Item>
        <div className='form_footer_btn'>
          <Button type="text" onClick={handleCancel}>Cancel</Button>
          <Button type="primary" htmlType='submit'>Submit</Button>
        </div>
      </Form.Item>
    </Form>
  );
};

export default SDKManagerForm;