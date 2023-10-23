import DarkBread from "../components/DarkBread";
import { MdDashboard } from "react-icons/md";
import { IoHome } from "react-icons/io5";

import React, { useContext, useEffect, useState } from "react";
import AgentLayout from "./components/AgentLayout";
import { getRequest } from "../Actions/Requests";
import { AuthContext } from "../../context/Auth";
import PieChartComponent from "../components/PieChart";
import { Card, Divider, List } from "antd";
import { Link } from "react-router-dom";
import LineChart from "./components/LineChart";
import LineChartComponent from "./components/LineChart";

const COLORS = ["#0f3f5d", "#00C49F", "#FFBB28", "#FF8042"];
const data = [
  { name: "Assigned", count: 22 },
  { name: "Handover", count: 21 },
  { name: "Not Picked but Resolved", count: 1 },
  { name: "Picked Not Resolved", count: 0 },
  { name: "Resolved", count: 1 },
];

const AgentDashboard = () => {
  const [auth] = useContext(AuthContext);
  const [logsLoading, setLogsLoading] = useState(false);
  const [loading, setLoading] = useState(false);

  // pickedTickets,
  // assignToAgent,
  // handedOverToOtherAgent,
  // handedOverToMe,

  const [pickedTickets, setPicketTickets] = useState([]);
  const [assignToAgent, setAssignToAgent] = useState([]);
  const [handedOverToOtherAgent, sethandedOverToOtherAgent] = useState([]);
  const [handedOverToMe, sethandedOverToMe] = useState([]);
  const [secondSla, setSecondSla] = useState({
    count: 0,
    tcs: [],
  });

  const getData = async () => {
    setLoading(true);
    const data = await getRequest("/agent-numbers", auth);
    // if (data.ok) {
    // }
    setLoading(false);
    console.log(data);
    setLoading(false);
  };

  const getData2ndSla = async () => {
    setLoading(true);
    const data = await getRequest("/second-sla-breached", auth);
    if (data.ok) {
      setSecondSla({ ...secondSla, count: data.breachCount, tcs: data.breachedTickets });
    }
  };

  const getTicketLogs = async () => {
    setLogsLoading(true);
    const data = await getRequest("/ticket-logs", auth);
    if (data.ok) {
      setLogsLoading(false);
      setPicketTickets(data.pickedTickets);
      setAssignToAgent(data.assignToAgent);
      sethandedOverToOtherAgent(data.handedOverToOtherAgent);
      sethandedOverToMe(data.handedOverToMe);
    }
    setLogsLoading(false);
  };

  useEffect(() => {
    if (auth && auth?.token) {
      getData2ndSla();
      getTicketLogs();
      // getData();
    }
  }, [auth && auth?.token]);

  return (
    <AgentLayout>
      <DarkBread from={"Agent"} fromIcon={<IoHome className="agent-bread-text" />} to={"Dashboard"} toIcon={<MdDashboard color="white" />} />

      <div className="row">
        <div className="col-md-12">
          <Card style={{ backgroundColor: "#191c24", border: "none" }}>
            <h5 className="text-light">Ticket Stats</h5>
            <LineChartComponent />
          </Card>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-md-4">
          <Card style={{ backgroundColor: "#191c24", border: "none", marginTop: "10px" }}>
            <h5 className="text-light">Ticket Stats</h5>
            <PieChartComponent _data={data} COLORS={COLORS} />
          </Card>

          <Card style={{ backgroundColor: "#191c24", border: "none", marginTop: "2px", marginTop: "10px" }}>
            <h5 className="text-light">2nd Sla breached</h5>
            <h5 className="text-center display-1 text-light">
              <strong>{secondSla.count}</strong>{" "}
            </h5>
          </Card>
        </div>
        <div className="col-md-8">
          <Card style={{ backgroundColor: "#191c24", border: "none", height: "100%", marginTop: "10px" }}>
            <h5 className="text-light">Ticket logs that done by you</h5>
            <hr />
            <h6 className="text-light">Picked Tickets</h6>
            <List
              loading={logsLoading}
              itemLayout="horizontal"
              dataSource={pickedTickets}
              renderItem={(item, index) => (
                <List.Item>
                  <List.Item.Meta
                    title={
                      <Link className="text-light" to={`/agent/single/${item._id}`}>
                        {item.title}
                      </Link>
                    }
                    description={<span className="text-light">{item.description?.slice(0, 150)}</span>}
                  />
                </List.Item>
              )}
            />
            <Divider />
            <h6 className="text-light">Assigned By Manager</h6>
            <List
              loading={logsLoading}
              itemLayout="horizontal"
              dataSource={assignToAgent}
              renderItem={(item, index) => (
                <List.Item>
                  <List.Item.Meta
                    title={
                      <Link className="text-light" to={`/agent/single/${item._id}`}>
                        {item.title}
                      </Link>
                    }
                    description={<span className="text-light">{item.description?.slice(0, 150)}</span>}
                  />
                </List.Item>
              )}
            />

            <Divider />
            <h6 className="text-light">Handover to me</h6>
            <List
              loading={logsLoading}
              itemLayout="horizontal"
              dataSource={handedOverToMe}
              renderItem={(item, index) => (
                <List.Item>
                  <List.Item.Meta
                    title={
                      <Link className="text-light" to={`/agent/single/${item._id}`}>
                        {item.title}
                      </Link>
                    }
                    description={<span className="text-light">{item.description?.slice(0, 150)}</span>}
                  />
                </List.Item>
              )}
            />

            <Divider />
            <h6 className="text-light">Handover to other agent</h6>
            <List
              loading={logsLoading}
              itemLayout="horizontal"
              dataSource={handedOverToOtherAgent}
              renderItem={(item, index) => (
                <List.Item>
                  <List.Item.Meta
                    title={
                      <Link className="text-light" to={`/agent/single/${item._id}`}>
                        {item.title}
                      </Link>
                    }
                    description={<span className="text-light">{item.description?.slice(0, 150)}</span>}
                  />
                </List.Item>
              )}
            />
          </Card>
        </div>
      </div>
    </AgentLayout>
  );
};

export default AgentDashboard;
