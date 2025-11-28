import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import zuvuLogo from '../assets/zuvu-logo copy.svg';

interface HeaderProps {
  onTryFree: () => void;
}

export default function Header({ onTryFree }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Why Zuvu.ai?', href: '#why-zuvu' },
    { label: 'Compare', href: '#compare' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center space-x-2">
            <img src={zuvuLogo} alt="Zuvu.ai" className="w-10 h-10" />
          </a>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[#0a0a0a] hover:text-[#020CFE] transition-colors duration-200 text-sm font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <button
              onClick={onTryFree}
              className="px-6 py-2.5 bg-[#020CFE] text-white font-semibold rounded-full hover:bg-[#0108d4] transition-all duration-200 text-sm"
            >
              Try Zuvu.ai Free
            </button>
          </div>

          <button
            className="md:hidden text-[#0a0a0a]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block text-[#0a0a0a] hover:text-[#020CFE] transition-colors duration-200 text-sm font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onTryFree();
              }}
              className="w-full mt-4 px-6 py-2.5 bg-[#020CFE] text-white font-semibold rounded-full hover:bg-[#0108d4] transition-all duration-200 text-sm"
            >
              Try Zuvu.ai Free
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
