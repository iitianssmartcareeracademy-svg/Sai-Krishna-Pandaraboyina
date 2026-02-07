
import React from 'react';
import { MOCK_CLASSES } from '../../constants';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, Video, MapPin } from 'lucide-react';

const TimeTable: React.FC = () => {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  
  return (
    <div className="space-y-8">
      {/* Calendar Strip */}
      <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <h3 className="text-xl font-bold text-slate-800">May 2024</h3>
            <span className="bg-slate-100 text-slate-500 px-3 py-1 rounded-full text-[10px] font-bold">Week 3</span>
          </div>
          <div className="flex gap-2">
            <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors"><ChevronLeft size={20} /></button>
            <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors"><ChevronRight size={20} /></button>
          </div>
        </div>
        
        <div className="grid grid-cols-7 gap-2">
          {days.map((day, i) => (
            <div key={day} className="text-center">
              <p className="text-[10px] text-slate-400 font-bold uppercase mb-3">{day}</p>
              <div className={`w-full aspect-square rounded-2xl flex items-center justify-center font-bold text-lg cursor-pointer transition-all ${
                i === 1 ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-100' : 'hover:bg-slate-50 text-slate-700'
              }`}>
                {20 + i}
              </div>
              {i === 1 && <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full mx-auto mt-2" />}
            </div>
          ))}
        </div>
      </div>

      {/* Daily Agenda */}
      <section className="max-w-3xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <div className="bg-indigo-100 text-indigo-700 p-2 rounded-xl">
            <CalendarIcon size={20} />
          </div>
          <h3 className="text-xl font-bold text-slate-800">Tuesday, May 21</h3>
        </div>

        <div className="space-y-12 relative before:absolute before:left-8 before:top-2 before:bottom-2 before:w-px before:bg-slate-100">
          {MOCK_CLASSES.map((session, i) => (
            <div key={session.id} className="relative pl-16">
              {/* Timeline Marker */}
              <div className={`absolute left-6 top-1.5 w-4 h-4 rounded-full border-4 border-white shadow-sm z-10 ${
                i === 0 ? 'bg-green-500 animate-pulse' : 'bg-slate-300'
              }`} />
              
              <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded uppercase">{session.type}</span>
                    <span className="text-xs text-slate-400">{session.startTime} - {session.endTime}</span>
                  </div>
                  <h4 className="text-lg font-bold text-slate-800">{session.subject}</h4>
                  <p className="text-sm text-slate-500">{session.topic}</p>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2 text-xs text-slate-500 bg-slate-50 px-3 py-2 rounded-xl">
                    <Video size={14} className="text-red-500" />
                    Online
                  </div>
                  <button className="bg-indigo-600 text-white px-6 py-2.5 rounded-xl text-sm font-bold shadow-md shadow-indigo-100 hover:bg-indigo-700 transition-all">
                    Join
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TimeTable;
