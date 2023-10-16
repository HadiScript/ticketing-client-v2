import React, { useContext, useEffect, useState } from "react";
import SingleTicketComponent from "../components/singleTc/SingeTicketComponent";
import ManagerLayout from "./components/ManagerLayout";
import { useParams } from "react-router-dom";
import { getRequest } from "../Actions/Requests";
import { AuthContext } from "../../context/Auth";

const SingleTcByManager = () => {
  const { id } = useParams();

  return (
    <ManagerLayout>
      <SingleTicketComponent id={id} from="manager" />
    </ManagerLayout>
  );
};

export default SingleTcByManager;
