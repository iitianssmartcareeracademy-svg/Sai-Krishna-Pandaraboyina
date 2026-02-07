
import React from 'react';
import { MOCK_CLASSES, MOCK_ANNOUNCEMENTS } from '../../constants';
import { Clock, Book, AlertCircle, TrendingUp } from 'lucide-react';

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      {/* Welcome Section */}
      <div className="bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-3xl p-8 text-white shadow-xl shadow-indigo-100">
        <h1 className="text-3xl font-bold mb-2">Hello, Aditya! 👋</h1>
        <p className="text-indigo-100 mb-6">You have 3 classes today. Stay focused on your goal: IIT Bombay CSE.</p>
        <div className="flex flex-wrap gap-4">
          <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-sm">
            🎯 Target: JEE Advanced
          </div>
          <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-sm">
            📊 Rank Prediction: Top 500
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Next Class */}
        <div className="lg:col-span-2 space-y-6">
          <section>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-slate-800">Today's Schedule</h3>
              <button className="text-indigo-600 text-sm font-semibold hover:underline">View Full Calendar</button>
            </div>
            <div className="space-y-4">
              {MOCK_CLASSES.map((session) => (
                <div key={session.id} className="bg-white p-5 rounded-2xl border border-slate-100 flex items-center gap-4 hover:shadow-md transition-all group">
                  <div className={`p-3 rounded-xl ${session.type === 'class' ? 'bg-blue-50 text-blue-600' : 'bg-amber-50 text-amber-600'}`}>
                    {session.type === 'class' ? <Book size={24} /> : <AlertCircle size={24} />}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-slate-800">{session.subject}: {session.topic}</h4>
                    <p className="text-xs text-slate-400 flex items-center gap-1 mt-1">
                      <Clock size={12} /> {session.startTime} - {session.endTime}
                    </p>
                  </div>
                  <button className="px-4 py-2 rounded-lg text-sm font-bold bg-slate-50 text-slate-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    Join Class
                  </button>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white rounded-3xl p-6 border border-slate-100">
            <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
              <TrendingUp className="text-green-500" size={20} />
              Performance Overview
            </h3>
            <div className="h-40 flex items-end justify-between gap-2 px-2">
              {[60, 45, 80, 55, 90, 75, 85].map((val, i) => (
                <div key={i} className="w-full bg-slate-100 rounded-t-lg relative group">
                  <div 
                    className="absolute bottom-0 left-0 right-0 bg-indigo-500 rounded-t-lg transition-all duration-1000 group-hover:bg-indigo-600"
                    style={{ height: `${val}%` }}
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span>Thu</span>
              <span>Fri</span>
              <span>Sat</span>
              <span>Sun</span>
            </div>
          </section>
        </div>

        {/* Sidebar Widgets */}
        <div className="space-y-6">
          <section className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm">
            <h3 className="font-bold text-slate-800 mb-4">Latest Updates</h3>
            <div className="space-y-4">
              {MOCK_ANNOUNCEMENTS.map((ann) => (
                <div key={ann.id} className="border-l-4 border-indigo-500 pl-4 py-1">
                  <h4 className="font-bold text-sm text-slate-800">{ann.title}</h4>
                  <p className="text-xs text-slate-500 line-clamp-2 mt-1">{ann.content}</p>
                  <span className="text-[10px] text-slate-400 mt-2 block">{ann.date}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-indigo-50 rounded-3xl p-6 border border-indigo-100">
            <h3 className="font-bold text-indigo-900 mb-2">Homework Pending</h3>
            <p className="text-sm text-indigo-700 mb-4">Organic Chemistry assignment is due in 3 hours.</p>
            <button className="w-full py-3 bg-indigo-600 text-white rounded-xl text-sm font-bold shadow-lg shadow-indigo-200">
              Submit Now
            </button>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
