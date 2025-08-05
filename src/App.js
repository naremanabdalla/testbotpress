import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.botpress.cloud/webchat/v3.2/inject.js';
    script.async = true;

    script.onload = () => {
      setTimeout(() => {
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
        } else {
          console.error('Botpress WebChat not found on window after delay');
        }
      }, 500);
    };

    script.onerror = () => {
      console.error('Failed to load Botpress WebChat script');
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
      {/* Botpress Webchat React component */}
    </div>
  );
}

export default App;