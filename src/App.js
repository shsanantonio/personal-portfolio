import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from 'react';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Aboutme } from './components/Aboutme';
import { Blog } from './components/Blog';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  useEffect(() => {
    // Function to load the Chatbase script
    const loadChatbaseScript = () => {
      return new Promise((resolve) => {
        if (document.getElementById('chatbase-script')) {
          resolve();
          return;
        }
        const script = document.createElement('script');
        script.src = 'https://www.chatbase.co/embed.min.js';
        script.id = 'chatbase-script';
        script.onload = () => resolve();
        document.body.appendChild(script);
      });
    };

    loadChatbaseScript().then(() => {
      // Wait a bit for the chatbot to initialize, then open it
      setTimeout(() => {
        if (window.chatbase) {
          // Try to call the method that opens/maximizes the chatbot
          // This depends on the Chatbase API — if no official method, simulate click
          window.chatbase('open'); // If 'open' is supported

          // Or fallback to simulate a click on the chatbot button, if you know the selector
          const chatButton = document.querySelector('#chatbase-widget-button');
          if (chatButton) {
            chatButton.click();
          }
        }
      }, 2000); // adjust timeout as needed
    });
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Aboutme />
      <Blog />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
