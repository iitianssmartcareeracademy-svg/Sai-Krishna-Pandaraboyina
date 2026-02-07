
import React from 'react';
import { MOCK_TESTS } from '../../constants';
import { Award, Timer, CheckCircle, PlayCircle } from 'lucide-react';

const Tests: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-indigo-600 rounded-3xl p-6 text-white">
          <p className="text-xs opacity-75 uppercase tracking-widest font-bold mb-1">Total Tests</p>
          <h4 className="text-4xl font-bold">24</h4>
          <div className="mt-4 flex items-center gap-2 text-xs">
            <span className="bg-white/20 px-2 py-1 rounded">8 Completed</span>
            <span className="bg-white/20 px-2 py-1 rounded">16 Pending</span>
          </div>
        </div>
        <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm">
          <p className="text-xs text-slate-400 uppercase tracking-widest font-bold mb-1">Average Score</p>
          <h4 className="text-4xl font-bold text-slate-800">72%</h4>
          <div className="mt-4 h-2 w-full bg-slate-100 rounded-full overflow-hidden">
            <div className="h-full bg-green-500" style={{ width: '72%' }} />
          </div>
        </div>
        <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm">
          <p className="text-xs text-slate-400 uppercase tracking-widest font-bold mb-1">Rank Progression</p>
          <h4 className="text-4xl font-bold text-slate-800">#42</h4>
          <p className="text-xs text-green-600 font-bold mt-2">↑ 12 positions this week</p>
        </div>
      </div>

      <section>
        <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
          <Award className="text-amber-500" size={24} />
          Active Tests
        </h3>
        <div className="space-y-4">
          {MOCK_TESTS.map((test) => (
            <div key={test.id} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex items-center gap-5">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
                  test.status === 'completed' ? 'bg-green-50 text-green-600' : 'bg-indigo-50 text-indigo-600'
                }`}>
                  {test.status === 'completed' ? <CheckCircle size={32} /> : <Timer size={32} />}
                </div>
                <div>
                  <h4 className="font-bold text-lg text-slate-800">{test.title}</h4>
                  <div className="flex flex-wrap gap-4 mt-1">
                    <span className="text-xs text-slate-400">Subject: <span className="text-slate-600 font-bold">{test.subject}</span></span>
                    <span className="text-xs text-slate-400">Duration: <span className="text-slate-600 font-bold">{test.durationMinutes}m</span></span>
                    <span className="text-xs text-slate-400">Total Marks: <span className="text-slate-600 font-bold">{test.totalMarks}</span></span>
                  </div>
                </div>
              </div>
              
              {test.status === 'completed' ? (
                <div className="text-right">
                  <p className="text-xs text-slate-400 font-bold uppercase mb-1">Scored</p>
                  <p className="text-2xl font-bold text-indigo-600">88/100</p>
                  <button className="text-xs text-indigo-600 font-bold hover:underline mt-1">View Analysis</button>
                </div>
              ) : (
                <button className="bg-indigo-600 text-white px-8 py-3 rounded-2xl font-bold text-sm shadow-lg shadow-indigo-100 flex items-center justify-center gap-2 hover:bg-indigo-700 transition-all">
                  <PlayCircle size={18} />
                  Start Test
                </button>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Tests;
