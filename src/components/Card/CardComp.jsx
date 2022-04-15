import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Downloads from "../Downloads/Downloads";
import newsUpdate from "../../Images/updates.jpg";

function CardComp({ onClick, showResults }) {
  return showResults ? (
    <div>
      <Container className="mt-5 mx-auto ">
        <Row>
          <Col className="my-4" sm={12} md={6} lg={4} xl={4}>
            <a
              href="https://teamjkf.org/news-update"
              className="text-decoration-none text-dark"
            >
              <Card style={{ maxWidth: "18rem" }}>
                <Card.Img
                  variant="top"
                  src={newsUpdate}
                  style={{ maxHeight: "160px" }}
                />
                <Card.Body>
                  <Card.Title>News Update</Card.Title>
                </Card.Body>
              </Card>
            </a>
          </Col>
          <Col className="my-4" sm={12} md={6} lg={4} xl={4}>
            <Link to="/community" className="text-decoration-none text-dark">
              <Card style={{ maxWidth: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://www.mclellanmarketing.com/wp-content/uploads/2019/07/bigstock-Community-People-Concept-With-278968120_opt.jpg"
                />
                <Card.Body>
                  <Card.Title>Community</Card.Title>
                </Card.Body>
              </Card>
            </Link>
          </Col>
          <Col className="my-4" sm={12} md={6} lg={4} xl={4} onClick={onClick}>
            <Card style={{ maxWidth: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://www.nicepng.com/png/detail/242-2424454_post-navigation-downloads-download-folder-icon-blue.png"
              />
              <Card.Body>
                <Card.Title>Downloads</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  ) : (
    <Downloads onClick={onClick} />
  );
}

export default CardComp;
