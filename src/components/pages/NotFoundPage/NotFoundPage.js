import React from "react";
import "./NotFoundPage.css";
import { Link } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div className="content">
      <p style={{ textAlign: "center" }}>
        <div onClick={() => navigate("/dashboard")}>
          <button className="btn btn-primary n-btn">Go to Home</button>
        </div>
      </p>
    </div>
  );
};
export default NotFoundPage;
