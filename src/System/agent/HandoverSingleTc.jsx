import React, { useContext } from "react";
import AgentLayout from "./components/AgentLayout";
import SingleTicketComponent from "../components/singleTc/SingeTicketComponent";
import { PutRequest } from "../Actions/Requests";
import toast from "react-hot-toast";
import { AuthContext } from "../../context/Auth";
import { useParams } from "react-router-dom";

const HandoverSingleTc = () => {
  const { id } = useParams();
  const [auth] = useContext(AuthContext);
  const resolvedTc = async () => {
    const data = await PutRequest(`/resolved-tc/${id}`, {}, auth);
    if (data.ok) {
      toast.success("ticket has been resolved");
    }
  };

  return (
    <AgentLayout>
      <SingleTicketComponent resolvedTc={resolvedTc} id={id} />
    </AgentLayout>
  );
};

export default HandoverSingleTc;
