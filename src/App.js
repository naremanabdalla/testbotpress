import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    // First check if the script is already loaded
    if (window.botpressWebChat) {
      initializeWebChat();
      return;
    }

    // Check if script tag already exists
    const existingScript = document.querySelector('script[src*="botpress"]');
    if (existingScript) {
      const checkInterval = setInterval(() => {
        if (window.botpressWebChat) {
          clearInterval(checkInterval);
          initializeWebChat();
        }
      }, 100);
      return;
    }

    // Create new script tag
    const script = document.createElement('script');
    script.src = 'https://cdn.botpress.cloud/webchat/v3.2/inject.js';
    script.async = true;
    script.defer = true;

    script.onload = () => {
      // Keep checking for botpressWebChat to be available
      const maxAttempts = 50;
      let attempts = 0;
      
      const checkForBotpress = setInterval(() => {
        attempts++;
        if (window.botpressWebChat) {
          clearInterval(checkForBotpress);
          initializeWebChat();
        } else if (attempts >= maxAttempts) {
          clearInterval(checkForBotpress);
          console.error('Botpress WebChat not available after multiple attempts');
        }
      }, 200);
    };

    script.onerror = () => {
      console.error('Failed to load Botpress script');
    };

    document.body.appendChild(script);

    // Cleanup
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
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