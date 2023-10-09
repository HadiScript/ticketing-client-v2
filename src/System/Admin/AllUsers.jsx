import React from "react";
import AdminLayout from "./components/AdminLayout";
import AllUsersComponent from "../components/AllUsersComponent";
import Breadcrumbs from "../components/Breadcrumbs";
import { IoHome } from "react-icons/io5";
import { PiUsersFourLight } from "react-icons/pi";

const AllUsers = () => {
  return (
    <AdminLayout>
      <Breadcrumbs
        from={"Admin"}
        fromPath={"/admin"}
        to={"All Users"}
        fromIcon={<IoHome className="bread-text" />}
        toIcon={<PiUsersFourLight className="bread-text-active" />}
      />
      <div className="my-3" />

      <AllUsersComponent heading={"All Clients"} url={"/all-client"} />
    </AdminLayout>
  );
};

export default AllUsers;
