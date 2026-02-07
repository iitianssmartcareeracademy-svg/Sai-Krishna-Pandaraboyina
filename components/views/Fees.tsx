
import React from 'react';
import { MOCK_FEES } from '../../constants';
import { CreditCard, FileDown, Clock, CheckCircle2, ShieldCheck } from 'lucide-react';

const Fees: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="bg-white rounded-3xl border border-slate-100 p-8 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-5">
          <ShieldCheck size={120} />
        </div>
        <div className="relative z-10">
          <h2 className="text-2xl font-bold text-slate-800 mb-2">Payment Status</h2>
          <p className="text-slate-500 mb-8">Maintain your enrollment by ensuring timely fee payments.</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
            <div className="space-y-1">
              <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Current Plan</p>
              <p className="text-xl font-bold text-slate-800">IIT-JEE 2 Year Intensive</p>
              <p className="text-sm text-slate-500">Academic Year 2024-25</p>
            </div>
            <div className="space-y-1">
              <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Pending Dues</p>
              <p className="text-xl font-bold text-red-600">₹15,000</p>
              <p className="text-sm text-slate-500">Next due date: 10 June, 2024</p>
            </div>
          </div>
          
          <button className="w-full sm:w-auto bg-indigo-600 text-white px-10 py-4 rounded-2xl font-bold shadow-xl shadow-indigo-100 hover:bg-indigo-700 transition-all flex items-center justify-center gap-2">
            <CreditCard size={20} />
            Pay Now
          </button>
        </div>
      </div>

      <section>
        <h3 className="font-bold text-slate-800 mb-6">Payment History</h3>
        <div className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm">
          <table className="w-full text-left">
            <thead className="bg-slate-50 border-b border-slate-100">
              <tr>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Month</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {MOCK_FEES.map((fee) => (
                <tr key={fee.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-slate-800">{fee.month}</td>
                  <td className="px-6 py-4 text-slate-600">₹{fee.amount.toLocaleString()}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${
                      fee.status === 'paid' ? 'bg-green-50 text-green-600' : 'bg-amber-50 text-amber-600'
                    }`}>
                      {fee.status === 'paid' ? <CheckCircle2 size={12} /> : <Clock size={12} />}
                      {fee.status === 'paid' ? 'Paid' : 'Pending'}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    {fee.status === 'paid' ? (
                      <button className="text-indigo-600 hover:bg-indigo-50 p-2 rounded-lg transition-colors inline-flex items-center gap-2 text-sm font-bold">
                        <FileDown size={18} />
                        Receipt
                      </button>
                    ) : (
                      <button className="text-slate-400 cursor-not-allowed text-sm font-bold">N/A</button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <div className="bg-blue-50 p-6 rounded-3xl border border-blue-100 flex items-start gap-4">
        <div className="bg-blue-600 p-2 rounded-xl text-white">
          <ShieldCheck size={20} />
        </div>
        <div>
          <h4 className="font-bold text-blue-900">Secure Payments</h4>
          <p className="text-sm text-blue-700 mt-1">
            All payments are encrypted and secured. Receipts are automatically sent to registered parent email addresses upon successful transaction.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Fees;
