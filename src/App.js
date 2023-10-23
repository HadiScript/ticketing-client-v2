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
import AllAgentManager from "./System/Manager/AllAgent";
import EscalateTc from "./System/Manager/EscalateTc";
import HandoverTickets from "./System/agent/HandoverTickets";
import HandoverSingleTc from "./System/agent/HandoverSingleTc";
import ResolvedTc from "./System/agent/ResolvedTc";
import SingleTcByManager from "./System/Manager/SingleTcByManager";
import AssignTickets from "./System/agent/AssignTickets";
import ResolvedClientTickets from "./System/Client/ResolvedClientTickets";
import OpenDetailTicket from "./System/Client/OpenDetailTicket";
import AllAssignedTcs from "./System/Manager/AllAssignedTcs";
import SingleAssignedTcByManager from "./System/Manager/SingleAssignedTcByManager";
import AgentDashboard from "./System/agent/AgentDashboard";
import Check from "./Check";
import AgentProfile from "./System/agent/AgentProfile";
import AgentSetting from "./System/agent/AgentSetting";

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
        <Route path="/manager/all-agents" element={<AllAgentManager />} />
        <Route path="/manager/escalate-tickets" element={<EscalateTc />} />
        <Route path="/manager/assigned-tickets" element={<AllAssignedTcs />} />
        <Route path="/manager/single/:id" element={<SingleTcByManager />} />
        <Route path="/manager/single/assign/:id" element={<SingleAssignedTcByManager />} />

        {/* Agent Routes */}
        <Route path="/agent" element={<Agent />} />
        <Route path="/agent/dashboard" element={<AgentDashboard />} />
        <Route path="/agent/picked-request" element={<PickedTickets />} />
        <Route path="/agent/handover-tickets" element={<HandoverTickets />} />
        <Route path="/agent/resolved-tickets" element={<ResolvedTc />} />
        <Route path="/agent/ho/single/:id" element={<HandoverSingleTc />} />
        <Route path="/agent/single/:id" element={<SingleTicket />} />
        <Route path="/agent/assign-tickets" element={<AssignTickets />} />
        <Route path="/agent/profile" element={<AgentProfile />} />
        <Route path="/agent/settings" element={<AgentSetting />} />

        {/* client Routes */}
        <Route path="/client" element={<Client />} />
        <Route path="/client/submit-request" element={<Submit />} />
        <Route path="/client/open-request" element={<OpenTickets />} />
        <Route path="/client/resolved-request" element={<ResolvedClientTickets />} />
        <Route path="/client/single-request/:id" element={<OpenDetailTicket />} />

        <Route path="/check" element={<Check />} />
      </Routes>
    </>
  );
};

export default App;
