import { Menu } from "antd";
import React from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { CiTimer } from "react-icons/ci";
import { useLocation, useNavigate } from "react-router-dom";
import { AiOutlinePullRequest } from "react-icons/ai";
import { BsCheck2Square } from "react-icons/bs";

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
        onClick={() => router("/agent")}
        className={`${pathname === "/agent" ? "dark-sidebar-navs-active" : "sidebar-navs"}`}
        icon={<MdOutlineDashboard color="#8f5fe8" size={20} />}
      >
        Dashboard
      </Menu.Item>

      <Menu.Item
        onClick={() => router("/agent/picked-request")}
        className={`mt-3 ${pathname === "/agent/picked-request" ? "dark-sidebar-navs-active" : "sidebar-navs"}`}
        icon={<CiTimer color="yellow" size={20} />}
      >
        Picked tickets
      </Menu.Item>

      <Menu.Item
        onClick={() => router("/agent/handover-tickets")}
        className={`mt-1 ${pathname === "/agent/handover-tickets" ? "dark-sidebar-navs-active" : "sidebar-navs"}`}
        icon={<AiOutlinePullRequest color="yellow" size={20} />}
      >
        Handover tickets
      </Menu.Item>

      <Menu.Item
        onClick={() => router("/agent/assign-tickets")}
        className={`mt-1 ${pathname === "/agent/assign-tickets" ? "dark-sidebar-navs-active" : "sidebar-navs"}`}
        icon={<AiOutlinePullRequest color="yellow" size={20} />}
      >
        Assign tickets
      </Menu.Item>

      <Menu.Item
        onClick={() => router("/agent/resolved-tickets")}
        className={`mt-1 ${pathname === "/agent/resolved-tickets" ? "dark-sidebar-navs-active" : "sidebar-navs"}`}
        icon={<BsCheck2Square color="yellow" size={20} />}
      >
        Resolved tickets
      </Menu.Item>

      <Menu.Item className="sidebar-navs">Managers</Menu.Item>
      <Menu.Item className="sidebar-navs">Agents</Menu.Item>
      <Menu.Item className="sidebar-navs">Clients</Menu.Item>
    </Menu>
  );
};

export default SideNavs;
