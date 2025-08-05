import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';

// 
function App() {
  useEffect(() => {
    // Inject Botpress Webchat script
    const script1 = document.createElement('script');
    script1.src = 'https://cdn.botpress.cloud/webchat/v3.2/inject.js';
    script1.async = true;
    document.body.appendChild(script1);

    // Inject your custom Botpress script
    const script2 = document.createElement('script');
    script2.src = 'https://files.bpcontent.cloud/2025/07/20/18/20250720185318-5YXB2VUJ.js';
    script2.async = true;
    document.body.appendChild(script2);

    // Optionally, you can initialize the webchat after both scripts are loaded
    script1.onload = () => {
      window.botpressWebChat.init({
        botId: 'e4daeba3-c296-4803-9af6-91c0c80ab5de', // <-- Replace with your Botpress bot ID
        hostUrl: 'https://cdn.botpress.cloud/webchat/v0',
        messagingUrl: 'https://messaging.botpress.cloud',
        // ...other options...
      });
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
      {/* The chat widget will appear automatically */}
    </div>
  );
}

export default App;