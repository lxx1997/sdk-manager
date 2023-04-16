
import { Button, Input } from "antd";
import React from "react";
import { OpenNewIcon } from "../../../assets";
import { useSearchValue } from "../../../hooks";
import SDKManagerStore from "../../../store/sdkManagerStore";
import SDKManagerForm from "../SDKManagerForm/SDKManagerForm";
import "./SDKManagerOperate.scss"
export default function SDKManagerOperate() {
  let searchValue = useSearchValue()
  const handleChange = (e: any) => {
    let value = e.target.value
    SDKManagerStore.searchValue = value
  }

  const handleCreate = () => {
    console.log("create")
    SDKManagerStore.modalOptions = {
      open: true,
      title: "Create SDK",
      handleCancel: () => {
        SDKManagerStore.modalOptions = {}
      },
      handleOk: (data: any) => {
        console.log("okey")
      },
      children: <SDKManagerForm />
    }
  }
  return <div className="sdk_operate">
    <div className="sdk_operate_title">
      SDK Management
    </div>
    <div className="sdk_operate_search">
      {/* 搜索框 */}
      <Input.Search
        placeholder="Search client name,board name,tags,requestor"
        value={searchValue}
        onChange={handleChange}
      />
      {/* 新增按钮 */}
      
      <Button type="primary" onClick={handleCreate}><OpenNewIcon /> create SDK</Button>
    </div>
  </div>
}