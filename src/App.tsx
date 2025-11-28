import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhyZuvu from './components/WhyZuvu';
import Solution from './components/Solution';
import Compare from './components/Compare';
import UseCases from './components/UseCases';
import HowItWorks from './components/HowItWorks';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import ChatInterface from './components/ChatInterface';
import About from './pages/About';
import Terms from './pages/Terms';
import Cookies from './pages/Cookies';

function App() {
  const [showChat, setShowChat] = useState(false);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
      window.scrollTo(0, 0);
    };

    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  const renderPage = () => {
    switch (currentPath) {
      case '/about':
        return <About />;
      case '/terms':
        return <Terms />;
      case '/cookies':
        return <Cookies />;
      default:
        return (
          <div className="min-h-screen bg-white">
            <Header onTryFree={() => setShowChat(true)} />
            <main>
              <Hero onTryFree={() => setShowChat(true)} />
              <WhyZuvu />
              <Solution />
              <Compare />
              <UseCases />
              <HowItWorks />
              <FAQ />
              <FinalCTA onTryFree={() => setShowChat(true)} />
            </main>
            <Footer />
          </div>
        );
    }
  };

  return (
    <>
      {showChat ? (
        <ChatInterface onClose={() => setShowChat(false)} />
      ) : (
        renderPage()
      )}
    </>
  );
}

export default App;
