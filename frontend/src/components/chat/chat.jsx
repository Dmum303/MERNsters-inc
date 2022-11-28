import React, { useEffect, useState } from 'react';
// import MessageList from '../messagelist/messagelist';

const Chat = () => {
  const [chat, setChat] = useState({ messages: [], users: [] });
  const [message, setMessage] = useState('');
  // Need a function to get post req for the current chat
  const reload = () => {
    fetch('/api/chats/findchat', {
      method: 'post',
      body: JSON.stringify({
        // this is dummy data - needs to be made dynamic
        objectId: '6380f555e06bef726ddaf485',
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then(async (data) => {
        setChat(data);
        // console.log(chat.users[0].user.firstName);
        console.log(chat);
        console.log(chat.users);
      });
  };

  useEffect(() => {
    reload();
  }, []);

  const handleSubmit = async (error) => {
    error.preventDefault();
    const response = await fetch('/api/chats/addmessage', {
      method: 'post',
      body: JSON.stringify({
        // this is dummy data - needs to be made dynamic
        objectId: '6380f555e06bef726ddaf485',
        senderId: '6380b30f83141a9fd30a7662',
        recipientId: '6380b30f83141a9fd30a7662',
        text: message,
      }),
      headers: {
        'Content-Type': 'application/json',
        // Authorization: 'Bearer ' + token,
      },
    });
    const json = await response.json();
    if (!response.ok) {
      console.log('Message couldnt send', json);
    }
    if (response.ok) {
      // If form sent successfully then it resets the input field.
      setMessage('');
      reload();
    }
  };

  const handleChange = (event) => {
    setMessage(event.target.value);
  };
  // Need a post func for sending a message

  // When the page is reloaded from the browser it crashes because
  // it can't read the map function, but when I refresh the page
  // and then the chat var is popluated it works fine
  // maybe some sort of if statement checking if the chat var is populated
  // before returning HTML
  // Might just need to make these into compenents and then use reload on them
  return (
    <>
      <div className="chat-container">
        <h1>Chat</h1>
        {/* <h2>People in this chat</h2> */}
        <p>
          {/* {chat.users[0].user.firstName} {chat.users[0].user.lastName} */}
        </p>
        {/* Can't iterate over users array - not sure why? */}
        {chat.users.map((user) => {
          <p>{user.firstName}</p>;
        })}
        <p>Messages</p>
        {/* <MessageList chat={chat} reload={reload} /> */}
        {chat.messages.map((message) => (
          <div class="message-container">
            <p>{message.message.text}</p>
          </div>
        ))}
        <form className="create-form-container" onSubmit={handleSubmit}>
          <label htmlFor="message-text-box"></label>
          <input
            type="text"
            className="message-text-box"
            onChange={handleChange}
            value={message}
            required
          />
          <br></br>
          <button className="message-btn"> message </button>
        </form>
      </div>
    </>
  );
};

export default Chat;
