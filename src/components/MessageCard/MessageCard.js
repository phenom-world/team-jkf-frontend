import React, { useEffect } from "react";
import { Footer } from "../../pages/index";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { userDetails } from "../../Redux/actions/users";
import MessageBox from "../MessageBox/MessageBox";
import LoadState from "../Spinner/LoadState";
import { Container } from "react-bootstrap";

const MessageCard = () => {
  const dispatch = useDispatch();
  const { isloading, userDetail } = useSelector((state) => state.userDetailsReducer);
  const { posts } = useSelector((state) => state.getPostsReducer);

  useEffect(() => {
    dispatch(userDetails());
  }, [dispatch]);

  return isloading ? (
    <LoadState />
  ) : (
    <div>
      <div className="mb-5 mt-4">
        <Container className="justify-content-start d-flex flex-column align-items-start ">
          <div className="bg-light w-100 p-4 d-flex flex-column justify-content-start align-items-start gap-2 border border-grey">
            <MessageBox username={userDetail?.username} id={userDetail.id} posts={posts} isFriend={true} />
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default MessageCard;
