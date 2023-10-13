import React from "react";

const singleTicket = () => {
  // get id by useParams();
  // create a function to get single ticket by id -> url -> localhost:5000/api/by/agent/ticket/${id}
  // singleTicket state = {} , commentList state = []

  // setSingleTicket(data (comming from request))
  // setComment(data.comments);

  // call that function in useEffect dep shall be -> [auth && auth.token, id]

  // if(comments.length === 0) do somethings... -> toast

  // create a function for post request ->
  // const data = await PutRequest(
  //   "/by/agent/add/comment",
  //   {
  //     ticketId: id,
  //     content: comment,
  //   },
  //   auth
  // );
  // if (data.ok) {
  //   setList([...list, data.comments]);
  // }

  // once we created do comment function
  // then we have to create another function to reply a comment, for this we need a ticket id
  // we can access id by onClick={() => {
  //  setOpen(true);
  // setCurrentComment(item) -> item is an instance of a comment
  //  }}

  // same logic will be lying on esclating ticket 
  // 

  return <div>singleTicket</div>;
};

export default singleTicket;
