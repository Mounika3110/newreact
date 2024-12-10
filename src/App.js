import React from 'react';
import './App.css'; 
import Login from './Components/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './Components/Module/Dashboard';
import ForgetPassord from './Components/ForgetPassword';
import Signup from './Components/Signup';
import Tv from './Components/Module/Tv'
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/forgetpassword" element={<ForgetPassord/>}/>
          <React path="/tv" element={<Tv/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;