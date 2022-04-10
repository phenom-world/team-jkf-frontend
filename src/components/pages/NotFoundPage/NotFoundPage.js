import React from "react";
import { Link } from "react-router-dom";
import "./NotFoundPage.css";
import Button from "../../Button/Button";
// import PageNotFound from "../../../Images/404.png";

const NotFoundPage = () => {
  return (
    <div className="content">
      <p style={{ textAlign: "center" }}>
        <button className="btn btn-primary n-btn">Go to Home</button>
      </p>
    </div>
  );
};
export default NotFoundPage;
