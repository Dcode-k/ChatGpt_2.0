
import './App.css';
import SideBar from './components/SideBar/SideBar';
import ChatPart from './components/ChatPart/ChatPart';
import { useEffect, useState } from 'react';
import MobileHeader from './components/MobileHeader/MobileHeader';

function App() {
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
      setWidth(window.innerWidth);
  }
  useEffect(() => {
      window.addEventListener('resize', handleWindowSizeChange);
      return () => {
          window.removeEventListener('resize', handleWindowSizeChange);
      }
  }, []);
  
  const isMobile = width <= 768;
  return (
    <div className="App">
      {isMobile ? <MobileHeader/>:<SideBar/>}
      <ChatPart/>
    </div>
  );
}

export default App;
