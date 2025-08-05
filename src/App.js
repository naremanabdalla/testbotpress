import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Check if already injected to avoid duplicates
    if (document.querySelector('script[src*="botpress"]')) {
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://cdn.botpress.cloud/webchat/v3.2/inject.js';
    script.async = true;
    script.defer = true;

    // Create a promise to handle the script loading
    const loadPromise = new Promise((resolve, reject) => {
      script.onload = () => {
        // Wait for botpressWebChat to be available
        const checkInterval = setInterval(() => {
          if (window.botpressWebChat) {
            clearInterval(checkInterval);
            resolve();
          }
        }, 100);
        
        // Timeout if botpressWebChat never loads
        setTimeout(() => {
          clearInterval(checkInterval);
          reject(new Error('Botpress WebChat not found on window after loading'));
        }, 10000);
      };

      script.onerror = () => {
        reject(new Error('Failed to load Botpress script'));
      };
    });

    document.body.appendChild(script);

    loadPromise.then(() => {
      console.log('Botpress WebChat loaded, initializing...');
      window.botpressWebChat.init({
        botId: 'e4daeba3-c296-4803-9af6-91c0c80ab5de',
        hostUrl: 'https://cdn.botpress.cloud/webchat/v3.2',
        messagingUrl: 'https://messaging.botpress.cloud',
        showWidget: true,
        mobileBreakpoint: 0,
        // ...other options...
      });
      window.botpressWebChat.open();
    }).catch(error => {
      console.error('Error loading Botpress:', error);
    });

    // Cleanup function
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
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
    </div>
  );
}

export default App;