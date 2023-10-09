import React from "react";
import AdminLayout from "./components/AdminLayout";
import Breadcrumbs from "../components/Breadcrumbs";
import { IoHome } from "react-icons/io5";

const Admin = () => {
  return (
    <AdminLayout>
      <Breadcrumbs
        from={"Admin"}
        fromPath={"/admin"}
        fromIcon={<IoHome className="bread-text" />}
      />
      <div className="row mt-2">
        <div className="col-md-6 ">
          <div className="cardStyle p-2 " style={{ height: "400px" }}>
            Chart One
          </div>
        </div>
        <div className="col-md-6">
          <div className="cardStyle p-2" style={{ height: "400px" }}>
            Chart Two
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-4">
          <div className="cardStyle p-2" style={{ height: "200px" }}>
            Chart One
          </div>
        </div>
        <div className="col-md-4">
          <div className="cardStyle p-2" style={{ height: "200px" }}>
            Chart Two
          </div>
        </div>
        <div className="col-md-4">
          <div className="cardStyle p-2" style={{ height: "200px" }}>
            Chart Two
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Admin;
