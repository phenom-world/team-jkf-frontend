import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import { commentPost } from "../../Redux/actions/posts";
import { useParams } from "react-router-dom";

const NewsCommentBox = ({ setComments }) => {
  const [editorValue, setEditorValue] = useState("");
  const dispatch = useDispatch();

  const { userDetail } = useSelector((state) => state.userDetailsReducer);
  const { username } = userDetail;
  const { id } = useParams();

  const handleEditorValueChange = (e) => {
    setEditorValue(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editorValue !== "" || (e.charCode === 13 && editorValue !== "")) {
      const post = { message: editorValue, postId: id };
      const newComment = await dispatch(commentPost(post));
      setComments(newComment);
    }
    setEditorValue("");
  };

  const handleKeyPress = async (e) => {
    if (e.charCode === 13) {
      await handleSubmit(e);
    }
  };
  return (
    <Container className="mt-5 news_container bg-light p-4 w-100">
      <p>Logged in as {username}. Leave a comment</p>
      <p>Comment *</p>
      <form className="w-100" onSubmit={handleSubmit}>
        <div className={"compose-form w-100"}>
          <div className="compose-form-container ">
            <textarea
              value={editorValue}
              onChange={handleEditorValueChange}
              className="compose-form-textarea small_size "
              placeholder={`Write your comment... `}
              onKeyPress={handleKeyPress}
            />
          </div>
        </div>
        <button className="small_size btn-dark mt-3 p-2">{"Post Comment"}</button>
      </form>
    </Container>
  );
};

export default NewsCommentBox;
