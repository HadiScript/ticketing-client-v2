import React, { useEffect, useState } from "react";

const AgentOpenTicketItems = ({ x, index, pickedTicket }) => {
  const [elapsedTime, setElapsedTime] = useState(
    calculateElapsedTime(x.createdAt)
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setElapsedTime((prevTime) => prevTime + 1); // Increment by 1 second
    }, 1000); // Update every second

    return () => clearInterval(timer); // Cleanup on component unmount
  }, []);

  function calculateElapsedTime(createdAt) {
    const diffInMilliseconds = new Date() - new Date(createdAt);
    return Math.floor(diffInMilliseconds / 1000); // Convert to seconds
  }
  

  function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  }



  return (
    <tr key={index}>
      {/* {JSON.stringify(x)} */}
      <th scope="row">{++index}</th>
      <td>{x?.title}</td>
      <td>{x.category?.name}</td>
      <td>{x.priority}</td>
      <td>{x.createdAt.slice(0, 10)}</td>
      <td>
        <span
          className={`${elapsedTime >= 600 && "breached"} text-center px-3`}
        >
          {formatTime(elapsedTime)}
        </span>
      </td>
      <td className="text-center" role="button">
        <span className="text-warning" onClick={() => pickedTicket(x._id)}>
          Pick
        </span>
      </td>
    </tr>
  );
};

export default AgentOpenTicketItems;
