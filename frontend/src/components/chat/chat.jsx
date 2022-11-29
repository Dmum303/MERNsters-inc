import React, { useEffect, useState } from 'react';
import NavBar from "../lib/navbar";
import { faCaretDown, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ChatCard from "./ChatCard";
import "./ChatList.css";
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
        objectId: '6385e41e4c85d9e45d3bff8e',
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then(async (data) => {
        setChat(data);
        // console.log(chat.users[0].user.firstName);
        console.log("Hey guys");
        // console.log(chat.users);
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
        objectId: '6385e41e4c85d9e45d3bff8e',
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

  const [chats, setChats] = useState([
    {
      id: 1,
      image: "bg-blue-100", // change to profile pic
      firstName: "Sam Smith",
      summary: "We both love Geocaching!",
      time: "2:12PM",
    },
    {
      id: 2,
      image: "bg-red-100",
      firstName: "Demi Lovato",
      summary: "How are you getting on?",
      time: "3:30PM",
      isSelected: true,
    }
  ]);

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
     <NavBar linkTo='login' />
     <div className='parent-chat-container'>

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
        {chats.map((chat, index) => (
          <ChatCard key={chat.id} {...chat} />
        ))}
      </div>
    </div>

    <div className="flex flex-col bg-dark-400 w-6/12 mr-1 px-0 h-full">
      <div className="flex items-center py-6 px-10">
      <div className="chat-container">
      <span className="font-light text-3xl text-light-200">Chat</span>        
      <span className="font-light text-2xl text-light-200">Messages</span>    
     <br/>
         {chat.messages.map((message) => (
          <div class="message-container">
          <span className="font-light text-lg text-light-200">   
            <p>{message.message.recipientName}</p>
            </span>
          <span className="font-light text-xl text-light-200">   
            <p>{message.message.text}</p>
            </span>
            <span className="font-light text-xs text-light-200">   
            <p>{message.message.createdAt.slice(0, 24)}</p>
            </span>
            <br/>
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
