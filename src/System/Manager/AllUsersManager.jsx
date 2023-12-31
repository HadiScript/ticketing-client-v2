import React from "react";
import ManagerLayout from "./components/ManagerLayout";
import AllUsersComponent from "../components/AllUsersComponent";

const AllUsersManager = () => {
  return (
    <ManagerLayout>
      <AllUsersComponent heading={"All Clients"} url={"/all-client"} />
    </ManagerLayout>
  );
};

export default AllUsersManager;
