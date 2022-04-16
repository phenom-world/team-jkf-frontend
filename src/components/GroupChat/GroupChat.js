import PropTypes from "prop-types";
import "./GroupChat.css";

function Chat(props) {
  const { user, children } = props;

  return (
    <div className="tweet">
      <div className="tweet-header">
        <span className="tweet-user">@{user}</span>
      </div>
      <div className="tweet-content text-wrap">{children}</div>
    </div>
  );
}

Chat.propTypes = {
  user: PropTypes.string,
};

export default Chat;
