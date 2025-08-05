import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    // Clean up any existing instance
    if (window.botpressWebChat) {
      window.botpressWebChat.destroy();
    }

    const script = document.createElement('script');
    script.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js';
    script.async = true;

    script.onload = () => {
      console.log('Botpress script loaded, initializing...');
      
      try {
        window.botpressWebChat.init({
          botId: 'e4daeba3-c296-4803-9af6-91c0c80ab5de', // Verify this is correct
          hostUrl: 'https://cdn.botpress.cloud/webchat/v1',
          messagingUrl: 'https://messaging.botpress.cloud',
          clientId: 'my-webchat-client', // Simple string without special chars
          showWidget: true,
          container: '#webchat-container',
          stylesheet: 'https://cdn.botpress.cloud/webchat/v1/default.css',
          layoutWidth: '100%',
          disableAnimations: true, // Helps with initialization
          botName: 'MyBot', // Simple name
          avatarUrl: '', // Leave empty if not using
          enablePersistHistory: false, // Disable for testing
          showConversationsButton: false // Simplify UI
        });

        window.botpressWebChat.onEvent(() => {
          console.log('Botpress loaded, opening widget');
          window.botpressWebChat.open();
        }, ['LIFECYCLE.LOADED']);

      } catch (error) {
        console.error('Initialization error:', error);
      }
    };

    script.onerror = () => {
      console.error('Failed to load Botpress script');
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
      if (window.botpressWebChat) {
        window.botpressWebChat.destroy();
      }
    };
  }, []);

  return (
    <div className="App">
      <h1>Botpress Webchat</h1>
      <div id="webchat-container" style={{
        height: '500px',
        width: '400px',
        margin: '0 auto',
        border: '1px solid red' // Visual debug
      }}></div>
    </div>
  );
}

export default App;