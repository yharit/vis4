import React from 'react';
import { Link } from 'react-router-dom';
import AllRoutesScreenImg from './AllRoutesScreen.jpg';
// import './allroutes.css';

function AllRoutes() {
  return (
    <div className="App">
      <Link className='newRoute' to="/newroute">New Route</Link>
      <img src={AllRoutesScreenImg} alt="logo" />
    </div>
  );
}
export default AllRoutes;