import React, { useState, useEffect } from "react";
import { Alert } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { SEND_MESSAGE } from "../../Redux/constants/chatType";
import "./Message.css";

const Message = ({ variant, children }) => {
  const [show, setShow] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const timeId = setTimeout(() => {
      setShow(false);
      dispatch({ type: SEND_MESSAGE, payload: false });
      dispatch({ type: "POST", payload: false });
      dispatch({ type: "SOCIAL_REGISTER_FAILURE", payload: false });
      dispatch({ type: "AUTH_FAILURE", payload: false });
      dispatch({ type: "REGISTER_FAILURE", payload: false });
    }, 1000);

    return () => {
      clearTimeout(timeId);
    };
  }, []);

  const onToggle = () => (
    setShow(!show),
    dispatch({ type: SEND_MESSAGE, payload: false }),
    dispatch({ type: "POST", payload: false }),
    dispatch({ type: "SOCIAL_REGISTER_FAILURE", payload: false }),
    dispatch({ type: "AUTH_FAILURE", payload: false }),
    dispatch({ type: "REGISTER_FAILURE", payload: false })
  );

  return (
    <>
      <Alert variant={variant} dismissible onClick={onToggle} show={show} className="py-2 d-flex align-items-center justify-content-center">
        <div>{children}</div>
      </Alert>
    </>
  );
};

export default Message;
