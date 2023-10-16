import React, { useContext, useEffect, useState } from "react";
import ClientLayout from "./components/ClientLayout";
import { AuthContext } from "../../context/Auth";
import { getRequest } from "../Actions/Requests";
import { IoHome } from "react-icons/io5";
import { AiFillFolderOpen } from "react-icons/ai";
import Breadcrumbs from "../components/Breadcrumbs";

import { Card, List } from "antd";
import { Link } from "react-router-dom";
import { BsCheckSquareFill } from "react-icons/bs";

const ResolvedClientTickets = () => {
  const [auth] = useContext(AuthContext);
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  const gettingList = async () => {
    setLoading(true);
    let data = await getRequest("/resolved-tickets", auth);

    if (data.ok) {
      setLoading(false);
      setList(data.tickets);
    }
  };

  useEffect(() => {
    if (auth && auth?.token) {
      gettingList();
    }
  }, [auth && auth?.token]);

  return (
    <ClientLayout>
      <Breadcrumbs
        from={"Client"}
        fromPath={"/client"}
        to={"Resolved Request"}
        fromIcon={<IoHome className="bread-text" />}
        toIcon={<AiFillFolderOpen className="bread-text-active" />}
      />
      {/* {JSON.stringify(list)} */}

      <Card className="cardStyle mt-3">
        <h3>Resolved Tickets</h3>
        <List
          loading={loading}
          itemLayout="horizontal"
          dataSource={list}
          renderItem={(item, index) => (
            <List.Item>
              <List.Item.Meta
                avatar={<BsCheckSquareFill color="blue" />}
                title={
                  <b>
                    <Link className="text-dark" to={`/resolved-detail/${item._id}`}>
                      {item.title}
                    </Link>
                  </b>
                }
                description={<p className="text-dark">{item.description.slice(0, 100)}</p>}
              />
            </List.Item>
          )}
        />
      </Card>
    </ClientLayout>
  );
};

export default ResolvedClientTickets;
