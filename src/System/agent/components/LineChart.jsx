import React, { useState, useEffect, useContext } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { AuthContext } from "../../../context/Auth";
import { getRequest } from "../../Actions/Requests";

const LineChartComponent = () => {
  const [auth] = useContext(AuthContext);
  const [data, setData] = useState([]);

  const getTicketLogs = async () => {
    const data = await getRequest("/ticket-category", auth);
    console.log(data, "here is the")
    if (data?.ok) {
      const formattedData = data?._tickets.map((item) => ({
        date: `${item._id.day}/${item._id.month}/${item._id.year}`,
        count: item.count,
      }));
      setData(formattedData);
    }
  };

  useEffect(() => {
    if (auth && auth?.token) {
      getTicketLogs();
      // getData();
    }
  }, [auth && auth?.token]);

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart width={500} height={300} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="count" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineChartComponent;
