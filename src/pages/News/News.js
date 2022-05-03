import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import LoadState from "../../components/Spinner/LoadState";
import { getPost } from "../../Redux/actions/posts";

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
      <div className="title mb-5">
        <p>
          Home <i className="fa-solid fa-angle-right"></i>
          <span className="text-danger"> {title}</span>
        </p>
      </div>
      <Container>
        <div>
          <img src={post.coverphoto} className="mt-5"></img>
        </div>
      </Container>
    </div>
  );
};

export default News;
