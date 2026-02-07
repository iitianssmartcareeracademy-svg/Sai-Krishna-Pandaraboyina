
import React, { useState } from 'react';
import { AppView } from '../types';
import { NAVIGATION_ITEMS } from '../constants';
import { Menu, X, GraduationCap, BellDot, MessageCircle, Phone } from 'lucide-react';

interface LayoutProps {
  currentView: AppView;
  setView: (view: AppView) => void;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ currentView, setView, children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const openWhatsApp = () => {
    const phoneNumber = "919000000000"; // Mock number
    const text = encodeURIComponent("Hello Smart Guru Team, I need help with my course.");
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden">
      {/* Sidebar - Desktop */}
      <aside className="hidden md:flex flex-col w-64 bg-white border-r border-slate-200">
        <div className="p-6 flex items-center gap-3">
          <div className="bg-indigo-600 p-2 rounded-lg">
            <GraduationCap className="text-white" size={24} />
          </div>
          <h1 className="font-bold text-xl text-slate-800 leading-tight">
            Smart Guru<br/>
            <span className="text-sm font-medium text-indigo-600">NEET & IIT</span>
          </h1>
        </div>
        
        <nav className="flex-1 px-4 space-y-1 py-4 overflow-y-auto no-scrollbar">
          {NAVIGATION_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => setView(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all ${
                currentView === item.id 
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200' 
                  : 'text-slate-500 hover:bg-slate-100 hover:text-slate-700'
              }`}
            >
              {item.icon}
              <span className="font-medium text-sm">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-100 space-y-4">
          <button 
            onClick={openWhatsApp}
            className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white py-2.5 rounded-xl text-sm font-bold transition-colors"
          >
            <MessageCircle size={18} />
            Support Chat
          </button>
          <div className="bg-slate-50 p-3 rounded-xl flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold text-xs">
              AS
            </div>
            <div>
              <p className="text-xs font-semibold">Aditya Sharma</p>
              <p className="text-[10px] text-slate-500">IIT Aspirant</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-full overflow-hidden relative">
        {/* Top Header */}
        <header className="h-16 flex items-center justify-between px-6 bg-white border-b border-slate-200 sticky top-0 z-20">
          <div className="flex items-center gap-4">
            <button 
              className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <h2 className="text-lg font-bold text-slate-800 md:block hidden">
              {NAVIGATION_ITEMS.find(i => i.id === currentView)?.label}
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <BellDot size={20} className="text-slate-500 cursor-pointer" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-[10px] text-white rounded-full flex items-center justify-center border-2 border-white">2</span>
            </div>
            <div className="h-8 w-px bg-slate-200"></div>
            <div className="text-right hidden sm:block">
              <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">Attendance</p>
              <p className="text-sm font-bold text-green-600">92% Average</p>
            </div>
          </div>
        </header>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8 no-scrollbar bg-slate-50/50">
          {children}
        </div>

        {/* Floating WhatsApp Action Button */}
        <button 
          onClick={openWhatsApp}
          className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-2xl shadow-green-200 hover:scale-110 transition-transform z-50 animate-bounce md:hidden"
          title="WhatsApp Support"
        >
          <MessageCircle size={28} />
        </button>

        {/* Mobile Navigation Sidebar Overlay */}
        {isMobileMenuOpen && (
          <div 
            className="fixed inset-0 bg-black/40 z-30 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
        <div className={`fixed inset-y-0 left-0 w-64 bg-white z-40 transform transition-transform md:hidden ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="p-6 border-b border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
               <GraduationCap className="text-indigo-600" size={24} />
               <h1 className="font-bold text-lg">Smart Guru</h1>
            </div>
            <button onClick={() => setIsMobileMenuOpen(false)}>
              <X size={20} className="text-slate-400" />
            </button>
          </div>
          <nav className="p-4 space-y-2 flex-1 overflow-y-auto">
            {NAVIGATION_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => { setView(item.id); setIsMobileMenuOpen(false); }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl ${
                  currentView === item.id 
                    ? 'bg-indigo-600 text-white' 
                    : 'text-slate-500 hover:bg-slate-100'
                }`}
              >
                {item.icon}
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
            <div className="mt-4 pt-4 border-t border-slate-100">
               <button 
                onClick={openWhatsApp}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-green-50 text-green-700 font-bold"
              >
                <MessageCircle size={20} />
                WhatsApp Support
              </button>
            </div>
          </nav>
        </div>
      </main>
    </div>
  );
};

export default Layout;
