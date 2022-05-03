import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Image } from "react-bootstrap";
import { useParams } from "react-router-dom";
import LoadState from "../../components/Spinner/LoadState";
import { fetchComments, getPost } from "../../Redux/actions/posts";
import NewsHeader from "../NewsHeader/NewsHeader";
import NewsBody from "../../components/NewsBody/NewsBody";
import NewsCommentBox from "../../components/NewsCommentBox/NewsCommentBox";
import Comment from "../../components/Comment/Comment";

const News = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { comment, isloading } = useSelector((state) => state.commentReducer);
  const [comments, setComments] = useState(comment);
  useEffect(() => {
    dispatch(getPost(id));
    dispatch(fetchComments(id));
  }, [id]);

  useEffect(() => {
    setComments(comment);
  }, [comment]);

  return isloading ? (
    <>
      <LoadState />
    </>
  ) : (
    <div>
      <NewsHeader />
      <NewsBody />
      <NewsCommentBox setComments={setComments} />
      <Comment comments={comments} />
    </div>
  );
};

export default News;
