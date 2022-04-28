import { useState } from "react";
import Avatar from "../Avatar/Avatar";
import { makePost, getPosts } from "../../Redux/actions/posts";
import { sendMessage } from "../../Redux/actions/chat";
import { useDispatch, useSelector } from "react-redux";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "./ComposeForm.css";

function ComposeForm({ username, teamId, isTeam, isFriend, member }) {
  const [editorValue, setEditorValue] = useState("");
  const dispatch = useDispatch();

  const handleEditorValueChange = (e) => {
    setEditorValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editorValue !== "" || (e.charCode === 13 && editorValue !== "")) {
      const post = { message: editorValue };
      const message = { message: editorValue, fromusername: username, tousername: member };
      if (isTeam) {
        await dispatch(makePost(post, teamId));
        await dispatch(getPosts(teamId));
      } else {
        await dispatch(sendMessage(message));
      }
    }
    setEditorValue("");
  };

  const handleKeyPress = async (e) => {
    if (e.charCode === 13) {
      await handleSubmit(e);
    }
  };
  return (
    <>
      {(isFriend || isTeam) && (
        <>
          <form className={isTeam ? "compose-form mb-4" : "compose-form"} onSubmit={handleSubmit}>
            <div className="compose-form-container ">
              {isTeam && <Avatar imageUrl="https://www.gravatar.com/avatar/4184d0175a931e706080351239ac19b0?s=150&r=g&d=mm" />}
              <textarea
                value={editorValue}
                onChange={handleEditorValueChange}
                className="compose-form-textarea small_size"
                placeholder={isTeam ? `What's on your mind? ${username}` : `Send Message to ${member}`}
                onKeyPress={handleKeyPress}
              />
            </div>
            <button className="compose-form-submit small_size">{isTeam ? "Post" : "Send"}</button>
          </form>
        </>
      )}
    </>
  );
}

export default ComposeForm;
