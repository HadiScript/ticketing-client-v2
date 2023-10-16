import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaUserSecret } from "react-icons/fa";
import { CiTimer } from "react-icons/ci";
import toast from "react-hot-toast";
import axios from "axios";
import SingelItemHead from "./SingelItemHead";
import SingleDescription from "./SingleDescription";
import SingleComments from "./SingleComments";
import Reply from "./Reply";
import EscalateModal from "./EscalateModal";
import HandoverModal from "./HandoverModal";
import { AuthContext } from "../../../context/Auth";
import { BsCheckAll } from "react-icons/bs";
import { PutRequest, deleteRequest, getRequest } from "../../Actions/Requests";
import AssignModal from "./AssignModal";

const SingleTicketComponent = ({ resolvedTc, id, from }) => {
  const [auth] = useContext(AuthContext);

  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

  const [openEscalate, setOpenEscalate] = useState(false);
  const [currentComment, setCurrentComment] = useState({});
  const [single, setSingle] = useState({});
  const [loading, setLoading] = useState(false);
  const [commentLoading, setCommentLoading] = useState(false);
  const [list, setList] = useState([]);

  const [comment, setComment] = useState("I have recieved your ticket, i'm working onit. If you have any query please do comment here.");

  const gettingSingleTicket = async (x) => {
    try {
      // localhost:5000/api/by/agent/single/${id}...
      setLoading(true);
      const { data } = await axios.get(`/by/agent/single/${x}`, {
        headers: {
          Authorization: `Bearer ${auth?.token}`,
        },
      });

      setLoading(false);
      setSingle(data);
      // object -> data = { ...singleTicketData,  comments : [] }
      setList(data.comments);
    } catch (error) {
      setLoading(false);
      console.log(error);
      toast.error("Failed, try again");
    }
  };

  useEffect(() => {
    toast.success("Please read default comment, then send!", {
      position: "bottom-center",
      icon: <BsCheckAll size={22} color="#99196a" />,
      style: {
        borderRadius: "10px",
        background: "#191c24",
        color: "#fff",
      },
    });

    if (auth && auth?.token) {
      gettingSingleTicket(id);
    }
  }, [auth && auth?.token, id]);

  const addComment = async () => {
    try {
      setCommentLoading(true);
      const data = await PutRequest(
        "/by/agent/add/comment",
        {
          ticketId: id,
          content: comment,
        },
        auth
      );
      if (data.ok) {
        setList([...list, data.comments]);
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed, try again");
    } finally {
      setCommentLoading(false);
    }
  };

  const deleteComment = async (x) => {
    try {
      setCommentLoading(true);
      const data = await deleteRequest(`/delete/comment/${x}`, auth);
      if (data.ok) {
        toast.success("deleted");
        setList(list.filter((i) => i._id !== x));
      } else if (data.error) {
        toast.error(data.error);
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed, try again.");
    } finally {
      setCommentLoading(false);
    }
  };

  const escalatingTicket = async () => {
    const ok = window?.confirm("Are you sure? Ticket will catch by manager!");
    if (ok) {
      setOpenEscalate(true);
    }
  };

  return (
    <>
      <SingelItemHead from={from} resolvedTc={resolvedTc} id={id} pickedtAt={single?.pickedtAt} single={single} escalatingTicket={escalatingTicket} setOpen2={setOpen2} />
      {/* SingleTicket {id} */}
      <SingleDescription single={single} from={from} />

      <SingleComments
        commentLoading={commentLoading}
        comment={comment}
        setComment={setComment}
        addComment={addComment}
        deleteComment={deleteComment}
        auth={auth}
        list={list}
        setOpen={setOpen}
        setCurrentComment={setCurrentComment}
      />
      <Reply open={open} setOpen={setOpen} currentComment={currentComment} list={list} auth={auth} />

      <EscalateModal open={openEscalate} setOpen={setOpenEscalate} auth={auth} ticketId={id} />

      <HandoverModal open={open2} setOpen={setOpen2} auth={auth} ticketId={id} />

      {from === "manager" && <AssignModal open={open2} setOpen={setOpen2} auth={auth} ticketId={id} pickedBy={single.pickedBy} />}
    </>
  );
};

export default SingleTicketComponent;
