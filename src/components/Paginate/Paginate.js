import React from "react";
import { Pagination } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Paginate = ({ page, pages, isAdmin }) => {
  return (
    pages > 1 && (
      <Pagination>
        {[...Array(pages).keys()].map((i) => (
          <LinkContainer to={!isAdmin ? `/community?page=${i + 1}` : `/admin/users/${i + 1}`}>
            <Pagination.Item key={i + 1} active={i + 1 === page}>
              {i + 1}
            </Pagination.Item>
          </LinkContainer>
        ))}
      </Pagination>
    )
  );
};

export default Paginate;
