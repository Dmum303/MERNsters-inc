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
      .then((response) => response.json())
      .then(async (data) => {
        // Not sure that this is working when is setting the usestate
        // const dataParse = JSON.parse(data);

        setChat(data);
        // console.log(data);
        console.log(chat);
      });
  };

  useEffect(() => {
    reload();
  }, []);

  // Need a post func for sending a message

  return (
    <>
      <div className="chat-container">
        <h1>Chat</h1>
        <h2>People in this chat</h2>

        <p>Messages</p>
        {chat.messages.map((message) => (
          <div class="message-container">
            <p>{message.message.text}</p>
          </div>
        ))}
        <p>{chat._id}</p>
      </div>
    </>
  );
};

export default Chat;
