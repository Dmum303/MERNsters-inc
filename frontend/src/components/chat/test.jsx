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
        console.log(user);
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
        reload();
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
      changeChatDynamic();
    }
  };

  useEffect(() => {
    reload();
  }, [chat]);

  const handleChange = (event) => {
    setMessage(event.target.value);
  };
  return (
    <>
      <div class="container mx-auto shadow-lg rounded-lg">
        <div class="px-5 py-5 flex justify-between items-center bg-white border-b-2">
          <div class="font-semibold text-2xl">GoingChat</div>
          <div class="w-1/2">
            <input
              type="text"
              name=""
              id=""
              placeholder="search IRL"
              class="rounded-2xl bg-gray-100 py-3 px-5 w-full"
            />
          </div>
          <div class="h-12 w-12 p-2 bg-yellow-500 rounded-full text-white font-semibold flex items-center justify-center">
            RA
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
            {/* first chat */}
            {user.chats.map((chat) => (
              <div class="flex flex-row py-4 px-2 justify-center items-center border-b-2">
                <div class="w-1/4">
                  <img
                    src="https://source.unsplash.com/_7LbC5J-jw4/600x600"
                    class="object-cover h-12 w-12 rounded-full"
                    alt=""
                  />
                </div>

                <div class="w-full">
                  <div class="text-lg font-semibold">New</div>
                  <span class="text-gray-500">Text</span>
                  <span className="text-xs text-light-500 font-medium mr-auto">
                    {chat.user2FirstName}

                    <button onClick={() => changeChatDynamic(chat.chat_id)}>
                      Show chat
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
                <span class="text-gray-500">Hi Sam, Welcome</span>
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

          <div class="w-full px-5 flex flex-col justify-between">
            <div class="flex flex-col mt-5">
              <div class="flex justify-end mb-4">
                <div class="mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white">
                  Welcome to group everyone !
                </div>
                <img
                  src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                  class="object-cover h-8 w-8 rounded-full"
                  alt=""
                />
              </div>
              <div class="flex justify-start mb-4">
                <img
                  src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                  class="object-cover h-8 w-8 rounded-full"
                  alt=""
                />
                <div class="ml-2 py-3 px-4 bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quaerat at praesentium, aut ullam delectus odio error sit rem.
                  Architecto nulla doloribus laborum illo rem enim dolor odio
                  saepe, consequatur quas?
                </div>
              </div>
              <div class="flex justify-end mb-4">
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
              </div>
              <div class="flex justify-start mb-4">
                <img
                  src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                  class="object-cover h-8 w-8 rounded-full"
                  alt=""
                />
                <div class="ml-2 py-3 px-4 bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white">
                  happy holiday guys!
                </div>
              </div>
            </div>
            <div class="py-5">
              <input
                class="w-full bg-gray-300 py-5 px-3 rounded-xl"
                type="text"
                placeholder="type your message here..."
              />
            </div>
          </div>

          <div class="w-2/5 border-l-2 px-5">
            <div class="flex flex-col">
              <div class="font-semibold text-xl py-4">Mern Stack Group</div>
              <img
                src="https://source.unsplash.com/L2cxSuKWbpo/600x600"
                class="object-cover rounded-xl h-64"
                alt=""
              />
              <div class="font-semibold py-4">Created 22 Sep 2021</div>
              <div class="font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt, perspiciatis!
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Test;
