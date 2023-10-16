import React, { useContext, useEffect, useState } from "react";
import AgentLayout from "./components/AgentLayout";
import { AuthContext } from "../../context/Auth";
import DarkBread from "../components/DarkBread";
import { getRequest } from "../Actions/Requests";
import { CiTimer } from "react-icons/ci";
import { FaUserSecret } from "react-icons/fa";

const ResolvedTc = () => {
  const [auth] = useContext(AuthContext);

  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  const gettingResolvedTickets = async () => {
    setLoading(true);
    const data = await getRequest("/my-resolved", auth);
    if (data.ok) {
      setLoading(false);
      setList(data.tickets);
    }
  };

  useEffect(() => {
    if (auth && auth?.token) gettingResolvedTickets();
  }, [auth && auth?.token]);

  return (
    <AgentLayout>
      <DarkBread from={"Agent"} fromIcon={<FaUserSecret className="agent-bread-text" />} to={"Resolved Tickets"} toIcon={<CiTimer />} />

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
            {list.map((x, index) => (
              <tr>
                <th scope="row">{++index}</th>
                <th scope="row">{x.title}</th>
                <th scope="row">{x.createdAt.slice(0, 10)}</th>
                <th scope="row">{x.pickedAt.slice(0, 10)}</th>
                <th scope="row">{x.pickedBy}</th>
                <th scope="row">{x.resolvedAt}</th>
                <th scope="row">{x.resolvedBy}</th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AgentLayout>
  );
};

export default ResolvedTc;
