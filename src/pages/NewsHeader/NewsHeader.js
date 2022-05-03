import React from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Image } from "react-bootstrap";
import moment from "moment";

const NewsHeader = () => {
  const { post } = useSelector((state) => state.postsReducer);
  const { title, coverphoto, comment, createdAt, author } = post;
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
          <Image src={coverphoto} className="mt-5" />
          <div>
            <h5>{post.title}</h5>
            <div className="d-flex align-items-center justify-content-flex-start gap-4">
              <div>
                <i className="fa-solid fa-calendar-days text-danger"></i> {moment(createdAt).format("DD/MM/YYYY")}
              </div>
              <div>
                <i className="fa-solid fa-users text-danger"></i> {author}{" "}
              </div>
              <div>
                <i className="fa-solid fa-comment text-danger"></i> {comment ? comment.length : 0}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default NewsHeader;
