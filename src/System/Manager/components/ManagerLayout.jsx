import { Layout, Menu, Grid, Drawer } from "antd";
import React, { useContext, useEffect, useState } from "react";
import SideNavs from "./SideNavs";
import { AuthContext } from "../../../context/Auth";
import toast from "react-hot-toast";
import axios from "axios";
import Redirect from "../../../utils/Redirect";

const { Sider, Content, Header } = Layout;
const { useBreakpoint } = Grid;

const ManagerLayout = ({ children }) => {
  const [open, setOpen] = useState(false);
  const breakpoints = useBreakpoint();
  const [auth, setAuth] = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  const onClose = () => setOpen(false);

  useEffect(() => {
    if (auth && auth.token) {
      gettingCurrentClient();
    }
  }, [auth && auth.token]);

  const gettingCurrentClient = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:9000/api/current-manager",
        {
          headers: {
            Authorization: `Bearer ${auth?.token}`,
          },
        }
      );

      console.log(data);

      if (data.ok) {
        setLoading(false);
      }
    } catch (error) {
      toast.error("Failed, try again");
    }
  };

  return (
    <Layout>
      {/* sidebar for just md large screens */}

      {breakpoints.md && (
        <div style={{ height: "100vh" }}>
          <Sider
            style={{
              height: "100%",
              background: "linear-gradient(45deg, #0b3d91, #000000)",
            }}
          >
            <h5 className="menu-heading mt-2 text-center">Ticketing System</h5>
            <SideNavs />
          </Sider>
        </div>
      )}
      {/* end */}

      <Layout>
        {/* headers */}
        <Header
          style={{
            backgroundColor: "white",
            display: "flex",
            justifyContent: "space-between",
            gap: "20px",
            alignItems: "center",
            padding: "20px",
          }}
        >
          {!breakpoints.md && (
            <div onClick={() => setOpen(true)}> open for mobile</div>
          )}

          <h6>Welcome {auth?.user?.name}</h6>
          <div> profile</div>
          <Drawer
            title="Basic Drawer"
            placement="left"
            onClose={onClose}
            open={open}
            closable={true}
            style={{ width: "280px" }}
          >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Drawer>
        </Header>

        {/* content */}
        <Content
          style={{
            minHeight: "80vh",
            margin: "20px",
            marginTop: "20px",
            padding: "20px",
            // background: "white",
          }}
        >
          {loading ? <Redirect /> : children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default ManagerLayout;
