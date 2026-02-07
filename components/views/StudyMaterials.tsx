
import React, { useState } from 'react';
import { MOCK_MATERIALS } from '../../constants';
import { Search, Filter, Download, FileText, ChevronRight } from 'lucide-react';

const StudyMaterials: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'notes' | 'paper' | 'solution'>('all');

  const filtered = MOCK_MATERIALS.filter(m => filter === 'all' || m.type === filter);

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            type="text" 
            placeholder="Search notes, topics, or papers..." 
            className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
          />
        </div>
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2 md:pb-0">
          {(['all', 'notes', 'paper', 'solution'] as const).map((t) => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className={`px-4 py-2 rounded-xl text-xs font-bold capitalize transition-all whitespace-nowrap ${
                filter === t ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-100' : 'bg-white text-slate-500 border border-slate-200'
              }`}
            >
              {t === 'all' ? 'All Files' : t === 'paper' ? 'Previous Papers' : t === 'solution' ? 'Detailed Solutions' : 'Revision Notes'}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((item) => (
          <div key={item.id} className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-xl transition-all group flex flex-col h-full">
            <div className="flex items-start justify-between mb-4">
              <div className={`p-3 rounded-2xl ${
                item.type === 'notes' ? 'bg-orange-50 text-orange-600' :
                item.type === 'paper' ? 'bg-blue-50 text-blue-600' : 'bg-green-50 text-green-600'
              }`}>
                <FileText size={24} />
              </div>
              <span className="text-[10px] font-bold px-2 py-1 bg-slate-100 text-slate-500 rounded-lg uppercase tracking-wider">
                {item.subject}
              </span>
            </div>
            <h3 className="font-bold text-slate-800 text-lg mb-2 group-hover:text-indigo-600 transition-colors">
              {item.title}
            </h3>
            <p className="text-sm text-slate-500 mb-6 flex-1">
              {item.type === 'notes' ? 'Comprehensive conceptual revision notes with examples.' : 
               item.type === 'paper' ? 'Official exam paper for pattern analysis.' : 
               'Step-by-step solutions with shortcuts and tips.'}
            </p>
            <div className="flex items-center gap-3 pt-4 border-t border-slate-50">
              <button className="flex-1 flex items-center justify-center gap-2 bg-slate-50 text-slate-600 py-3 rounded-xl text-sm font-bold hover:bg-slate-100 transition-colors">
                <Download size={16} />
                Download
              </button>
              <button className="p-3 bg-indigo-50 text-indigo-600 rounded-xl hover:bg-indigo-100 transition-colors">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {/* Empty State Mockup */}
      {filtered.length === 0 && (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center text-slate-400 mb-4">
            <Search size={32} />
          </div>
          <h3 className="text-xl font-bold text-slate-800">No materials found</h3>
          <p className="text-slate-500">Try adjusting your search or filters.</p>
        </div>
      )}
    </div>
  );
};

export default StudyMaterials;
