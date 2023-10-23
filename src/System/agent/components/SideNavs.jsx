import { Menu } from "antd";
import React, { useContext } from "react";
import { MdAssignmentLate, MdDashboard } from "react-icons/md";
import { CiTimer, CiUser } from "react-icons/ci";
import { useLocation, useNavigate } from "react-router-dom";
import { AiOutlineLogout, AiOutlinePullRequest } from "react-icons/ai";
import { BsBucket, BsCheck2Square, BsClipboardCheck } from "react-icons/bs";
import { AuthContext } from "../../../context/Auth";
import { FiSettings } from "react-icons/fi";

const SideNavs = () => {
  const pathname = useLocation().pathname;
  const [auth, setAuth] = useContext(AuthContext);
  const router = useNavigate();

  const logout = () => {
    let ok = window?.confirm("Are you sure?");
    if (ok) {
      localStorage.clear();
      setAuth({});
      router("/");
    }
  };

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
        onClick={() => router("/agent/profile")}
        className={`mt-3 ${pathname === "/agent/profile" ? "dark-sidebar-navs-active" : "sidebar-navs"}`}
        icon={<CiUser color="#c4c522" size={20} />}
      >
        {auth?.user?.name}
      </Menu.Item>

      <Menu.Item
        onClick={() => router("/agent/dashboard")}
        className={`mt-3 ${pathname === "/agent/dashboard" ? "dark-sidebar-navs-active" : "sidebar-navs"}`}
        icon={<MdDashboard color="#419b8e" size={20} />}
      >
        Dashboard
      </Menu.Item>

      <Menu.Item
        onClick={() => router("/agent")}
        className={`mt-3 ${pathname === "/agent" ? "dark-sidebar-navs-active" : "sidebar-navs"}`}
        icon={<BsBucket color="#8f5fe8" size={20} />}
      >
        Bucket
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
        icon={<AiOutlinePullRequest color="#e36176" size={20} />}
      >
        Handover tickets
      </Menu.Item>

      <Menu.Item
        onClick={() => router("/agent/assign-tickets")}
        className={`mt-1 ${pathname === "/agent/assign-tickets" ? "dark-sidebar-navs-active" : "sidebar-navs"}`}
        icon={<MdAssignmentLate color="#9fe361" size={20} />}
      >
        Assign tickets
      </Menu.Item>

      <Menu.Item
        onClick={() => router("/agent/resolved-tickets")}
        className={`mt-1 ${pathname === "/agent/resolved-tickets" ? "dark-sidebar-navs-active" : "sidebar-navs"}`}
        icon={<BsClipboardCheck color="#41479b" size={20} />}
      >
        Resolved tickets
      </Menu.Item>

      <Menu.Item
        onClick={() => router("/agent/settings")}
        className={`mt-4 ${pathname === "/agent/settings" ? "dark-sidebar-navs-active" : "sidebar-navs"}`}
        icon={<FiSettings color="#61e3dd" size={20} />}
      >
        Settings
      </Menu.Item>

      <Menu.Item onClick={logout} className={`mt-5 `} icon={<AiOutlineLogout color="orange" size={20} />}>
        Logout
      </Menu.Item>
    </Menu>
  );
};

export default SideNavs;
