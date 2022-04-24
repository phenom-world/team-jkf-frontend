import PropTypes from "prop-types";
import "./GroupChat.css";

function Chat(props) {
  const { user, children } = props;

  return (
    <div className="tweet ">
      <div className="tweet-header small_size">
        <span className="tweet-user small_size">@{user}</span>
      </div>
      <div className="tweet-content text-wrap small_size">{children}</div>
    </div>
  );
}

Chat.propTypes = {
  user: PropTypes.string,
};

export default Chat;
