import React from "react";
import ManagerLayout from "./components/ManagerLayout";
import AllUsersComponent from "../components/AllUsersComponent";

const AllUsersManager = () => {
  return (
    <ManagerLayout>
      <AllUsersComponent heading={"All Users"} role={"client"} />
    </ManagerLayout>
  );
};

export default AllUsersManager;
