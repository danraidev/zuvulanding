import { Search, Plus, Compass, MessageSquare, Folder, Network, User, Sun, Send } from 'lucide-react';
import zuvuLogo from '../assets/zuvu-logo copy.svg';

interface ChatInterfaceProps {
  onClose: () => void;
}

export default function ChatInterface({ onClose }: ChatInterfaceProps) {
  return (
    <div className="fixed inset-0 bg-white z-50 flex">
      <aside className="w-20 bg-white border-r border-gray-200 flex flex-col items-center py-6 space-y-8">
        <button
          onClick={onClose}
          className="w-12 h-12 rounded-xl flex items-center justify-center relative hover:opacity-80 transition-opacity"
        >
          <img src={zuvuLogo} alt="Zuvu.ai" className="w-12 h-12 rounded-xl" />
        </button>

        <nav className="flex flex-col items-center space-y-6">
          <button className="flex flex-col items-center gap-1 text-gray-400 hover:text-[#020CFE] transition-colors">
            <Compass size={24} />
            <span className="text-xs">Explore</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-[#020CFE]">
            <MessageSquare size={24} fill="#020CFE" />
            <span className="text-xs font-semibold">Chats</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-gray-400 hover:text-[#020CFE] transition-colors">
            <Folder size={24} />
            <span className="text-xs">Projects</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-gray-400 hover:text-[#020CFE] transition-colors">
            <Network size={24} />
            <span className="text-xs">Workflows</span>
          </button>
        </nav>

        <div className="flex-1"></div>

        <div className="flex flex-col items-center space-y-4">
          <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors">
            <User size={20} />
          </button>
          <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors">
            <Sun size={20} />
          </button>
        </div>
      </aside>

      <div className="w-80 bg-[#fafafa] border-r border-gray-200 flex flex-col">
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-[#0a0a0a]">Chats</h2>
            <button className="w-8 h-8 rounded-lg bg-white hover:bg-gray-100 flex items-center justify-center transition-colors border border-gray-200">
              <Plus size={18} className="text-gray-600" />
            </button>
          </div>
          <div className="relative">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#020CFE]/20 focus:border-[#020CFE]"
            />
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center">
          <p className="text-sm text-gray-400">No chats found</p>
        </div>
      </div>

      <main className="flex-1 flex flex-col">
        <header className="h-16 border-b border-gray-200 flex items-center justify-between px-6">
          <h1 className="text-lg font-semibold text-[#0a0a0a]">New Chat</h1>
          <button
            onClick={onClose}
            className="px-6 py-2 bg-[#020CFE] text-white font-semibold rounded-full hover:bg-[#0108d4] transition-colors text-sm"
          >
            Sign In
          </button>
        </header>

        <div className="flex-1 flex flex-col items-center justify-center p-6">
          <div className="max-w-2xl w-full space-y-8">
            <div className="flex justify-center mb-8">
              <div className="w-32 h-32 rounded-full flex items-center justify-center relative">
                <div className="absolute inset-0 rounded-full animate-rotate-gradient" style={{
                  background: 'conic-gradient(from 0deg, #020CFE 0%, #020CFE 25%, transparent 25%, transparent 100%)',
                }}></div>
                <div className="absolute inset-1 rounded-full bg-white"></div>
              </div>
            </div>

            <h1 className="text-5xl font-bold text-center text-[#0a0a0a]">Ask Once. Compare Answers.</h1>

            <div className="relative">
              <input
                type="text"
                placeholder="Ask anything..."
                className="w-full px-6 py-4 bg-[#f5f5f5] border border-gray-200 rounded-full text-base focus:outline-none focus:ring-2 focus:ring-[#020CFE]/20 focus:border-[#020CFE] pr-32"
              />
              <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-2">
                <select className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#020CFE]/20 cursor-pointer">
                  <option>Auto</option>
                  <option>ChatGPT</option>
                  <option>Claude</option>
                  <option>Gemini</option>
                </select>
                <button className="w-10 h-10 bg-gray-600 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors">
                  <Send size={18} className="text-white" />
                </button>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 justify-center">
              <button className="px-4 py-2 bg-white hover:bg-gray-50 border border-gray-200 rounded-full text-sm font-medium transition-colors flex items-center gap-2">
                <span>✨</span>
                Create Image
              </button>
              <button className="px-4 py-2 bg-white hover:bg-gray-50 border border-gray-200 rounded-full text-sm font-medium transition-colors">
                Write
              </button>
              <button className="px-4 py-2 bg-white hover:bg-gray-50 border border-gray-200 rounded-full text-sm font-medium transition-colors">
                Build
              </button>
              <button className="px-4 py-2 bg-white hover:bg-gray-50 border border-gray-200 rounded-full text-sm font-medium transition-colors">
                Deep Research
              </button>
              <button className="px-4 py-2 bg-white hover:bg-gray-50 border border-gray-200 rounded-full text-sm font-medium transition-colors">
                Create Video
              </button>
            </div>

            <div className="flex justify-center">
              <button className="px-4 py-2 bg-white hover:bg-gray-50 border border-gray-200 rounded-full text-sm font-medium transition-colors">
                Learn
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
