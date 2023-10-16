import React, { useContext, useEffect, useState } from "react";
import AgentLayout from "./components/AgentLayout";
import Breadcrumbs from "../components/Breadcrumbs";
import { FaTicketAlt, FaUserSecret } from "react-icons/fa";
import { CiTimer } from "react-icons/ci";
import { getRequest } from "../Actions/Requests";
import { AuthContext } from "../../context/Auth";
import PickedTicketItems from "./components/PickedTicketItems";
import DarkBread from "../components/DarkBread";

const HandoverTickets = () => {
  const [auth] = useContext(AuthContext);

  const [picks, setPicks] = useState([]);
  const [loading, setLoading] = useState(false);

  const gettingHandoverTickets = async () => {
    setLoading(true);
    const data = await getRequest("/handover-to-me", auth);
    if (data.ok) {
      console.log(data.tickets, "here are the hadnover tickets");
      setLoading(false);
      setPicks(data.tickets);
    }
  };

  useEffect(() => {
    if (auth && auth?.token) gettingHandoverTickets();
  }, [auth && auth?.token]);

  return (
    <AgentLayout>
      <DarkBread from={"Agent"} fromIcon={<FaUserSecret className="agent-bread-text" />} to={"Handover Tickets"} toIcon={<CiTimer />} />

      <div className="mainHeading mt-4">
        <h2>Development Category Tickets</h2>
        <FaTicketAlt />
      </div>

      <div className="table-responsive">
        <table className="table mt-1 agent-table">
          <thead>
            <tr>
              <th scope="col"># {loading && "loading"}</th>
              <th scope="col">Title</th>
              <th scope="col">Picket At</th>
              <th scope="col">Priority</th>
              <th scope="col">Created At</th>
              <th scope="col ">1st SLA</th>
              <th scope="col ">2nd SLA</th>
              <th scope="col "></th>
            </tr>
          </thead>

          <tbody>
            {/* from = "pickedTc" will showing the counting of the first Slas, from here handover ticket are not need to shoing couting */}
            {picks?.map((x, index) => (
              <PickedTicketItems x={x} index={index} from="handoverTc" />
            ))}
          </tbody>
        </table>
      </div>
    </AgentLayout>
  );
};

export default HandoverTickets;
