import React from 'react';
import './maincontent.css';
import { useDispatch } from 'react-redux';

function MainContent() {

	const dispatch = useDispatch();

  const handleRemove2 = () => {
    dispatch({
      type: 'REMOVE_2'
    });
  };

  const handleRemove1 = () => {
    dispatch({
      type: 'REMOVE_1'
    });
  };

  const handleReset = () => {
    dispatch({
      type: 'RESET'
    });
  };

  const handleAdd1 = () => {
    dispatch({
      type: 'ADD_1',
    });
  };

  const handleAdd2 = () => {
    dispatch({
      type: 'ADD_2'
    });
  };

   const handleClear = () => {
    dispatch({
      type: 'CLEAR_ALL'
    });
  };

  return (
<div className='main-content'>
			<h3>CONTROL CENTER</h3>
				<div className='buttons'>
        <button id="minustwobutton" onClick={() => {console.log("-2"); handleRemove2()}}>-2</button>
					<button id="minusonebutton" onClick={() => {console.log("-1"); handleRemove1()}}>-1</button>
					<button id="resetbutton" onClick={() => {console.log("Reset"); handleReset()}}>Reset</button>
					<button id="plusonebutton" onClick={() => {console.log("+1"); handleAdd1()}}>+1</button>
					<button id="plustwobutton" onClick={() => {console.log("+2"); handleAdd2()}}>+2</button>

				</div>
				<div id='colored-button'>
					<button id="clearallbutton" onClick={() => {console.log("Clear"); handleClear()}}>Clear History & Results</button>
				</div>
						</div>
  );
}

export default MainContent;