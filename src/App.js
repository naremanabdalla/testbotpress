import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';

// 
function App() {
  useEffect(() => {
    let scriptsLoaded = 0;
    let initialized = false;

    const tryInit = () => {
      if (scriptsLoaded === 2 && !initialized) {
        initialized = true;
        window.botpressWebChat.init({
          botId: 'e4daeba3-c296-4803-9af6-91c0c80ab5de',
          hostUrl: 'https://cdn.botpress.cloud/webchat/v3.2',
          messagingUrl: 'https://messaging.botpress.cloud',
          showWidget: true,
          mobileBreakpoint: 0,
          // ...other options...
        });
      }
    };

    const script1 = document.createElement('script');
    script1.src = 'https://cdn.botpress.cloud/webchat/v3.2/inject.js';
    script1.async = true;
    script1.onload = () => {
      scriptsLoaded += 1;
      tryInit();
    };
    document.body.appendChild(script1);

    const script2 = document.createElement('script');
    script2.src = 'https://files.bpcontent.cloud/2025/07/20/18/20250720185318-5YXB2VUJ.js';
    script2.async = true;
    script2.onload = () => {
      scriptsLoaded += 1;
      tryInit();
    };
    document.body.appendChild(script2);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      {/* The chat widget will appear automatically */}
    </div>
  );
}

export default App;
