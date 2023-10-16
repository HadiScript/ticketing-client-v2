import React, { useEffect, useState } from "react";

import { BiLinkExternal } from "react-icons/bi";
import { Link } from "react-router-dom";
import use2ndSla from "../../../utils/use2ndSla";

const PickedTicketItems = ({ x, index, from = "pickedTc" }) => {
  const elapsedTime = use2ndSla(x.pickedAt);
  // const [elapsedTime, setElapsedTime] = useState(
  //   calculateElapsedTime(x.pickedAt)
  // );

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setElapsedTime((prevTime) => prevTime + 1); // Increment by 1 second
  //   }, 1000); // Update every second

  //   return () => clearInterval(timer); // Cleanup on component unmount
  // }, []);

  // function calculateElapsedTime(createdAt) {
  //   const diffInMilliseconds = new Date() - new Date(createdAt);
  //   return Math.floor(diffInMilliseconds / 1000); // Convert to seconds
  // }

  // function formatTime(seconds) {
  //   const mins = Math.floor(seconds / 60);
  //   const secs = seconds % 60;
  //   return `${mins.toString().padStart(2, "0")}:${secs
  //     .toString()
  //     .padStart(2, "0")}`;
  // }

  return (
    <>
      <tr>
        <th scope="row">{++index}</th>
        <th scope="row">{x.title}</th>
        <th scope="row">{x.pickedAt.slice(0, 10)}</th>
        <th scope="row">{x.priority}</th>
        <th scope="row">{x.createdAt.slice(0, 10)}</th>
        <th scope="row">{x.firstSLABreach ? <span className="breached px-3">Yes</span> : "-"}</th>
        <th scope="row">
          <span className={`${elapsedTime >= 600 && "breached"} text-center px-3`}>
            {from !== "handoverTc" && from !== "assignTc" ? elapsedTime : x.secondSLABreach ? <span className="breached px-3">Yes</span> : "-"}
          </span>
        </th>
        <th>
          {from === "pickedTc" && (
            <Link to={`/agent/single/${x._id}`}>
              <BiLinkExternal role="button" />
            </Link>
          )}

          {from === "handoverTc" && (
            <Link to={`/agent/ho/single/${x._id}`}>
              <BiLinkExternal role="button" />
            </Link>
          )}

          {from === "assignTc" && (
            <Link to={`/agent/ho/single/${x._id}`}>
              <BiLinkExternal role="button" />
            </Link>
          )}
        </th>
      </tr>
    </>
  );
};

export default PickedTicketItems;
