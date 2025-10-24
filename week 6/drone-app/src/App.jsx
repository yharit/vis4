import './App.css';

import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, useMatch } from 'react-router-dom';
import { FiHome, FiCamera, FiMap, FiCrosshair, FiSettings } from 'react-icons/fi';

import Home from './home.jsx';
import Feed from './feed.jsx';
import AllRoutes from './allroutes.jsx';
import NewRoute from './newroute.jsx';
import Tracker from './tracker.jsx';
import Settings from './settings.jsx';


//to resolve error = useMatch() may be used only in the context of a <Router> component
function App() {
  return (
    <Router>
      <MainLayout />
    </Router>
  );
}

function MainLayout() {

  //to get rid of nav-list when we're on new route page
  const isNewRoute = useMatch('/newroute');

  return (
    <div className="App">

      {/*like a directory for the entire app for which command should load which page*/}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/allroutes" element={<AllRoutes />} />
        <Route path="/newroute" element={<NewRoute />} />
        <Route path="/tracker" element={<Tracker />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
      
      {!isNewRoute && (
        <nav className="nav-list">
          
          {/*directs to home page*/}
          <li><NavLink to="/" end>
            <FiHome size={20} />
            <span>Home</span>
          </NavLink></li>

          {/*directs to camera feed page*/}
          <li><NavLink to="/feed">
            <FiCamera size={20} />
            <span>Camera Feed</span>
          </NavLink></li>
          
          {/*directs to drone routes page*/}
          <li><NavLink to="/allroutes">
            <FiMap size={20} />
            <span>Drone Routes</span>
          </NavLink></li>
          
          {/*directs to drone location page*/}
          <li><NavLink to="/tracker">
            <FiCrosshair size={20} />
            <span>Drone Location</span>
          </NavLink></li>
          
          {/*directs to settings page*/}
          <li><NavLink to="/settings">
            <FiSettings size={20} />
            <span>Settings</span>
          </NavLink></li>
        
        </nav>
      )}
    </div>
  );
}

export default App;
