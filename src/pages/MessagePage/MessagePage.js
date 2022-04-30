import "./MessagePage.css";
import Sidebar from "../../components/MessageSidebar/Sidebar";
import Chat from "./Chat";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function MessagePage() {
  return (
    <div className="app">
      <div className="app_body">
        <Sidebar />
        <Routes>
          <Route path="/rooms/:roomId" element={<Chat />} />
          <Route path="/" element={<Chat />} />
        </Routes>
      </div>
    </div>
  );
}

export default MessagePage;
