import './sidebar.css';

function Sidebar() {
  return (
<div class='sidebar'>
      <h3>RESULT</h3>
        <p id="resultId"></p>
        <p id="totalMessage"></p>
      <h3>HISTORY</h3>
        <p id="summary"></p>
        <p id="historyList"></p>
    </div>
  );
}

export default Sidebar;