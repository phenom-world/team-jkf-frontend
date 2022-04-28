import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSentMessage } from "../../Redux/actions/chat";

const SentMessage = () => {
  const { message } = useSelector((state) => state.getSentMessageReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSentMessage());
  }, [dispatch]);

  return (
    <div className="mb-5">
      <div className="justify-content-start d-flex profile_container flex-column align-items-start ">
        <div className="bg-light w-100 p-4 d-flex flex-column justify-content-start align-items-start gap-2 border border-grey">
          Sent Message{" "}
        </div>
      </div>
    </div>
  );
};

export default SentMessage;
