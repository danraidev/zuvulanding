import { useState } from 'react';
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

function App() {
  const [showChat, setShowChat] = useState(false);

  return (
    <>
      {showChat ? (
        <ChatInterface onClose={() => setShowChat(false)} />
      ) : (
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
      )}
    </>
  );
}

export default App;
