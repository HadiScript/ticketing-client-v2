import { Tooltip } from "antd";
import React, { PureComponent, useContext, useEffect, useState } from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Legend } from "recharts";
import { getRequest } from "./System/Actions/Requests";
import { AuthContext } from "./context/Auth";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const Check = () => {
  const [auth] = useContext(AuthContext);

  const [arr, setArr] = useState([]);

  const getData = async () => {
    const data = await getRequest("/agent-numbers", auth);
    if (data.ok) {
      setArr([
        ...arr,
        { name: "assignTicketsCount", value: data?.assignTicketsCount },
        { name: "handoverTicketsCount", value: data?.handoverTicketsCount },
        { name: "notPickedButResolved", value: data?.notPickedButResolved },
        { name: "pickedNotResolvedCount", value: data?.pickedNotResolvedCount },
        { name: "resolvedTicketsCount", value: data?.resolvedTicketsCount },
      ]);
    }
  };

  useEffect(() => {
    if (auth && auth?.token) {
      getData();
    }
  }, [auth && auth?.token]);
  return (
    <ResponsiveContainer width={"40%"} height={400}>
      <PieChart>
        <Pie data={arr} cx={120} cy={200} innerRadius={60} outerRadius={80} fill="#8884d8" paddingAngle={5} dataKey="value">
          {arr.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default Check;
