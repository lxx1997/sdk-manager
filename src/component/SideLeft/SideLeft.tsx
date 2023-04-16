
import clsx from "clsx";
import React from "react";
import { SDKIcon } from "../../assets";
import "./SideLeft.scss"
export default function SideLeft() {

  const routers = [
    {
      name: "User Profile",
      path: "/user",
    },
    {
      name: "SDK Management",
      path: "/sdk",
    },
    {
      name: "Dashboards",
      path: "/dashboard",
    },
    {
      name: "Terms & Conditions",
      path: "/settings",
    }
  ]
  let pathName = "/sdk"
  return <div className="sideLeft">
    {
      routers.map(router => {
        return <div className={clsx("sideLeft_links", pathName === router.path && "active")}>
          <a href={router.path}><SDKIcon />{router.name}</a>
        </div>
      })
    }
  </div>
}