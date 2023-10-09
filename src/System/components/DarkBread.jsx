import React from "react";

const DarkBread = ({
  from,
  to,
  fromPath,
  fromIcon,
  toIcon,
  center,
  centerIcon,
  centerLink,
}) => {
  return (
    <div className="d-flex justify-content-start align-items-center gap-2 mb-5">
      <div className="d-flex justify-content-start align-items-center gap-1">
        {fromIcon}
        <span className="agent-bread-text">{from}</span>
      </div>
      {center && <span className="text-white">/</span>}
      <div
        className="d-flex justify-content-start align-items-center gap-1"
        style={{ fontWeight: "bold" }}
      >
        {centerIcon}
        <span className="text-white">{center}</span>
      </div>
      {to && <span className="text-white">/</span>}
      <div
        className="d-flex justify-content-start align-items-center gap-1"
        style={{ fontWeight: "bold" }}
      >
        {toIcon}
        <span className="text-white">{to}</span>
      </div>
    </div>
  );
};

export default DarkBread;
