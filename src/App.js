import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    // Clear any existing webchat (for hot-reload during development)
    if (window.botpressWebChat) {
      window.botpressWebChat.destroy();
    }

    const script = document.createElement('script');
    script.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js';
    script.async = true;
    
    script.onload = () => {
      console.log('Botpress script loaded, initializing...');
      
      window.botpressWebChat.init({
        botId: 'e4daeba3-c296-4803-9af6-91c0c80ab5de',
        hostUrl: 'https://cdn.botpress.cloud/webchat/v1',
        messagingUrl: 'https://messaging.botpress.cloud',
        clientId: 'my-unique-client-id', // Important for session persistence
        showWidget: true,
        hideWidget: false,
        container: '#webchat-container', // Explicit container
        stylesheet: 'https://cdn.botpress.cloud/webchat/v1/default.css',
        layoutWidth: '100%',
        layoutHeight: '100%',
        disableAnimations: true // Helps with initial load
      });

      // Force open after initialization
      window.botpressWebChat.onEvent(() => {
        console.log('Botpress loaded, opening widget');
        window.botpressWebChat.open();
      }, ['LIFECYCLE.LOADED']);
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
      {/* Explicit container with fixed dimensions */}
      <div id="webchat-container" style={{
        height: '500px',
        width: '400px',
        margin: '0 auto',
        border: '1px solid #ccc' // Temporary border to verify container visibility
      }}></div>
    </div>
  );
}

export default App;