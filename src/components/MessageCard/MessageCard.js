import React, { useEffect } from "react";
import TeamProfileCard from "../TeamProfileCard/TeamProfileCard";
import { Footer } from "../../pages/index";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getTeam } from "../../Redux/actions/teams";
import { userDetails } from "../../Redux/actions/users";
import { getPosts } from "../../Redux/actions/posts";
import MessageBox from "../MessageBox/MessageBox";
import LoadState from "../Spinner/LoadState";
import { Container } from "react-bootstrap";

const MessageCard = () => {
  const { teamname } = useParams();
  const dispatch = useDispatch();
  const { teamloading, TeamDetails } = useSelector((state) => state.getTeamReducer);
  const { isloading, userDetail } = useSelector((state) => state.userDetailsReducer);
  const { getPostsLoading, posts } = useSelector((state) => state.getPostsReducer);
  const { teamId, isTeam } = TeamDetails;

  useEffect(() => {
    dispatch(userDetails());
    dispatch(getTeam(teamname));
    if (teamId) dispatch(getPosts(teamId));
  }, [dispatch, teamname, teamId]);

  return isloading || teamloading || getPostsLoading ? (
    <LoadState />
  ) : (
    <div>
      <div className="mb-5 mt-4">
        <Container className="justify-content-start d-flex flex-column align-items-start ">
          <div className="bg-light w-100 p-4 d-flex flex-column justify-content-start align-items-start gap-2 border border-grey">
            <MessageBox username={userDetail?.username} id={userDetail.id} teamId={teamId} posts={posts} isTeam={isTeam} isFriend={true} />
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default MessageCard;
