
import React from 'react';
import { MOCK_ANNOUNCEMENTS } from '../../constants';
import { Bell, Megaphone, Info, AlertTriangle } from 'lucide-react';

const Announcements: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Announcements</h2>
          <p className="text-slate-500">Stay updated with latest news from Smart Guru.</p>
        </div>
        <div className="p-3 bg-white rounded-2xl border border-slate-200 text-slate-400">
           <Bell size={24} />
        </div>
      </div>

      <div className="space-y-4">
        {MOCK_ANNOUNCEMENTS.map((ann) => (
          <div key={ann.id} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className={`p-3 rounded-2xl ${
                ann.priority === 'high' ? 'bg-red-50 text-red-600' : 
                ann.priority === 'medium' ? 'bg-amber-50 text-amber-600' : 'bg-blue-50 text-blue-600'
              }`}>
                {ann.priority === 'high' ? <AlertTriangle size={24} /> : 
                 ann.priority === 'medium' ? <Megaphone size={24} /> : <Info size={24} />}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold text-lg text-slate-800">{ann.title}</h4>
                  <span className="text-[10px] font-bold text-slate-400 uppercase">{ann.date}</span>
                </div>
                <p className="text-slate-600 leading-relaxed text-sm">{ann.content}</p>
                <div className="mt-4 flex gap-4">
                   <button className="text-xs font-bold text-indigo-600 hover:underline">Read More</button>
                   {ann.priority === 'high' && (
                     <button className="text-xs font-bold text-slate-400 hover:text-slate-600">Dismiss</button>
                   )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 p-8 border-2 border-dashed border-slate-200 rounded-3xl flex flex-col items-center justify-center text-center">
        <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center text-slate-300 mb-4">
          <Bell size={32} />
        </div>
        <p className="text-slate-400 font-medium">You're all caught up! No more recent announcements.</p>
      </div>
    </div>
  );
};

export default Announcements;
