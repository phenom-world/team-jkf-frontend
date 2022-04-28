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
  const { userProfileloading, userProfileDetails } = useSelector((state) => state.getUserReducer);

  const { username } = userProfileDetails;

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
            {/* <div className="d-flex justify-content-start align-items-center gap-2 mt-2">
              <div onClick={handleSentMessage} className="bg-secondary text-center">
                {" "}
                Sent
              </div>
              <div onClick={handleReceivedMessage} className="bg-secondary text-center">
                Received
              </div>
              <div onClick={handleStarredMessage} className="bg-secondary  text-center">
                Starred
              </div>
            </div> */}
            <MessageBox username={userDetail?.username} id={userDetail.id} posts={posts} isFriend={true} member={username} />
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default MessageCard;
