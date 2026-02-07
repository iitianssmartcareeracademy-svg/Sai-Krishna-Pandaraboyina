
import React from 'react';
import { UserCheck, Calendar, TrendingUp, Filter } from 'lucide-react';

const Attendance: React.FC = () => {
  const days = Array.from({ length: 30 }, (_, i) => ({
    day: i + 1,
    status: Math.random() > 0.1 ? 'present' : 'absent'
  }));

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-bold text-slate-800">Attendance History</h3>
            <div className="flex gap-2">
              <button className="p-2 border border-slate-100 rounded-lg hover:bg-slate-50"><Filter size={18} className="text-slate-400" /></button>
              <select className="bg-slate-50 border-none text-sm font-bold text-slate-600 rounded-lg px-4 py-2 outline-none">
                <option>May 2024</option>
                <option>April 2024</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-7 gap-3 mb-8">
            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => (
              <div key={i} className="text-center text-[10px] font-bold text-slate-400 uppercase mb-2">{d}</div>
            ))}
            {days.map((d) => (
              <div 
                key={d.day} 
                className={`aspect-square rounded-xl flex items-center justify-center text-xs font-bold relative group cursor-pointer ${
                  d.status === 'present' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-600'
                }`}
              >
                {d.day}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-indigo-300 rounded-xl transition-all" />
              </div>
            ))}
          </div>

          <div className="flex gap-6 pt-6 border-t border-slate-50">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="text-xs text-slate-500 font-bold">Present (27 days)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <span className="text-xs text-slate-500 font-bold">Absent (3 days)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-slate-200" />
              <span className="text-xs text-slate-500 font-bold">Holiday</span>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gradient-to-br from-green-500 to-green-600 p-8 rounded-3xl text-white shadow-xl shadow-green-100">
            <p className="text-xs font-bold uppercase tracking-widest opacity-80 mb-1">Monthly Average</p>
            <h4 className="text-5xl font-bold">92%</h4>
            <div className="mt-4 flex items-center gap-1 text-sm font-medium">
              <TrendingUp size={16} />
              <span>Above institute average</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
            <h4 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
              <Calendar className="text-indigo-500" size={18} />
              Recent Absences
            </h4>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-slate-700">12 May, 2024</p>
                  <p className="text-xs text-slate-400">Medical Reason (Informed)</p>
                </div>
                <span className="bg-amber-100 text-amber-700 text-[10px] px-2 py-1 rounded font-bold">Excused</span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-slate-700">05 May, 2024</p>
                  <p className="text-xs text-slate-400">Not Specified</p>
                </div>
                <span className="bg-red-100 text-red-700 text-[10px] px-2 py-1 rounded font-bold">Penalty</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Attendance;
