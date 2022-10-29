import { Avatar } from "@mui/material";
import React from "react";

const Chat = ({users,id}) => {
  return <div className="flex items-center cursor-pointer p-4 break-words hover:bg-[#e9eaeb]">
    <Avatar className="m-1 mr-4"/>
    <p className="flex-1 font-medium">Recipient Email</p>
  </div>;
};

export default Chat;
