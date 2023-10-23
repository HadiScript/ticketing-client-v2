import React, { useContext, useEffect, useState } from "react";
import ManagerLayout from "./components/ManagerLayout";
import Breadcrumbs from "../components/Breadcrumbs";
import { IoHome } from "react-icons/io5";
import { Bs0Circle } from "react-icons/bs";
import { getRequest } from "../Actions/Requests";
import { AuthContext } from "../../context/Auth";
import { BiLinkExternal } from "react-icons/bi";
import { Link } from "react-router-dom";

const AllAssignedTcs = () => {
  const [auth] = useContext(AuthContext);

  const [assignedTcs, setAssignedTcs] = useState([]);
  const [loading, setLoading] = useState(false);

  const gettingAllEscalatedTickets = async () => {
    setLoading(true);
    const data = await getRequest("/all-assign-tickets", auth);
    if (data.ok) {
      setLoading(false);
      setAssignedTcs(data.tickets);
    }
  };

  useEffect(() => {
    if (auth && auth?.token) {
      gettingAllEscalatedTickets();
    }
  }, [auth && auth?.token]);

  return (
    <ManagerLayout>
      <Breadcrumbs
        from={"Manager"}
        fromPath={"/manager"}
        fromIcon={<IoHome className="bread-text" />}
        to={"Escalate Tickets"}
        toIcon={<Bs0Circle className="bread-text-active" />}
      />

      {/* {JSON.stringify(assignedTcs)} */}

      <div className="table-responsive">
        <table className="table mt-1 ">
          <thead>
            <tr>
              <th scope="col"># {loading && "loading"}</th>
              <th scope="col">Title</th>
              <th scope="col">Assigned To</th>
              <th scope="col">Picket At</th>
              <th scope="col">Priority</th>
              <th scope="col">Created At</th>
              <th scope="col ">1st SLA</th>
              <th scope="col ">2nd SLA</th>
              <th scope="col "></th>
            </tr>
          </thead>

          <tbody>
            {assignedTcs?.map((x, index) => (
              <tr key={index}>
                <th scope="row">{++index}</th>
                <th scope="row">{x.title}</th>
                <th scope="row"></th>
                <th scope="row">{x.pickedAt.slice(0, 10)}</th>
                <th scope="row">{x.priority}</th>
                <th scope="row">{x.createdAt.slice(0, 10)}</th>
                <th scope="row">{x.firstSLABreach ? <span className="text-danger px-3">Yes</span> : "-"}</th>
                <th scope="row">{x.secondSLABreach ? <span className="px-3 text-danger">Yes</span> : "-"}</th>
                <th>
                  <Link to={`/manager/single/assign/${x._id}`}>
                    <BiLinkExternal role="button" />
                  </Link>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ManagerLayout>
  );
};

export default AllAssignedTcs;
