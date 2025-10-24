import React from 'react';
import './maincontent.css';
import { useDispatch } from 'react-redux';

function MainContent() {

	const dispatch = useDispatch();

  const handleRemove2 = () => {
    dispatch({
      type: 'BUTTON_PRESSED',
      payload: '-2'
    });
  };

  const handleRemove1 = () => {
    dispatch({
     type: 'BUTTON_PRESSED',
      payload: '-1'
    });
  };

  const handleReset = () => {
    dispatch({
     type: 'BUTTON_PRESSED',
      payload: 'RESET'
  });
};

  const handleAdd1 = () => {
    dispatch({
 type: 'BUTTON_PRESSED',
      payload: '+1'
  });
  };

  const handleAdd2 = () => {
        dispatch({
     type: 'BUTTON_PRESSED',
      payload: '+2'
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
        <button id="minustwobutton" onClick={() => handleRemove2()}>-2</button>
					<button id="minusonebutton" onClick={() => handleRemove1()}>-1</button>
					<button id="resetbutton" onClick={() => handleReset()}>Reset</button>
					<button id="plusonebutton" onClick={() => handleAdd1()}>+1</button>
					<button id="plustwobutton" onClick={() => handleAdd2()}>+2</button>

</div>
				<div id='colored-button'>
					<button id="clearallbutton" onClick={() => {console.log("Clear"); handleClear()}}>Clear History & Results</button>
				</div>
						</div>
  );
}

export default MainContent;