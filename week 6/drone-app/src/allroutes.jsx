import React from 'react';
import { Link } from 'react-router-dom';
import AllRoutesScreenImg from './AllRoutesScreen.jpg';
import { FiPlus } from 'react-icons/fi';
// import './allroutes.css';

function AllRoutes() {
  return (
    <div className="App">
      <Link className='newRoute' to="/newroute">
        <FiPlus size={20} />
        <span>New Route</span>
      </Link>
      <img src={AllRoutesScreenImg} alt="logo" />
    </div>
  );
}
export default AllRoutes;