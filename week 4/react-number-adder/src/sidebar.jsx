import React from 'react';
import './sidebar.css';

function Sidebar({ total, history }) {
  return (
<div className="sidebar">
      <h3>RESULT</h3>
      <p>Total: {total}</p>
      <h3>HISTORY</h3>
      <ul>
        {history.map((entry, index) => (
          <li key={index}>{entry}</li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;