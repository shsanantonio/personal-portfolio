import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
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
    // Set up Intersection Observer for scroll-triggered animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    // Observe all elements with animate-on-scroll class
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => {
      observer.observe(el);
    });

    // Cleanup observer on unmount
    return () => {
      animatedElements.forEach(el => {
        observer.unobserve(el);
      });
      observer.disconnect();
    };
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
