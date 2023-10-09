import React from "react";
import use2ndSla from "../../../utils/use2ndSla";
import { FaTicketAlt } from "react-icons/fa";
import { Button } from "antd";

const SingelItemHead = ({ id, pickedtAt, single, escalatingTicket }) => {
  const elapsedTime = use2ndSla(single.pickedAt);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div className="mainHeading mt-4">
        <h2>{id}</h2>
        <FaTicketAlt />
      </div>

      {/* {single?.comments?.length === 0 && (
        // <span className="text-danger">Please do comment first</span>
        <>{elapsedTime}</>
      )} */}
      <Button className="escalated-btn" onClick={escalatingTicket}>
        Escalate Ticket
      </Button>
    </div>
  );
};

export default SingelItemHead;
