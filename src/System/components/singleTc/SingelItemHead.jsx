import React from "react";
import use2ndSla from "../../../utils/use2ndSla";
import { FaTicketAlt } from "react-icons/fa";
import { Button } from "antd";
import { BsCheck, BsCheck2All } from "react-icons/bs";

const SingelItemHead = ({ id, pickedtAt, single, escalatingTicket, setOpen2, resolvedTc, from }) => {
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

      {/* {JSON.stringify(single?.movements?.find((x) => x.status === 'handover').yes ? "handover already": "escalated") } */}
      <div className="d-flex justify-content-between gap-3">
        {/* single.movements.length === 0 && show handover button */}
        {/* single.pickedby === auth?.user?._id && show handover button */}
        {single?.movements?.length === 0 && (
          <Button className="escalated-btn" onClick={() => setOpen2(true)}>
            Handover Ticket
          </Button>
        )}
        {from === "manager" && (
          <Button className="escalated-btn" onClick={() => setOpen2(true)}>
            Assign Ticket
          </Button>
        )}
        {from !== "manager" && (
          <Button className="escalated-btn" onClick={escalatingTicket}>
            Escalate Ticket
          </Button>
        )}

        {resolvedTc && (
          <Button
            icon={<BsCheck2All size={20} color="green" />}
            onClick={() => {
              let ok = window?.confirm("Are you sure? You check everything?");
              if (ok) {
                resolvedTc();
              }
            }}
          >
            Resolve
          </Button>
        )}
      </div>
    </div>
  );
};

export default SingelItemHead;
