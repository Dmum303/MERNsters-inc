import React, { useEffect, useState } from 'react';

const Chat = () => {
  const [chat, setChat] = useState([]);
  // Need a function to get post req for the current chat
  const reload = () => {
    fetch('/api/chats/findchat', {
      method: 'post',
      body: JSON.stringify({
        objectId: '6380f555e06bef726ddaf485',
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then(async (data) => {
        setChat(data.chat);
      });
  };

  useEffect(() => {
    reload();
  }, []);
  console.log(chat);

  // Need a post func for sending a message

  return (
    <>
      <div className="chat-container">
        <h1>Chat</h1>
      </div>
    </>
  );
};

export default Chat;
