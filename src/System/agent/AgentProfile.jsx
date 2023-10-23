import React, { useContext, useEffect, useState } from "react";
import AgentLayout from "./components/AgentLayout";
import { getRequest } from "../Actions/Requests";
import { AuthContext } from "../../context/Auth";
import { FaUserSecret } from "react-icons/fa";
import { AiOutlineProfile } from "react-icons/ai";
import DarkBread from "../components/DarkBread";
import { Card } from "antd";
import UpdateProfileComponent from "../components/UpdateProfileComponent";

const AgentProfile = () => {
  return (
    <AgentLayout>
      <DarkBread from={"Agent"} fromIcon={<FaUserSecret className="agent-bread-text" />} to={"Profile"} toIcon={<AiOutlineProfile className="text-light" />} />

      <UpdateProfileComponent from="profile-page" />
    </AgentLayout>
  );
};

export default AgentProfile;
