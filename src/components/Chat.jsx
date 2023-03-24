import React, { useContext } from "react";
import VideoCallIcon from '@mui/icons-material/VideoCall';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";

const Chat = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          <VideoCallIcon id ="video"/>
          <PersonAddIcon/>
          <MoreVertIcon/>
        </div>
      </div>
      <Messages />
      <Input/>
    </div>
  );
};

export default Chat;
