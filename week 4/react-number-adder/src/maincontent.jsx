import React from 'react';
import './maincontent.css';

function MainContent(props) {
  return (
<div className='main-content'>
			<h3>CONTROL CENTER</h3>
				<div className='buttons'>
				<button onClick={props.onRemoveTwo}>-2</button>
        <button onClick={props.onRemoveOne}>-1</button>
        <button onClick={props.onReset}>Reset</button>
        <button onClick={props.onAddOne}>+1</button>
        <button onClick={props.onAddTwo}>+2</button>
				</div>
		</div>
  );
}

export default MainContent;