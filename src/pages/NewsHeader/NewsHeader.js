import React from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Image } from "react-bootstrap";
import moment from "moment";

const NewsHeader = () => {
  const { post } = useSelector((state) => state.postsReducer);
  const { title, coverphoto, comment } = post;
  return (
    <>
      <div className="title mb-5">
        <p>
          Home <i className="fa-solid fa-angle-right"></i>
          <span className="text-danger"> {title}</span>
        </p>
      </div>
      <Container>
        <div>
          <Image src={coverphoto} className="mt-5" style={{ width: "100%" }} />
          <div className="mt-3">
            <h3>{post.title}</h3>
          </div>
        </div>
      </Container>
    </>
  );
};

export default NewsHeader;
