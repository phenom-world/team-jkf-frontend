import React from "react";
import { Outlet } from "react-router";
import MessageTab from "../../components/MessageTab/MessageTab";

const Message = () => {
  return (
    <div>
      <MessageTab />
      <Outlet />
    </div>
  );
};

export default Message;
