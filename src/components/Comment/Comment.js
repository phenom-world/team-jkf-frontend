import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "./Comment.css";

const Comment = ({ comments }) => {
  return (
    <Container className="news_container mt-4">
      <div className="d-flex flex-column justify-content-center w-100">
        <h4>Comments</h4>
        {comments?.map((item) => (
          <>
            <div className="comment_list p-3">
              <strong>{item.split(": ")[0]}</strong>:{item.split(":")[1]}
            </div>
            <hr />
          </>
        ))}
      </div>
    </Container>
  );
};

export default Comment;
