import React from "react";
import { Container } from "react-bootstrap";
import { Footer } from "../../pages/index";

const MembersProfileCard = ({ children }) => {
  return (
    <div>
      <div className=" overflow-auto p-3">
        <Container className="justify-content-start d-flex flex-column align-items-start ">
          <div className="bg-light w-100 p-4 d-flex flex-column justify-content-start align-items-start gap-2 border border-grey">
            {children}
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default MembersProfileCard;
