
export enum AppView {
  DASHBOARD = 'DASHBOARD',
  TIMETABLE = 'TIMETABLE',
  STUDY_MATERIAL = 'STUDY_MATERIAL',
  CHAT = 'CHAT',
  TESTS = 'TESTS',
  ASSIGNMENTS = 'ASSIGNMENTS',
  FEES = 'FEES',
  ANNOUNCEMENTS = 'ANNOUNCEMENTS',
  ATTENDANCE = 'ATTENDANCE'
}

export interface ClassSession {
  id: string;
  subject: string;
  topic: string;
  startTime: string;
  endTime: string;
  type: 'class' | 'test' | 'viva';
  status: 'upcoming' | 'ongoing' | 'completed';
}

export interface StudyMaterial {
  id: string;
  title: string;
  type: 'notes' | 'paper' | 'solution';
  subject: string;
  url: string;
}

export interface Announcement {
  id: string;
  title: string;
  content: string;
  date: string;
  priority: 'low' | 'medium' | 'high';
}

export interface Test {
  id: string;
  title: string;
  subject: string;
  durationMinutes: number;
  totalMarks: number;
  status: 'available' | 'completed';
}

export interface ChatMessage {
  id: string;
  sender: 'student' | 'tutor' | 'system';
  text: string;
  timestamp: Date;
}

export interface FeeRecord {
  id: string;
  month: string;
  amount: number;
  status: 'paid' | 'pending';
  receiptUrl?: string;
}
