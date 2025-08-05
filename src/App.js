import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.botpress.cloud/webchat/v3.2/inject.js';
    script.async = true;

    script.onload = () => {
      console.log('Botpress script loaded, checking for global...');
      setTimeout(() => {
        console.log('window.botpressWebChat:', window.botpressWebChat);
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
          if (window.console && window.console.error) {
            window.console.error('Botpress WebChat not found on window after delay');
            window.console.error('Possible causes: Content Security Policy (CSP) blocking script execution, browser extension interference, or network restrictions.');
            window.console.error('Check for CSP errors in the browser console and try disabling extensions or using a different network.');
          }
        }
      }, 500);
    };

    script.onerror = (e) => {
      console.error('Failed to load Botpress WebChat script', e);
      if (e && e.message) {
        console.error('Error message:', e.message);
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