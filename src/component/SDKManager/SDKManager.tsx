
import React from "react";
import SDKManagerList from "./SDKManagerList/SDKManagerList";
import SDKManagerOperate from "./SDKManagerOperate/SDKManagerOperate";
import "./SDKManager.scss"
export default function SDKManager() {
  return <div className="sdk">
    <div className="sdk_header">
      <SDKManagerOperate />
    </div>
    <div className="sdk_table">
      <SDKManagerList />
    </div>
  </div>
}