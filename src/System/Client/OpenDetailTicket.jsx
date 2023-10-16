import React, { useContext } from "react";
import ClientLayout from "./components/ClientLayout";
import ClientSingleTicketComponent from "./components/ClientSingleTicketComponent";
import { AuthContext } from "../../context/Auth";
import { useParams } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { AiFillFolderOpen } from "react-icons/ai";
import Breadcrumbs from "../components/Breadcrumbs";

const OpenDetailTicket = () => {
  const { id } = useParams();
  const [auth] = useContext(AuthContext);

  return (
    <ClientLayout>
      <Breadcrumbs
        from={"Client"}
        fromPath={"/client"}
        to={"Single Request"}
        fromIcon={<IoHome className="bread-text" />}
        toIcon={<AiFillFolderOpen className="bread-text-active" />}
      />

      {/* // .... // */}
      <ClientSingleTicketComponent from="open-inprogress" url={`/_/single/${id}`} auth={auth} />
    </ClientLayout>
  );
};

export default OpenDetailTicket;
