import { Card, Tag } from "antd";
import React, { useEffect, useState } from "react";

import { Badge, Descriptions } from "antd";
import { getRequest } from "../../Actions/Requests";

const ClientSingleTicketComponent = ({ url, auth, from }) => {
  const [loading, setLoading] = useState(false);
  const [single, setSingle] = useState();

  const gettingSingleTicket = async () => {
    setLoading(true);
    const data = await getRequest(url, auth);
    if (data.ok) {
      setLoading(false);
      setSingle(data.singleTicket);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (auth && auth?.token) {
      gettingSingleTicket();
    }
  }, [auth && auth?.token]);

  return (
    <>
      <Card className=" mt-3">
        <Descriptions title={loading ? "loading" : single?._id} layout="vertical" bordered>
          <Descriptions.Item label="CreatedAt">{single?.createdAt.slice(0, 10)}</Descriptions.Item>
          <Descriptions.Item label="Priority">{single?.priority}</Descriptions.Item>
          <Descriptions.Item label="Category">{single?.category?.name}</Descriptions.Item>
          <Descriptions.Item label="Status">
            <Tag color="blue">{single?.status}</Tag>
          </Descriptions.Item>
          {single?.pickedBy && <Descriptions.Item label="Agent">{single?.pickedBy?.name}</Descriptions.Item>}
          <br />
          <Descriptions.Item label="Title">{single?.title}</Descriptions.Item>
          <Descriptions.Item label="Description">{single?.description}</Descriptions.Item>
        </Descriptions>
      </Card>
      <hr />
    </>
  );
};

export default ClientSingleTicketComponent;
