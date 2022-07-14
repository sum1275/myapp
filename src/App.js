import React from 'react';
import './App.css';
//import BasicExample from './Component/Sidebar.js'
//import Dashboard from './Component/Dashboard.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Client from './Component/Pages/Client/Client'
import Users from './Component/Pages/Users/Users'
import HeaderBar from './Component/HeaderBar/HeaderBar';
import {SideBar} from './Component/SideBar/Sidebar'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <SideBar />
        <div className="content">
          <HeaderBar />
          <div className="maincontent">
            <Routes>
              <Route element={<Client />} path="/" />
              <Route element={<Users />} path="/users" />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
   
  );
}

export default App;
