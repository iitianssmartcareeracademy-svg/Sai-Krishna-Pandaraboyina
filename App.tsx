
import React, { useState } from 'react';
import { AppView } from './types';
import Layout from './components/Layout';
import Dashboard from './components/views/Dashboard';
import TimeTable from './components/views/TimeTable';
import StudyMaterials from './components/views/StudyMaterials';
import LiveChat from './components/views/LiveChat';
import Tests from './components/views/Tests';
import Assignments from './components/views/Assignments';
import Fees from './components/views/Fees';
import Announcements from './components/views/Announcements';
import Attendance from './components/views/Attendance';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>(AppView.DASHBOARD);

  const renderView = () => {
    switch (currentView) {
      case AppView.DASHBOARD: return <Dashboard />;
      case AppView.TIMETABLE: return <TimeTable />;
      case AppView.STUDY_MATERIAL: return <StudyMaterials />;
      case AppView.CHAT: return <LiveChat />;
      case AppView.TESTS: return <Tests />;
      case AppView.ASSIGNMENTS: return <Assignments />;
      case AppView.FEES: return <Fees />;
      case AppView.ANNOUNCEMENTS: return <Announcements />;
      case AppView.ATTENDANCE: return <Attendance />;
      default: return <Dashboard />;
    }
  };

  return (
    <Layout currentView={currentView} setView={setCurrentView}>
      {renderView()}
    </Layout>
  );
};

export default App;
