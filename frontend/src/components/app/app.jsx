import React from 'react';
import Homepage from '../homepage/homepage'
import SignUpForm from '../signup/signup'
import {Route, Routes} from "react-router-dom";

const App = () => {
    return (
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/signup' element={<SignUpForm/>}/>
      </Routes>

    );
}

export default App;