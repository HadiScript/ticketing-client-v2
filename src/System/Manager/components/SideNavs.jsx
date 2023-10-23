import { Menu } from "antd";
import React from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { PiUsersLight } from "react-icons/pi";
import { useLocation, useNavigate } from "react-router-dom";

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
      <Menu.Item onClick={() => router("/manager")} className={`${pathname === "/manager" ? "sidebar-navs-active" : "sidebar-navs"}`} icon={<MdOutlineDashboard />}>
        Dashboard
      </Menu.Item>
      <Menu.Item onClick={() => router("/manager")} className={`mt-1 ${pathname === "/manager" ? "sidebar-navs-active" : "sidebar-navs"}`} icon={<MdOutlineDashboard />}>
        Ticket trends
      </Menu.Item>

      {/* users */}
      <Menu.Item
        onClick={() => router("/manager/all-users")}
        className={`mt-3 ${pathname === "/manager/all-users" ? "sidebar-navs-active" : "sidebar-navs"}`}
        icon={<PiUsersLight />}
      >
        Clients
      </Menu.Item>
      <Menu.Item
        onClick={() => router("/manager/all-agents")}
        className={`mt-1 ${pathname === "/manager/all-agent" ? "sidebar-navs-active" : "sidebar-navs"}`}
        icon={<PiUsersLight />}
      >
        Agents
      </Menu.Item>

      <Menu.Item
        onClick={() => router("/manager/escalate-tickets")}
        className={`mt-3 ${pathname === "/manager/escalate-tickets" ? "sidebar-navs-active" : "sidebar-navs"}`}
        icon={<PiUsersLight />}
      >
        Escalating Tickets
      </Menu.Item>
      <Menu.Item
        onClick={() => router("/manager/assigned-tickets")}
        className={`mt-1 ${pathname === "/manager/assigned-tickets" ? "sidebar-navs-active" : "sidebar-navs"}`}
        icon={<PiUsersLight />}
      >
        Assigned Tickets
      </Menu.Item>
      <Menu.Item
        onClick={() => router("/manager/resolved-tickets")}
        className={`mt-1 ${pathname === "/manager/resolved-tickets" ? "sidebar-navs-active" : "sidebar-navs"}`}
        icon={<PiUsersLight />}
      >
        Resolved Tickets
      </Menu.Item>
    </Menu>
  );
};

export default SideNavs;
