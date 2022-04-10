import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

function CardComp() {
  return (
    <div>
      <Container className="mt-5 mx-auto">
        <Row>
          <Col className="my-4" sm={12} md={6} lg={4} xl={4}>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://res.cloudinary.com/valodagreat/image/upload/v1646105898/bigstock-Science-Technology-Technology-340435108-1024x576_y0cwsm.jpg"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="my-4" sm={12} md={6} lg={4} xl={4}>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://res.cloudinary.com/valodagreat/image/upload/v1646105898/bigstock-Science-Technology-Technology-340435108-1024x576_y0cwsm.jpg"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="my-4" sm={12} md={6} lg={4} xl={4}>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://res.cloudinary.com/valodagreat/image/upload/v1646105898/bigstock-Science-Technology-Technology-340435108-1024x576_y0cwsm.jpg"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CardComp;
