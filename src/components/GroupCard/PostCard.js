import React from "react";
import { Container } from "react-bootstrap";
import TweetCard from "react-tweet-card";

const PostCard = () => {
  return (
    <Container className="small_size" style={{ fontStyle: "14px !important" }}>
      <TweetCard
        style={{ fontStyle: "14px !important" }}
        engagement={{
          replies: 206,
          retweets: 17600,
          likes: 128200,
        }}
        emojis={false} // try setting this to true 👀
        showDetails={true} // try setting this to true 😬
        author={{
          name: "Ethan Hardy",
          username: "ethanhardy",
          image:
            "https://pbs.twimg.com/profile_images/581307528828567552/wO10P9j__400x400.jpg",
        }}
        tweet={`You say that it's fucked that gingerbread men live in gingerbread houses, but to a gingerbread person, gingerbread is as inscrutable and fundamental as carbon. The people and homes are no more alike than humans are to diamonds. Only we, their gods and creators, can see the horror`}
        time={new Date(2021, 11, 21, 14, 6)}
        source="Twitter for iPhone"
        permalink="https://twitter.com/ethanhardy/status/1473278732676837382"
        fitInsideContainer
      />
    </Container>
  );
};

export default PostCard;
