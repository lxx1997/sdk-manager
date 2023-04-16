import React from 'react';
import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { SDKType } from '../../../store/types';
import { useSDKList } from '../../../hooks';
import SDKManagerStore, { deleteSDK, getSDK } from '../../../store/sdkManagerStore';
import SDKManagerForm from '../SDKManagerForm/SDKManagerForm';
import "./SDKManagerList.scss"
import { DeleteIcon, EditIcon } from '../../../assets';
const handleDelete = (id: string) => {
  deleteSDK(id)
}

const handleEdit = (id: string) => {
  let sdk = getSDK(id)
  SDKManagerStore.modalOptions = {
    open: true,
    title: "Create SDK",
    handleCancel: () => {
      SDKManagerStore.modalOptions = {}
    },
    handleOk: (data: any) => {
      console.log("okey")
    },
    children: <SDKManagerForm sdk={sdk} />
  }
  
}

const columns: ColumnsType<SDKType> = [
  {
    title: 'Client name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <span>{text}</span>,
  },
  {
    title: 'Board name',
    dataIndex: 'boardName',
    key: 'boardName',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags && tags.split(" ").map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Requestor',
    dataIndex: 'requestor',
    key: 'requestor',
  },
  {
    title: 'SDK script',
    dataIndex: 'sdkScript',
    key: 'sdkScript',
    render: () => (
        <span>{`</> SDK`}</span>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <span className='btn_edit' onClick={() => handleEdit(record.id)}><EditIcon /></span>
        <span className='btn_cancel' onClick={() => handleDelete(record.id)}><DeleteIcon /></span>
      </Space>
    ),
  },
];

const SDKManagerList: React.FC = () => {
  let data: SDKType[] = useSDKList();

  return <Table columns={columns} dataSource={data} />
};

export default SDKManagerList;