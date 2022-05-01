import React from "react";
import { Link } from "react-router-dom";
import "./MessageTab.css";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Message from "../Message/Message";

const MessageTab = () => {
  const { success } = useSelector((state) => state.messageReducer);
  const { id } = useParams();
  return (
    <div className="profile_container mx-2">
      <div className="d-flex flex-row justify-content-start align-items-center gap-3 mt-2 p-2 border-bottom border-top">
        <Link
          className=" text-center messagetab mx-2 p-1 text-decoration-none text-dark"
          role="button"
          to={`/community/users/${id}/message/inbox`}
        >
          Inbox
        </Link>
        <Link
          className=" text-center messagetab mx-2 p-1 text-decoration-none text-dark"
          role="button"
          to={`/community/users/${id}/message/starred`}
        >
          Starred
        </Link>
        <Link
          className=" text-center messagetab mx-2 p-1 text-decoration-none text-dark"
          role="button"
          to={`/community/users/${id}/message/sent`}
        >
          Sent
        </Link>
        <Link
          className=" text-center messagetab mx-2 p-1 text-decoration-none text-dark"
          role="button"
          to={`/community/users/${id}/message/compose`}
        >
          Compose
        </Link>
      </div>
      {success && <Message variant="success"> Message Sent</Message>}
    </div>
  );
};

export default MessageTab;
