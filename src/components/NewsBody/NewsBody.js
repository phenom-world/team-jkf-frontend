import React from "react";
import { useSelector } from "react-redux";
import parse from "html-react-parser";
import { Container } from "react-bootstrap";
import "./NewsBody.css";

const NewsBody = ({ children }) => {
  const { post } = useSelector((state) => state.postsReducer);
  const { content } = post;
  let result = content?.replaceAll("&lt;", "<");

  return (
    <Container className="mt-5 news_container">
      {result && parse(result)}
      {children}
    </Container>
  );
};

export default NewsBody;
