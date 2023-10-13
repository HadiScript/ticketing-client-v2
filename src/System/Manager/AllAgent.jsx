import React from "react";
import ManagerLayout from "./components/ManagerLayout";
import AllUsersComponent from "../components/AllUsersComponent";

const AllAgentManager = () => {
  return (
    <ManagerLayout>
      <AllUsersComponent heading={"All Managers"} url={"/all-agent"} />
    </ManagerLayout>
  );
};

export default AllAgentManager;
