import React from "react";
import ComposeForm from "../ComposeForm/ComposeForm";
import Timeline from "../Timeline/Timeline";

const PostCard = ({ username, id, teamId, posts }) => {
  return (
    <div className="post-container ">
      <ComposeForm username={username} id={id} teamId={teamId} />
      <Timeline posts={posts} />
    </div>
  );
};

export default PostCard;
