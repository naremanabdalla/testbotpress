import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Only inject Botpress webchat script
    const script = document.createElement('script');
    script.src = 'https://cdn.botpress.cloud/webchat/v3.2/inject.js';
    script.defer = true;
    script.onload = () => {
      if (window.botpressWebChat) {
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
    document.body.appendChild(script);
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