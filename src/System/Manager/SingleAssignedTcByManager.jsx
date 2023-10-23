import React from "react";
import ManagerLayout from "./components/ManagerLayout";
import SingleTicketComponent from "../components/singleTc/SingeTicketComponent";
import { useParams } from "react-router-dom";

const SingleAssignedTcByManager = () => {
  const { id } = useParams();
  return (
    <ManagerLayout>
      <SingleTicketComponent id={id} from="manager-assiged-tcs" />
    </ManagerLayout>
  );
};

export default SingleAssignedTcByManager;
