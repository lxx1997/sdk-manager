
import React from 'react';
import { Modal } from 'antd';

const ModalFrame = (props: any) => {
  return <Modal title={props.title || "Basic Modal"} footer={null} open={props.open} onOk={props.handleOk} onCancel={props.handleCancel}>
    { props.children }
  </Modal>
};

export default ModalFrame;