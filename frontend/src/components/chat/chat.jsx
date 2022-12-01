import React, { useEffect, useState } from 'react';
import NavBar from '../lib/navbar';
import { faCaretDown, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ChatCard from './ChatCard';
import './ChatList.css';

// import MessageList from '../messagelist/messagelist';

const Chat = () => {
  const [chat, setChat] = useState({ messages: [], users: [] });
  const [message, setMessage] = useState('');
  const [user, setUser] = useState({
    chats: [],
  });
  const [chatMessage, setChatsMessage] = useState('');
  const reload = () => {
    // returns a user object with chat list
    fetch('/api/chatlist/get', {
      method: 'post',
      body: JSON.stringify({
        chatId: window.localStorage.getItem('userId'),
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then(async (data) => {
        setUser(data);
      });
  };

  // select chat and display msgs
  const changeChatDynamic = (chat_id) => {
    setChatsMessage(chat_id);
    fetch('/api/chats/findchat', {
      method: 'post',
      body: JSON.stringify({
        objectId: chat_id,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then(async (data) => {
        setChat(data);
      });
  };

  // add msg to chat
  const handleSubmit = async (error) => {
    console.log('What is in chatmessage: ', chatMessage);
    error.preventDefault();
    const response = await fetch('/api/chats/addmessage', {
      method: 'post',
      body: JSON.stringify({
        // this is dummy data - sender id and recip if are not used
        objectId: chatMessage,
        senderId: '6380b30f83141a9fd30a7662',
        recipientId: '6380b30f83141a9fd30a7662',
        text: message,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const json = await response.json();
    if (!response.ok) {
      console.log('Message couldnt send', json);
    }
    if (response.ok) {
      setMessage('');
      reload();
    }
  };

  useEffect(() => {
    reload();
  }, []);

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <>
      <NavBar linkTo="login" />
      <div className="parent-chat-container">
        <div className="flex flex-col bg-dark-400 w-6/12 mr-1 px-0 h-full">
          <div className="flex items-center py-6 px-10">
            <span className="font-light text-xl text-light-200">
              Current Chats
            </span>
            <div className="ml-2 w-5 h-4 rounded-full bg-gradient-to-br from-blue-200 to-blue-300 flex items-center justify-center text-2xs font-normal text-light-200">
              2
            </div>
            <FontAwesomeIcon
              icon={faPlus}
              className="px-3 py-3 rounded-xl bg-gradient-to-br from-blue-200 to-blue-300 text-light-200 drop-shadow-3xl ml-auto"
            />
          </div>
          <div className="px-10 pb-5">
            <span className="text-xs text-light-200">Recent</span>
            <FontAwesomeIcon
              icon={faCaretDown}
              className="text-light-200 text-xs ml-2"
            />
          </div>
          <div className="flex flex-col px-10 pb-10 overflow-y-auto">
            {user.chats.map((chat) => (
              <ChatCard changeChatDynamic={changeChatDynamic} {...chat} />
            ))}
          </div>
        </div>

        <div className="flex flex-col bg-dark-400 w-6/12 mr-1 px-0 h-full">
          <div className="flex items-center py-6 px-10">
            <div className="chat-container">
              <span className="font-light text-3xl text-light-200">Chat</span>
              <span className="font-light text-2xl text-light-200">
                Messages
              </span>
              <br />
              {chat.messages.map((message) => (
                <div class="message-container">
                  <span className="font-light text-lg text-light-200">
                    {/* testName: message.message.recipientName} */}
                    <p>{message.message.recipientName}</p>
                  </span>
                  <span className="font-light text-xl text-light-200">
                    <p>{message.message.text}</p>
                  </span>
                  <span className="font-light text-xs text-light-200">
                    <p>{message.message.createdAt.slice(0, 24)}</p>
                  </span>
                  <br />
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
                <button className="message-btn"> message </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
