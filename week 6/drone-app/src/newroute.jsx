import React from 'react';
import { Link } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';
// import './newroute.css';

function NewRoute() {
  return (
    <div className="App">
      <Link className='allRoutes' to="/allroutes">
        <FiChevronLeft size={20} />
        <span>Back</span>
      </Link>
    </div>
  );
}

export default NewRoute;