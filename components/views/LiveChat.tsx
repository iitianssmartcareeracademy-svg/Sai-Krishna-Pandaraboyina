
import React, { useState, useRef, useEffect } from 'react';
import { Send, User, Brain, Sparkles, Loader2, Info } from 'lucide-react';
import { getTutorResponse } from '../../services/geminiService';
import { ChatMessage } from '../../types';

const LiveChat: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: '1', sender: 'system', text: 'Namaste! I am your Smart AI Guru. I am trained specifically on IIT-JEE, NEET, and CUCET materials. How can I help you excel today?', timestamp: new Date() }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    const studentMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'student',
      text: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, studentMsg]);
    setInputValue('');
    setIsLoading(true);

    const tutorText = await getTutorResponse(inputValue);
    
    const tutorMsg: ChatMessage = {
      id: (Date.now() + 1).toString(),
      sender: 'tutor',
      text: tutorText,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, tutorMsg]);
    setIsLoading(false);
  };

  const quickDoubts = [
    "Explain Lenz's Law",
    "Integration by parts formula",
    "Difference between DNA and RNA",
    "IIT-JEE weightage for Calculus"
  ];

  return (
    <div className="h-full flex flex-col bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm">
      {/* Header */}
      <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-gradient-to-r from-indigo-50/50 to-white">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white shadow-lg shadow-indigo-100">
            <Brain size={20} />
          </div>
          <div>
            <h3 className="font-bold text-slate-800 flex items-center gap-2">
              Smart AI Guru
              <span className="flex items-center gap-1 bg-indigo-100 text-indigo-700 text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
                <Sparkles size={10} /> Specialized AI
              </span>
            </h3>
            <p className="text-xs text-green-600 font-medium">Ready for your academic doubts</p>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-2 text-slate-400">
           <Info size={16} />
           <span className="text-[10px] font-bold uppercase">Academic Mode</span>
        </div>
      </div>

      {/* Messages */}
      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-6 space-y-6 no-scrollbar"
      >
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.sender === 'student' ? 'justify-end' : 'justify-start'}`}>
            <div className={`flex gap-3 max-w-[85%] ${msg.sender === 'student' ? 'flex-row-reverse' : 'flex-row'}`}>
              <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center ${
                msg.sender === 'student' ? 'bg-slate-100 text-slate-600' : 
                msg.sender === 'system' ? 'bg-amber-100 text-amber-600 border border-amber-200' : 'bg-indigo-100 text-indigo-600 border border-indigo-200'
              }`}>
                {msg.sender === 'student' ? <User size={16} /> : <Brain size={16} />}
              </div>
              <div className="space-y-1">
                <div className={`px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                  msg.sender === 'student' 
                    ? 'bg-indigo-600 text-white rounded-tr-none shadow-md shadow-indigo-50' 
                    : 'bg-slate-50 text-slate-700 rounded-tl-none border border-slate-100 shadow-sm'
                }`}>
                  {msg.text.split('\n').map((line, i) => (
                    <p key={i} className={i > 0 ? 'mt-2' : ''}>{line}</p>
                  ))}
                </div>
                <p className={`text-[10px] text-slate-400 font-medium px-1 ${msg.sender === 'student' ? 'text-right' : 'text-left'}`}>
                  {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-slate-50 border border-slate-100 px-4 py-3 rounded-2xl flex items-center gap-2 shadow-sm animate-pulse">
              <Loader2 size={16} className="animate-spin text-indigo-600" />
              <span className="text-xs text-slate-500 font-medium">Smart Guru is solving your doubt...</span>
            </div>
          </div>
        )}
      </div>

      {/* Quick Suggestions */}
      {messages.length < 3 && !isLoading && (
        <div className="px-6 pb-4 flex gap-2 overflow-x-auto no-scrollbar">
          {quickDoubts.map((doubt, i) => (
            <button
              key={i}
              onClick={() => { setInputValue(doubt); }}
              className="whitespace-nowrap px-3 py-1.5 bg-white border border-indigo-100 rounded-full text-xs text-indigo-600 font-medium hover:bg-indigo-50 transition-colors"
            >
              {doubt}
            </button>
          ))}
        </div>
      )}

      {/* Input */}
      <div className="p-4 border-t border-slate-100 bg-slate-50/50">
        <div className="flex gap-3 items-center bg-white border border-slate-200 rounded-2xl p-1 shadow-inner focus-within:border-indigo-500 transition-colors">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Type your IIT/NEET question here..."
            className="flex-1 px-4 py-2 text-sm outline-none bg-transparent"
          />
          <button 
            onClick={handleSend}
            disabled={!inputValue.trim() || isLoading}
            className="p-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 disabled:opacity-50 disabled:hover:bg-indigo-600 transition-all shadow-md shadow-indigo-100"
          >
            <Send size={18} />
          </button>
        </div>
        <div className="flex items-center justify-center gap-1.5 mt-2">
           <Sparkles size={10} className="text-indigo-400" />
           <p className="text-[10px] text-slate-400 text-center font-medium">
             Advanced Academic AI Powered by Gemini 3 Flash
           </p>
        </div>
      </div>
    </div>
  );
};

export default LiveChat;
