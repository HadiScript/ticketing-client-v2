import React from "react";
import AgentLayout from "./components/AgentLayout";
import { FaUserSecret } from "react-icons/fa";
import DarkBread from "../components/DarkBread";
import UpdateProfileComponent from "../components/UpdateProfileComponent";
import { FiSettings } from "react-icons/fi";

const AgentSetting = () => {
  return (
    <AgentLayout>
      <DarkBread from={"Agent"} fromIcon={<FaUserSecret className="agent-bread-text" />} to={"Settigns"} toIcon={<FiSettings className="text-light" />} />

      <UpdateProfileComponent from="setting-page" />
    </AgentLayout>
  );
};

export default AgentSetting;
