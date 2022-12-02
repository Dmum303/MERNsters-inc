import React, { useEffect, useState } from 'react';
import NavBar from '../lib/navbar';
import { faCaretDown, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ChatCard from './ChatCard';
import MessageCard from './MessageCard';
import './ChatList.css';
const Test = () => {
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
        // console.log('This is the logged in users name');
        // console.log(user.firstName);
        // console.log('this is the first chat in users chat list');
        console.log(user);
      });
  };

  // select chat and display msgs
  const changeChatDynamic = (chat_id) => {
    setChatsMessage(chat_id);
    // console.log('line 41');
    // console.log(chatMessage);
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

        reload();
      });
  };

  // add msg to chat
  const handleSubmit = async (error) => {
    // console.log('What is in chatmessage: ', chatMessage);
    error.preventDefault();
    const response = await fetch('/api/chats/addmessage', {
      method: 'post',
      body: JSON.stringify({
        // this is dummy data - sender id and recip if are not used
        objectId: chatMessage,
        senderId: user._id,
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
      // console.log(message);
      reload();
      changeChatDynamic();
    }
  };

  useEffect(() => {
    reload();
  }, [chat]);

  const handleChange = (event) => {
    // console.log("I'm the button");
    // console.log(event.target.value);
    setMessage(event.target.value);
  };

  return (
    <>
      <NavBar linkTo="login" />
      <div class="container mx-auto shadow-lg rounded-lg">
        <div class="px-5 py-5 flex justify-between items-center bg-white border-b-2">
          <div class="font-semibold text-2xl">FZ_Chat</div>
          <div class="w-1/2">
            <input
              type="text"
              name=""
              id=""
              placeholder="search FriendZone"
              class="rounded-2xl bg-gray-100 py-3 px-5 w-full"
            />
          </div>
          <div class="h-12 w-12 p-2 bg-yellow-500 rounded-full text-white font-semibold flex items-center justify-center">
            FZ
          </div>
        </div>

        <div class="flex flex-row justify-between bg-white">
          <div class="flex flex-col w-2/5 border-r-2 overflow-y-auto">
            <div class="border-b-2 py-4 px-2">
              <input
                type="text"
                placeholder="search chatting"
                class="py-2 px-2 border-2 border-gray-200 rounded-2xl w-full"
              />
            </div>
            {/* first chat in chat lists */}
            {user.chats.map((chat) => (
              <div class="flex flex-row py-4 px-2 justify-center items-center border-b-2">
                <div class="w-1/4">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/mernsters.appspot.com/o/imageprofile%2Favataricon.jpeg1669966968713?alt=media&token=07c795bf-d993-44a5-96c4-69351fc2b0b5"
                    class="object-cover h-12 w-12 rounded-full"
                    alt=""
                  />
                </div>

                <div class="w-full">
                  <div class="text-lg font-semibold">New</div>
                  <span class="text-gray-500">{chat.chat.user2FirstName}</span>
                  <br />
                  <span className="text-xs text-light-500 font-medium mr-auto">
                    <button
                      onClick={() => changeChatDynamic(chat.chat.chat_id)}
                    >
                      Select chat
                    </button>
                  </span>
                </div>
              </div>
            ))}
            {/* <div class="flex flex-row py-4 px-2 items-center border-b-2">
              <div class="w-1/4">
                <img
                  src="https://source.unsplash.com/otT2199XwI8/600x600"
                  class="object-cover h-12 w-12 rounded-full"
                  alt=""
                />
              </div>
              <div class="w-full">
                <div class="text-lg font-semibold">Everest Trip 2021</div>
                <span class="text-gray-500">
                  {user.chats[0].chat.user2FirstName}
                </span>
              </div>
            </div> */}
            {/* <div class="flex flex-row py-4 px-2 items-center border-b-2 border-l-4 border-blue-400">
              <div class="w-1/4">
                <img
                  src="https://source.unsplash.com/L2cxSuKWbpo/600x600"
                  class="object-cover h-12 w-12 rounded-full"
                  alt=""
                />
              </div>
              <div class="w-full">
                <div class="text-lg font-semibold">MERN Stack</div>
                <span class="text-gray-500">Lusi : Thanks Everyone</span>
              </div>
            </div> */}
            {/* <div class="flex flex-row py-4 px-2 items-center border-b-2">
              <div class="w-1/4">
                <img
                  src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                  class="object-cover h-12 w-12 rounded-full"
                  alt=""
                />
              </div>
              <div class="w-full">
                <div class="text-lg font-semibold">Javascript Indonesia</div>
                <span class="text-gray-500">Evan : some one can fix this</span>
              </div>
            </div> */}
            {/* <div class="flex flex-row py-4 px-2 items-center border-b-2">
              <div class="w-1/4">
                <img
                  src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                  class="object-cover h-12 w-12 rounded-full"
                  alt=""
                />
              </div>
              <div class="w-full">
                <div class="text-lg font-semibold">Javascript Indonesia</div>
                <span class="text-gray-500">Evan : some one can fix this</span>
              </div>
            </div> */}
            {/* <div class="flex flex-row py-4 px-2 items-center border-b-2">
              <div class="w-1/4">
                <img
                  src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                  class="object-cover h-12 w-12 rounded-full"
                  alt=""
                />
              </div>
              <div class="w-full">
                <div class="text-lg font-semibold">Javascript Indonesia</div>
                <span class="text-gray-500">Evan : some one can fix this</span>
              </div>
            </div> */}
            {/* end of chat list */}
          </div>
          {/* end of border */}
          {/* start of message container */}
          <div class="w-full px-5 flex flex-col justify-between">
            <div class="flex flex-col mt-5">
              {/* first msg container */}
              {/* could transplant this out into funtion and then render it if is user one or two */}
              {chat.messages.map((message) => (
                <div class="flex justify-end mb-4">
                  <div class="mr-2 py-3 px-4 bg-gray-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white">
                    <p>{message.message.text}</p>
                    {/* <p>{message.message.sender}</p> */}
                    <p>{message.message.createdAt.slice(0, 24)}</p>
                  </div>
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/mernsters.appspot.com/o/imageprofile%2Fmsg%20icon.jpeg1669970432634?alt=media&token=c1e3a23e-8298-43b2-8775-03478706e3f5"
                    class="object-cover h-8 w-8 rounded-full"
                    alt=""
                  />
                </div>
              ))}
              {/* second msg container */}
              {/* <div class="flex justify-start mb-4">
                <img
                  src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                  class="object-cover h-8 w-8 rounded-full"
                  alt=""
                />
                <div class="ml-2 py-3 px-4 bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
              </div> */}
              {/* <div class="flex justify-end mb-4">
                <div>
                  <div class="mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Magnam, repudiandae.
                  </div>

                  <div class="mt-4 mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Debitis, reiciendis!
                  </div>
                </div>
                <img
                  src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                  class="object-cover h-8 w-8 rounded-full"
                  alt=""
                />
              </div> */}
              {/* <div class="flex justify-start mb-4">
                <img
                  src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                  class="object-cover h-8 w-8 rounded-full"
                  alt=""
                />
                <div class="ml-2 py-3 px-4 bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white">
                  happy holiday guys!
                </div>
              </div> */}
              {/* last msg */}
            </div>
            <div class="py-5">
              <form className="create-form-container" onSubmit={handleSubmit}>
                <label htmlFor="message-text-box"></label>
                <input
                  class="w-full bg-gray-300 py-5 px-3 rounded-xl"
                  type="text"
                  // className="message-text-box"
                  onChange={handleChange}
                  value={message}
                  required
                  placeholder="type your message here..."
                />
                <button className="message-btn"> message </button>
              </form>
              {/* <input
                class="w-full bg-gray-300 py-5 px-3 rounded-xl"
                type="text"
                placeholder="type your message here..."
              /> */}
            </div>
          </div>
          {/* end of message container */}

          <div class="w-2/5 border-l-2 px-5">
            <div class="flex flex-col">
              <div class="font-semibold text-xl py-4">
                {user.firstName}
                {/* <p>{user._id}</p> */}
              </div>
              <img
                src={user.profilePic}
                class="object-cover rounded-xl h-64"
                alt=""
              />
              <div class="font-semibold py-4"></div>
              <div class="font-light"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Test;
