import { Avatar, Button, Card, Input, List } from "antd";
import React from "react";

const SingleComments = ({
  commentLoading,
  comment,
  setComment,
  addComment,
  deleteComment,
  list,
  auth,
  setOpen,
  setCurrentComment,
}) => {
  return (
    <>
      <Card className="blackCard  mt-2">
        <div className="row">
          <div className="col-md-11">
            <Input.TextArea
              style={{
                backgroundColor: "transparent",
                color: "white",
                fontWeight: "600",
              }}
              value={comment}
              onChange={(e) => setComment((e) => e.target.value)}
            />
          </div>
          <div className="col-md-1 mt-2">
            <Button
              loading={commentLoading}
              className="clicks"
              onClick={addComment}
            >
              Submit
            </Button>
          </div>
        </div>
      </Card>

      <List
        style={{ backgroundColor: "#191c24", borderRadius: "10px" }}
        className=" mt-2 p-2"
        itemLayout="horizontal"
        dataSource={list}
        renderItem={(item, index) => (
          <List.Item
            actions={[
              <span
                className="text-white"
                role="button"
                onClick={() => {
                  setOpen(true);
                  setCurrentComment(item);
                }}
              >
                reply
              </span>,
              <>
                {item.createdBy === auth?.user?._id && (
                  <a
                    className="text-danger"
                    onClick={() => deleteComment(item._id)}
                  >
                    delete
                  </a>
                )}
              </>,
            ]}
          >
            <List.Item.Meta
              avatar={
                <Avatar
                  src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`}
                />
              }
              title={<a className="text-white">{item.createdBy}</a>}
              description={[<span className="text-white">{item.content}</span>]}
            />
          </List.Item>
        )}
      />
    </>
  );
};

export default SingleComments;
