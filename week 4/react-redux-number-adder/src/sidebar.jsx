import React from 'react';
import './sidebar.css';
import { useSelector, useDispatch } from 'react-redux';

function Sidebar() {
 
 const dispatch = useDispatch();
 const count = useSelector((state) => state.count);
  const history = useSelector((state) => state.history);
  
  return (
<div className="sidebar">
      <h3>RESULT</h3>
        <p id="resultId">{count}</p>
        <p id="totalMessage"></p>
      <h3>HISTORY</h3>
        <p id="summary"></p>
        <ul id="historyList">
        {history.map((item, i) => (
          <li
            key={i}
            onClick={() => dispatch({ type: 'UPDATE_HISTORY', payload: i })}
          >{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;