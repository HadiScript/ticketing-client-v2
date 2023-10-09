import { Menu } from "antd";
import React from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
import { VscRequestChanges } from "react-icons/vsc";
import { AiOutlineFolderOpen } from "react-icons/ai";

const SideNavs = () => {
  const pathname = useLocation().pathname;
  const router = useNavigate();
  return (
    <Menu
      theme="dark"
      style={{
        backgroundColor: "transparent",
      }}
      defaultSelectedKeys={["1"]}
      mode="inline"
    >
      <Menu.Item
        className="sidebar-navs"
        onClick={() => router("/client")}
        icon={<MdOutlineDashboard />}
      >
        Dashboard
      </Menu.Item>

      <Menu.Item
        onClick={() => router("/client/submit-request")}
        className={`mt-3 ${
          pathname === "/client/submit-request"
            ? "sidebar-navs-active"
            : "sidebar-navs"
        }`}
        icon={<VscRequestChanges />}
      >
        Submit Request
      </Menu.Item>
      <Menu.Item
        onClick={() => router("/client/open-request")}
        className={`mt-1 ${
          pathname === "/client/open-request"
            ? "sidebar-navs-active"
            : "sidebar-navs"
        }`}
        icon={<AiOutlineFolderOpen />}
      >
        Open Requests
      </Menu.Item>

      <Menu.Item className="sidebar-navs">Managers</Menu.Item>
      <Menu.Item className="sidebar-navs">Agents</Menu.Item>
      <Menu.Item className="sidebar-navs">Clients</Menu.Item>
    </Menu>
  );
};

export default SideNavs;
