import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "./Comment.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteComment } from "../../Redux/actions/posts";

const Comment = ({ comments }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { userDetail } = useSelector((state) => state.userDetailsReducer);
  const { username } = userDetail;

  const handleDelete = (commentId) => {
    dispatch(deleteComment(commentId));
  };

  console.log(comments);

  return (
    <Container className="news_container mt-4">
      <div className="d-flex flex-column justify-content-center w-100">
        <h4>Comments</h4>

        {comments?.map((item, i) => (
          <>
            <div className="d-flex justify-content-between">
              <div className="comment_list p-3">
                <strong>{item.username}</strong> : {item.message}
              </div>
              {item.username === username && (
                <div className="d-flex align-items-center" onClick={() => handleDelete(item._id)}>
                  <i className="fa-solid fa-trash-can text-danger"></i>
                </div>
              )}
            </div>
            <hr />
          </>
        ))}
      </div>
    </Container>
  );
};

export default Comment;
