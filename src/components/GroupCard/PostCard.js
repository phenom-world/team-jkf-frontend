import React from "react";
import ComposeForm from "../ComposeForm/ComposeForm";
import Timeline from "../Timeline/Timeline";

const PostCard = ({ username, id, teamId, posts, isTeam, isFriend }) => {
  console.log(isFriend);
  return (
    <div className="post-container ">
      <ComposeForm username={username} id={id} teamId={teamId} isTeam={isTeam} isFriend={isFriend} />
      <Timeline posts={posts} />
    </div>
  );
};

export default PostCard;
