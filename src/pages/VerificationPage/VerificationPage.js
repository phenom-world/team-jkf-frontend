import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { verifyUser } from "../../Redux/actions/users";
import { Container, Card } from "react-bootstrap";
import LoadState from "../../components/Spinner/LoadState";
import { Footer } from "../index";

function VerificationPage() {
  const { token } = useParams();
  let { verifyUser_loading, verifyUserError } = useSelector(
    (state) => state.verifyUserReducer
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(verifyUser(token, navigate));
  }, [dispatch, token, navigate]);

  if (verifyUserError?.split(" ")[2] === "malformed") navigate("/404");

  return verifyUser_loading ? (
    <div>
      <LoadState />
    </div>
  ) : verifyUserError ? (
    <div>
      <Container className="m-5 mx-auto d-flex flex-column small_size">
        <Card
          style={{ maxWidth: "30rem" }}
          className="m-5 mx-auto d-flex flex-column p-4  align-items-center shadow border-0 text-center complete_card"
        >
          <div>
            <div>
              <span style={{ fontSize: "4em", color: "#F40E15" }}>
                <i className="fa-solid fa-circle-exclamation"></i>
              </span>
            </div>
            <div>
              <h4 className=" small_size">{verifyUserError}</h4>
              <p> Resend Verification Link</p>
              <p>
                <span>
                  <Link
                    to="/resend_link"
                    className="text-decoration-none small_size"
                  >
                    Click Here
                  </Link>
                </span>
              </p>
            </div>
          </div>
        </Card>
      </Container>
      <Footer />
    </div>
  ) : null;
}

export default VerificationPage;
