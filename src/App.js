import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    let loaded = 0;

    const tryInit = () => {
      if (loaded === 2 && window.botpressWebChat) {
        window.botpressWebChat.init({
          botId: 'e4daeba3-c296-4803-9af6-91c0c80ab5de',
          hostUrl: 'https://cdn.botpress.cloud/webchat/v3.2',
          messagingUrl: 'https://messaging.botpress.cloud',
          showWidget: true,
          mobileBreakpoint: 0,
          // ...other options...
        });
        window.botpressWebChat.open();
      }
    };

    const script1 = document.createElement('script');
    script1.src = 'https://cdn.botpress.cloud/webchat/v3.2/inject.js';
    script1.defer = true;
    script1.onload = () => {
      loaded += 1;
      tryInit();
    };
    document.body.appendChild(script1);

    const script2 = document.createElement('script');
    script2.src = 'https://files.bpcontent.cloud/2025/07/20/18/20250720185318-5YXB2VUJ.js';
    script2.defer = true;
    script2.onload = () => {
      loaded += 1;
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
      <h1>Welcome to My Botpress App</h1>
      {/* The chat widget will appear automatically */}
    </div>
  );
}

export default App;