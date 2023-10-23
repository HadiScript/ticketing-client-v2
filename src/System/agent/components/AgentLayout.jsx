import { Layout, Menu, Grid, Drawer, Dropdown, Avatar } from "antd";
import React, { useContext, useEffect, useState } from "react";
import SideNavs from "./SideNavs";
import { AuthContext } from "../../../context/Auth";
import toast from "react-hot-toast";
import axios from "axios";
import Redirect from "../../../utils/Redirect";
import { BsPersonFillGear } from "react-icons/bs";
import { IoLogOutOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { DefaultSider } from "../../../assets/layout";
import { CgMenuLeft } from "react-icons/cg";

const { Sider, Content, Header } = Layout;
const { useBreakpoint } = Grid;

const AgentLayout = ({ children }) => {
  const [open, setOpen] = useState(false);
  const breakpoints = useBreakpoint();
  const [auth, setAuth] = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const router = useNavigate();
  const [openProfile, setOpenProfile] = useState(false);

  const onClose = () => setOpen(false);

  useEffect(() => {
    if (auth && auth.token) {
      gettingCurrentClient();
    }
  }, [auth && auth.token]);

  const gettingCurrentClient = async () => {
    try {
      const { data } = await axios.get("http://localhost:9000/api/current-client", {
        headers: {
          Authorization: `Bearer ${auth?.token}`,
        },
      });

      console.log(data);

      if (data.ok) {
        setLoading(false);
      }
    } catch (error) {
      toast.error("Failed, try again");
    }
  };

  const items = [
    {
      key: "1",
      label: <span>Profile</span>,
      icon: <BsPersonFillGear color="green" />,
      onClick: () => setOpenProfile(true),
    },
    {
      key: "2",
      label: <span>Logout</span>,
      icon: <IoLogOutOutline className="icon-header" />,
      onClick: () => {
        localStorage.clear();
        setAuth({});
        router("/");
      },
    },
  ];

  return (
    <Layout>
      {/* sidebar for just md large screens */}

      {breakpoints.md && (
        <DefaultSider>
          <Sider
            style={{
              // background: "linear-gradient(to-right, #0b3d91, #000000)",
              background: "#191c24",
              position: "fixed",
              left: 0,
              top: 0,
              bottom: 0,
            }}
          >
            <h5 className="dark-menu-heading mt-2 text-center">Ticketing System</h5>
            <SideNavs />
          </Sider>
        </DefaultSider>
      )}
      {/* end */}

      <Layout>
        {/* headers */}
        {!breakpoints.md && (
          <>
            <Header
              style={{
                backgroundColor: "#191c24",
                color: "white",
                display: "flex",
                justifyContent: "space-between",
                gap: "20px",
                alignItems: "center",
                padding: "20px",
              }}
            >
              {!breakpoints.md && (
                <div onClick={() => setOpen(true)}>
                  <CgMenuLeft size={25} />
                </div>
              )}

              {/* <h6>Welcome {auth?.user?.name}</h6> */}
              {/* <div style={{ alignContent: "end" }}> */}
              <Dropdown menu={{ items }}>
                <Avatar
                  role="button"
                  style={{
                    // background: "linear-gradient(45deg, #0b3d91, #000000)",
                    background: "black",

                    color: "white",
                  }}
                >
                  {auth?.user?.name[0]}
                </Avatar>
              </Dropdown>
              {/* </div> */}
              <Drawer placement="left" onClose={onClose} open={open} closable={true} style={{ width: "280px", background: "#191c24" }}>
                <SideNavs />
              </Drawer>
            </Header>
          </>
        )}

        {/* content */}
        <Content
          className="agentContent"
          style={{
            minHeight: "100vh",
            // margin: "20px",
            paddingTop: "20px",
            padding: "20px",
            backgroundColor: "black",
          }}
        >
          {loading ? <Redirect /> : children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default AgentLayout;
