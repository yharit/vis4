import React, { useState } from 'react';
import Header from './header.jsx';
import Sidebar from './sidebar.jsx';
import MainContent from './maincontent.jsx';
import './App.css';

function App() {
  const [total, setTotal] = useState(0);
  const [history, setHistory] = useState([]);

  function handleAddOne() {
    setTotal(total + 1);
    setHistory([...history, '+1']);
  }

  function handleAddTwo() {
    setTotal(total + 2);
    setHistory([...history, '+2']);
  }

  function handleRemoveOne() {
    setTotal(total - 1);
    setHistory([...history, '-1']);
  }

  function handleRemoveTwo() {
    setTotal(total - 2);
    setHistory([...history, '-2']);
  }

  function handleReset() {
    setTotal(0);
    setHistory([...history, 'Reset']);
  }
  
  return (
    <div className="App">
      <Header />
      <div id='content'>  
        <Sidebar 
        total={total}
        history= {history}
        />
        <MainContent 
        onAddOne={handleAddOne}
          onAddTwo={handleAddTwo}
          onRemoveOne={handleRemoveOne}
          onRemoveTwo={handleRemoveTwo}
          onReset={handleReset}
        />
      </div>
    </div>
  );
}

export default App;
