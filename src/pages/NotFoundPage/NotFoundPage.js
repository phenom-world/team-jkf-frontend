import React from "react";
import "./NotFoundPage.css";
import { Link } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div className="content">
      <p style={{ textAlign: "center" }}>
        <div>
          <h1 className="error">
            4
            <span>
              <i class="fas fa-ghost"></i>
            </span>
            4
          </h1>
          <h2 className="error_name">Error: 404 page not found</h2>
          <p className="error_message">
            Sorry, the page you're looking for cannot be accessed
          </p>
          <button
            className="btn btn-primary n-btn"
            onClick={() => navigate("/dashboard")}
          >
            Go to Home
          </button>
        </div>
      </p>
    </div>
  );
};
export default NotFoundPage;
