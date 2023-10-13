import React, { useContext, useState } from "react";
import { AuthContext } from "../src/context/Auth";
import { List } from "antd";

const ReplyModal = ({}) => {
  // const [auth] = useContext(AuthContext); or we can extract it from parent component;
  // const [replies, setReplies] = useState([]);

  // extract data from parent componennt (above line : const ReplyModal = ({current (comment), open, setOpen  }) => {)

  // create an function to getAllReplies of a comment by its _id -> current._id
  // call that function in useEffect, response -> setReplies(data._replies)

  // that this stage, we would have all the comments;

  // render -> display all replies in list of antd design

  // function for do reply
  // function for delete a reply by its id

  return (
    <div>
      {/* let consider we have replies array  */}
      {/* with out List */}
      {/* {replies.length === 0 ? <>No reply yet</> : <>{display youre replies list}</>} */}

      {/* <List
        dataSource={replies}
        renderItem={(item, index) => (
          <List.Item
            actions={[
              <>
                {item.createdBy === auth?.user?._id && (
                  <a
                    className="text-danger"
                    onClick={() => deleteReply(item._id)}
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
      /> */}
    </div>
  );
};

export default ReplyModal;
