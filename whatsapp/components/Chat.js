import { Avatar } from "@mui/material";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import { auth, db } from "../firebase";
import getRecipientEmail from "../utils/getRecipientEmail";

const Chat = ({ users, id }) => {
  const [user] = useAuthState(auth);
  const [recipientSnapshot] = useCollection(recipientEmail);
  const recipient = recipientSnapshot?.docs?.[0]?.data();
  const recipientEmail = getRecipientEmail(users, user);
  console.log(recipientEmail);
  return (
    <div className="flex items-center cursor-pointer p-4 break-words hover:bg-[#e9eaeb]">
      {recipient ? ( // if recipient exists
        <Avatar src={recipient?.photoURL} className="m-1 mr-4" />
      ) : (
        // if recipient doesn't exist
        <Avatar className="m-1 mr-4">
          {recipientEmail[0]}
        </Avatar>
      )}
      <p className="flex-1 font-medium">{recipientEmail}</p>
    </div>
  );
};

export default Chat;
