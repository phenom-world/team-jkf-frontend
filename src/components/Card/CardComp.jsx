import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import "./CardComp.css";

function CardComp({}) {
  const { posts } = useSelector((state) => state.postsReducer);
  const recentposts = [...posts].reverse();
  return (
    <div className="mt-3 w-100">
      <Row>
        {recentposts?.map((post) => (
          <Col className="my-4" sm={12} md={6} lg={4} xl={4} key={post._id}>
            <a href={`https://teamjkf.org/unfolding-the-agenda/`} className="text-decoration-none text-dark ">
              <Card style={{ maxWidth: "23rem" }} className="shadow-lg cardstyle mb-5">
                <Card.Img variant="top" src={post.coverphoto} style={{ maxHeight: "16rem" }} className="card_image" />
                <Card.Body className="post_title">{post.title}</Card.Body>
                <Card.Body className="read_more shadow-lg">
                  {" "}
                  <a href={`https://teamjkf.org/unfolding-the-agenda/`} className="text-decoration-none readmore_text ">
                    Read more...
                  </a>
                </Card.Body>
              </Card>
            </a>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default CardComp;
