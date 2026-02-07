
import React from 'react';
import { ClipboardList, Clock, ArrowRight, FileText } from 'lucide-react';

const Assignments: React.FC = () => {
  const assignments = [
    { id: '1', title: 'Calculus Problem Set 4', subject: 'Math', deadline: 'Today, 11:59 PM', status: 'urgent' },
    { id: '2', title: 'Organic Chemistry: IUPAC', subject: 'Chemistry', deadline: 'Tomorrow', status: 'pending' },
    { id: '3', title: 'Optics: Reflection Lab Report', subject: 'Physics', deadline: 'Friday', status: 'pending' },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-indigo-50 p-8 rounded-3xl border border-indigo-100">
        <div className="flex items-center justify-between">
          <div className="max-w-md">
            <h2 className="text-2xl font-bold text-indigo-900 mb-2">Practice makes perfect.</h2>
            <p className="text-indigo-700 mb-4">You have 3 active assignments. Complete them to earn bonus performance points!</p>
            <div className="w-full bg-indigo-200 h-2 rounded-full overflow-hidden">
              <div className="bg-indigo-600 h-full w-[65%]" />
            </div>
            <p className="text-[10px] font-bold text-indigo-400 mt-2 uppercase tracking-widest">Progress: 12/15 completed this month</p>
          </div>
          <div className="hidden md:block">
            <ClipboardList size={100} className="text-indigo-200" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {assignments.map((item) => (
          <div key={item.id} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-start gap-4 hover:border-indigo-200 transition-colors">
            <div className={`p-4 rounded-2xl ${item.status === 'urgent' ? 'bg-red-50 text-red-600' : 'bg-indigo-50 text-indigo-600'}`}>
              <FileText size={24} />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{item.subject}</span>
                {item.status === 'urgent' && (
                  <span className="bg-red-500 text-white text-[10px] px-2 py-0.5 rounded-full font-bold animate-pulse">URGENT</span>
                )}
              </div>
              <h4 className="font-bold text-slate-800 text-lg mb-4">{item.title}</h4>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs text-slate-500">
                  <Clock size={14} />
                  <span>Due: {item.deadline}</span>
                </div>
                <button className="flex items-center gap-2 text-indigo-600 font-bold text-sm hover:translate-x-1 transition-transform">
                  Start
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Assignments;
