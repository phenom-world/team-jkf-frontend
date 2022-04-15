import React from "react";
import { Image } from "react-bootstrap";
import "./avatar.css";

const Avatar = ({ imageUrl }) => {
  return (
    <div>
      <Image
        src={imageUrl}
        alt="My logo"
        className="avatar"
        width="100%"
        height="auto"
      />
    </div>
  );
};

export default Avatar;
