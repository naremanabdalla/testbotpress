import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    // Create script element
    const script = document.createElement('script');
    script.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js';
    script.async = true;
    
    script.onload = () => {
      window.botpressWebChat.init({
        botId: 'e4daeba3-c296-4803-9af6-91c0c80ab5de',
        hostUrl: 'https://cdn.botpress.cloud/webchat/v1',
        messagingUrl: 'https://messaging.botpress.cloud',
        showWidget: true,
        containerWidth: '100%',
        layoutWidth: '100%',
        hideWidget: false,
        stylesheet: 'https://cdn.botpress.cloud/webchat/v1/default.css'
      });
      
      window.botpressWebChat.onEvent(() => {
        window.botpressWebChat.open();
      }, ['LIFECYCLE.LOADED']);
    };

    document.body.appendChild(script);
// Add this temporarily to check script loading
console.log('Script loading started...');
script.onload = () => {
  console.log('Script loaded! Checking for botpressWebChat...');
  console.log('window.botpressWebChat exists?', !!window.botpressWebChat);
};
script.onerror = (e) => {
  console.error('Script failed to load!', e);
};
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="App">
      <h1>Botpress Webchat Test</h1>
      <div id="webchat-container" style={{ height: '500px', width: '100%' }}></div>
    </div>
  );
}

export default App;