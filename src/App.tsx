/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import './App.css';
import Nav from './Components/Nav/Nav';
import Home from './Components/Home/Home';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="bg-slate-200 h-screen w-screen">
      <Outlet/>
    </div>
  );
}

export default App;
