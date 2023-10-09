import { Breadcrumb } from "antd";
import React from "react";
import { IoCreate, IoHome } from "react-icons/io5";
import { Link } from "react-router-dom";

const Breadcrumbs = ({
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
    <Breadcrumb
      className="mb-3"
      items={[
        {
          title: (
            <b className="d-flex align-items-center gap-2 ">
              {fromIcon}
              <Link to={fromPath} className="bread-text">
                {from}
              </Link>
            </b>
          ),
        },
        {
          title: center && (
            <b className="d-flex align-items-center gap-2 ">
              {centerIcon}
              <Link to={centerLink} className="bread-text-active">
                {center}
              </Link>
            </b>
          ),
        },
        {
          title: (
            <b className="d-flex align-items-center gap-2 ">
              {toIcon}
              <span className="bread-text-active">{to}</span>
            </b>
          ),
        },
      ]}
    />
  );
};

export default Breadcrumbs;