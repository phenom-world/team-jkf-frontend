import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Image } from "react-bootstrap";
import { useParams } from "react-router-dom";
import LoadState from "../../components/Spinner/LoadState";
import { getPost } from "../../Redux/actions/posts";
import NewsHeader from "../NewsHeader/NewsHeader";
import NewsBody from "../../components/NewsBody/NewsBody";
import NewsCommentBox from "../../components/NewsCommentBox/NewsCommentBox";
import { userDetails } from "../../Redux/actions/users";

const News = () => {
  const { id } = useParams();
  const title = "asas";
  const dispatch = useDispatch();

  const { post, isloading } = useSelector((state) => state.postsReducer);

  useEffect(() => {
    dispatch(getPost(id));
  }, [id]);

  return isloading ? (
    <>
      <LoadState />
    </>
  ) : (
    <div>
      <NewsHeader />
      <NewsBody />
      <NewsCommentBox />
    </div>
  );
};

export default News;
