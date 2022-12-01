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
  const [user, setUser] = useState({ user: [] });
  const [chats, setChats] = useState('');
  // Need a function to get post req for the current chat
  const reload = () => {
    fetch('/api/chatlist/get', {
      method: 'post',
      body: JSON.stringify({
        // This named wrong on the backend should be userid as is getting user object
        // and then setting user object to user and we will use the user chat list array in it
        chatId: '6386650289833b115e8b8f67',
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

  const changeChatDynamic = (chat_id) => {
    console.log(chat_id);
    // alert('Hello');
    fetch('/api/chats/findchat', {
      method: 'post',
      body: JSON.stringify({
        // this is dummy data - needs to be made dynamic
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

  const handleSubmit = async (error) => {
    error.preventDefault();
    const response = await fetch('/api/chats/addmessage', {
      method: 'post',
      body: JSON.stringify({
        // this is dummy data - needs to be made dynamic
        objectId: '6386684621fb07c368b17f51',
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
  useEffect(() => {
    reload();
  }, []);

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  // When the page is reloaded from the browser it crashes because
  // it can't read the map function, but when I refresh the page
  // and then the chat var is popluated it works fine
  // maybe some sort of if statement checking if the chat var is populated
  // before returning HTML
  // Might just need to make these into compenents and then use reload on them

  return (
    <>
      <NavBar linkTo="login" />
      <div className="parent-chat-container">
        <div className="flex flex-col bg-dark-400 w-6/12 mr-1 px-0 h-full">
          <div className="flex items-center py-6 px-10">
            <span className="font-light text-xl text-light-200">Inbox</span>
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
