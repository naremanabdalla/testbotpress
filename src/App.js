import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
  const loadBotpress = () => {
    return new Promise((resolve) => {
      if (window.botpressWebChat) return resolve();

      const script = document.createElement('script');
      script.src = 'https://cdn.botpress.cloud/webchat/v3.2/inject.js';
      script.id = 'botpress-script';
      
      script.onload = () => {
        // More reliable waiting mechanism
        const waitForInit = setInterval(() => {
          if (window.botpressWebChat?.init) {
            clearInterval(waitForInit);
            resolve();
          }
        }, 100);
      };

      document.body.appendChild(script);
    });
  };

  loadBotpress().then(() => {
    window.botpressWebChat.init({
      botId: 'e4daeba3-c296-4803-9af6-91c0c80ab5de',
      hostUrl: 'https://cdn.botpress.cloud/webchat/v3.2',
      messagingUrl: 'https://messaging.botpress.cloud',
      clientId: 'your-client-id' // Add if available
    });
  }).catch(console.error);

  return () => {
    const script = document.getElementById('botpress-script');
    script?.parentNode?.removeChild(script);
  };
}, []);

  const initializeWebChat = () => {
    console.log('Initializing Botpress WebChat');
    window.botpressWebChat.init({
      botId: 'e4daeba3-c296-4803-9af6-91c0c80ab5de',
      hostUrl: 'https://cdn.botpress.cloud/webchat/v3.2',
      messagingUrl: 'https://messaging.botpress.cloud',
      clientId: 'YOUR_CLIENT_ID', // Add if you have one
      showWidget: true,
      enableTranscriptDownload: true,
      closeOnEscape: true,
      showConversationsButton: true,
      enablePersistHistory: true,
    });
    window.botpressWebChat.onEvent(() => {
      window.botpressWebChat.open();
    }, ['LIFECYCLE.LOADED']);
  };

  return (
    <div className="App">
      <h1>Welcome to My Botpress App</h1>
      <div id="bp-webchat"></div>
    </div>
  );
}

export default App;