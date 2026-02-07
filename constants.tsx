
import React from 'react';
import { 
  LayoutDashboard, 
  Calendar, 
  BookOpen, 
  Sparkles, 
  FileText, 
  ClipboardList, 
  CreditCard, 
  Bell, 
  UserCheck 
} from 'lucide-react';
import { AppView, ClassSession, StudyMaterial, Announcement, Test, FeeRecord } from './types';

export const NAVIGATION_ITEMS = [
  { id: AppView.DASHBOARD, label: 'Dashboard', icon: <LayoutDashboard size={20} /> },
  { id: AppView.TIMETABLE, label: 'Time-table', icon: <Calendar size={20} /> },
  { id: AppView.STUDY_MATERIAL, label: 'Materials', icon: <BookOpen size={20} /> },
  { id: AppView.CHAT, label: 'AI Tutor', icon: <Sparkles size={20} /> },
  { id: AppView.TESTS, label: 'Tests', icon: <FileText size={20} /> },
  { id: AppView.ASSIGNMENTS, label: 'Assignments', icon: <ClipboardList size={20} /> },
  { id: AppView.FEES, label: 'Fees', icon: <CreditCard size={20} /> },
  { id: AppView.ANNOUNCEMENTS, label: 'Updates', icon: <Bell size={20} /> },
  { id: AppView.ATTENDANCE, label: 'Attendance', icon: <UserCheck size={20} /> },
];

export const MOCK_CLASSES: ClassSession[] = [
  { id: '1', subject: 'Physics', topic: 'Electromagnetism - Part 2', startTime: '09:00 AM', endTime: '10:30 AM', type: 'class', status: 'upcoming' },
  { id: '2', subject: 'Mathematics', topic: 'Calculus: Integration', startTime: '11:00 AM', endTime: '12:30 PM', type: 'class', status: 'upcoming' },
  { id: '3', subject: 'NEET Practice', topic: 'Biology: Cell Division', startTime: '02:00 PM', endTime: '03:30 PM', type: 'test', status: 'upcoming' },
];

export const MOCK_MATERIALS: StudyMaterial[] = [
  { id: 'm1', title: 'Thermodynamics Formulas', type: 'notes', subject: 'Physics', url: '#' },
  { id: 'm2', title: 'IIT-JEE 2023 Mains Paper', type: 'paper', subject: 'Common', url: '#' },
  { id: 'm3', title: 'Organic Chemistry Roadmap', type: 'solution', subject: 'Chemistry', url: '#' },
];

export const MOCK_ANNOUNCEMENTS: Announcement[] = [
  { id: 'a1', title: 'Mock Test Schedule', content: 'Grand Mock Test series starts from next Monday. Please download the syllabus.', date: '2024-05-20', priority: 'high' },
  { id: 'a2', title: 'Doubt Clearing Session', content: 'Special session by HOD Physics at 4 PM tomorrow.', date: '2024-05-19', priority: 'medium' },
];

export const MOCK_TESTS: Test[] = [
  { id: 't1', title: 'Full Syllabus Mock 01', subject: 'JEE Advanced', durationMinutes: 180, totalMarks: 300, status: 'available' },
  { id: 't2', title: 'Sectional Test: Organic', subject: 'Chemistry', durationMinutes: 60, totalMarks: 100, status: 'completed' },
];

export const MOCK_FEES: FeeRecord[] = [
  { id: 'f1', month: 'May 2024', amount: 15000, status: 'paid', receiptUrl: 'receipt_may.pdf' },
  { id: 'f2', month: 'June 2024', amount: 15000, status: 'pending' },
];
