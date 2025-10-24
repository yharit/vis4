import React from 'react';
import { Link } from 'react-router-dom';
// import './newroute.css';

function NewRoute() {
  return (
    <div className="App">
      <Link className='allRoutes' to="/allroutes">Back</Link>
    </div>
  );
}

export default NewRoute;