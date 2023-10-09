import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./System";
import Login from "./System/Login";
import Register from "./System/Register";
import ForgetPassword from "./System/ForgetPassword";

import Admin from "./System/Admin";
import Manager from "./System/Manager";
import Agent from "./System/agent/index";
import Client from "./System/Client";
import AllUsers from "./System/Admin/AllUsers";
import AllUsersManager from "./System/Manager/AllUsersManager";
import AllAgent from "./System/Admin/AllAgent";
import AllManagers from "./System/Admin/AllManagers";
import AllAdmins from "./System/Admin/AllAdmins";
import Category from "./System/Admin/Category";
import CreateAccount from "./System/Admin/CreateAccount";
import Submit from "./System/Client/Submit";
import OpenTickets from "./System/Client/OpenTickets";
import PickedTickets from "./System/agent/PickedTickets";
import SingleTicket from "./System/agent/SingleTicket";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="*" element={"Not found"} />

        {/* Admin Routes */}
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/all-users" element={<AllUsers />} />
        <Route path="/admin/all-agents" element={<AllAgent />} />
        <Route path="/admin/all-managers" element={<AllManagers />} />
        <Route path="/admin/all-admins" element={<AllAdmins />} />
        <Route path="/admin/category" element={<Category />} />
        <Route path="/admin/create-account" element={<CreateAccount />} />

        {/* Manager Routes */}
        <Route path="/manager" element={<Manager />} />
        <Route path="/manager/all-users" element={<AllUsersManager />} />

        {/* Agent Routes */}
        <Route path="/agent" element={<Agent />} />
        <Route path="/agent/picked-request" element={<PickedTickets />} />
        <Route path="/agent/single/:id" element={<SingleTicket />} />

        {/* client Routes */}
        <Route path="/client" element={<Client />} />
        <Route path="/client/submit-request" element={<Submit />} />
        <Route path="/client/open-request" element={<OpenTickets />} />
      </Routes>
    </>
  );
};

export default App;
