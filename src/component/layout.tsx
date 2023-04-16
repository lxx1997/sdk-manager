
import React from "react";
import SDKManager from "./SDKManager/SDKManager";
import SideLeft from "./SideLeft/SideLeft";
import "./layout.scss"
import ModalFrame from "./Modal";
import { useModalOptions } from "../hooks";
import SDKManagerStore from "../store/sdkManagerStore";
import { SDKType } from "../store/types";
export default function Layout() {
  let modal = useModalOptions()
  console.log(modal)
  React.useEffect(() => {
    SDKManagerStore.sdkList = (JSON.parse(localStorage.getItem("sdk_data")) || []) as SDKType[]
  }, [])
  return <div className="layout">
    <div className="layout_router">
      <SideLeft />
    </div>
    <div className="layout_container">
      <SDKManager />
    </div>
    <ModalFrame {...modal} />
  </div>
}