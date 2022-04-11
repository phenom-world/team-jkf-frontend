import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { verifyUser } from "../../../Redux/actions/users";
import { Container, Card } from "react-bootstrap";
import LoadState from "../../Spinner/LoadState";

function VerificationPage() {
  const { token } = useParams();
  let { verifyUser_loading, verifyUserError } = useSelector(
    (state) => state.verifyUserReducer
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(verifyUser(token));
  }, [dispatch]);

  if (!verifyUserError && !verifyUser_loading) {
    navigate("/login");
  }
  if (verifyUserError?.split(" ")[2] === "malformed") navigate("/404");

  return verifyUser_loading ? (
    <div>
      <LoadState />
    </div>
  ) : (
    <div>
      <Container className="m-5 mx-auto d-flex flex-column ">
        <Card
          style={{ maxWidth: "30rem" }}
          className="m-5 mx-auto d-flex flex-column p-4  align-items-center shadow border-0 text-center"
        >
          <div>
            <div>
              <span style={{ fontSize: "4em", color: "#F40E15" }}>
                <i className="fa-solid fa-circle-exclamation"></i>
              </span>
            </div>
            <div>
              <h4>{verifyUserError}</h4>
              <p> Resend Verification Link</p>
              <p>
                <span>
                  <Link to="/resend_link" className="text-decoration-none">
                    Click Here
                  </Link>
                </span>
              </p>
            </div>
          </div>
        </Card>
      </Container>
    </div>
  );
}

export default VerificationPage;
