import './App.css';
import Header from './header.jsx';
import Sidebar from './sidebar.jsx';
import MainContent from './maincontent.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <div id='content'>  
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
}





export default App;
