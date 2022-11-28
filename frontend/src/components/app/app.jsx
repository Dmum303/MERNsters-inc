import React from 'react';
import Homepage from '../homepage/homepage';
import Card from '../swipe/card';
import Swipe from '../swipe/swipe';
import Form from '../signup/Form';
import { Route, Routes } from 'react-router-dom';
import Footer from '../footer/footer';
import Chat from '../chat/chat';
import '../../App.css';
import LoginPage from '../login/loginPage';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<Form />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/swipe" element={<Swipe />} />
        <Route path="/card" element={<Card />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
