import React, { useEffect, useState } from 'react';
import NavBar from "../lib/navbar";
import { faCaretDown, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EmailCard from "./EmailCard";
import "./EmailList.css";
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

  const [emails, setEmails] = useState([
    {
      id: 1,
      image: "bg-blue-100",
      from: "Annie Lynch",
      subject: "Aliquam erat volutpat",
      body: `Ut id dignissim purus. Donec suscipit tortor orci, eu accumsan lectus blandit id. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed vulputate ac urna ut elementum. Nunc eget metus vitae odio porta feugiat quis a mi. Vestibulum interdum maximus odio sed dignissim. Suspendisse ultricies auctor dignissim. Vivamus at lorem eget nisi ultricies scelerisque ut pellentesque erat.`,
      hasAttachment: true,
      time: "2:12PM",
    },
    {
      id: 2,
      image: "bg-red-100",
      from: "Dribbble Team",
      subject: "How are you getting on?",
      body: `Etiam vel tincidunt lorem, vitae consequat sem. Aenean dictum nisi quis sollicitudin pharetra.Ut id dignissim purus. Donec suscipit tortor orci, eu accumsan lectus blandit id. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed vulputate ac urna ut elementum. Nunc eget metus vitae odio porta feugiat quis a mi. Vestibulum interdum maximus odio sed dignissim. Suspendisse ultricies auctor dignissim. Vivamus at lorem eget nisi ultricies scelerisque ut pellentesque erat.`,
      hasAttachment: true,
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

     <div className="flex flex-col bg-dark-500 w-6/12 mr-1 px-0 h-full">
      <div className="flex items-center py-6 px-10">
        <span className="font-light text-xl text-light-200">Inbox</span>
        <div className="ml-2 w-5 h-4 rounded-full bg-gradient-to-br from-blue-200 to-blue-300 flex items-center justify-center text-2xs font-normal text-light-200">
          3
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
        {emails.map((email, index) => (
          <EmailCard key={email.id} {...email} />
        ))}
      </div>
    </div>
     {/* <div className="inbox-container">
       "User's First Name"  <br/>
       "Sarita"  <br/>
       "Pauline"  <br/>
       "Taqueer"  <br/>
       "Arshad"  <br/>
       "David"  <br/>
       "Blake"
     </div> */}
      <div className="chat-container">
        <h1>Chat</h1>
        <p>Messages</p>
        {chat.messages.map((message) => (
          <div class="message-container">
            <p>{message.message.text}</p>
            <p>{message.message.recipientName}</p>
            <p>{message.message.createdAt}</p>
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
    
    </>
  );
};

export default Chat;
