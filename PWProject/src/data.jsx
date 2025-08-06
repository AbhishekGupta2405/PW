// data.jsx
import React from 'react';
import {
  FaFlask,
  FaGraduationCap,
  FaChalkboardTeacher,
  FaBuilding,
  FaWrench,
  FaUserShield,
  FaLandmark,
  FaBook,
  FaUserMd,
} from 'react-icons/fa';
import { SiGooglescholar } from 'react-icons/si';

export const goalsData = [
  {
    title: 'NEET',
    subtext: 'Class 11 | Class 12 | Class 12+',
    icon: <FaFlask />,
    subcategories: ['11', '12', '12+'],
  },
  {
    title: 'IIT JEE',
    subtext: 'Class 11 | Class 12 | Class 12+',
    icon: <FaGraduationCap />,
    subcategories: ['11', '12', '12+'],
  },
  {
    title: 'School Boards ( Class 9 to 12 )',
    subtext: 'Class 9 | Class 10 | Class 11 | Class 12',
    icon: <FaBook />,
    subcategories: ['Class 9', 'Class 10', 'Class 11', 'Class 12'],
  },
  {
    title: 'PW OnlyIAS',
    subtext: 'UPSC | State PSC',
    icon: <SiGooglescholar />,
    subcategories: ['UPSC', 'State PSC'],
  },
  {
    title: 'School Preparation',
    subtext: 'Class 3rd to 8th | International Boards | Teacher Training | Curriculum - Books',
    icon: <FaChalkboardTeacher />,
    subcategories: ['Class 3 to 5', 'Class 6 to 8', 'Intl. Boards'],
  },
  {
    title: 'Olympiad',
    subtext: 'Government Olympiad | Private Olympiad',
    icon: <FaGraduationCap />,
    subcategories: ['Govt.', 'Private'],
  },
  {
    title: 'Govt. Exams',
    subtext: 'SSC | Banking | Teaching | Railway | JAIIB & CAIIB | Nursing | Judiciary | State Exams',
    icon: <FaLandmark />,
    subcategories: ['SSC', 'Banking', 'Railway'],
  },
  {
    title: 'UG & PG Entrance Exam',
    subtext: 'MBA | IPMAT | IIT Jam | CUET | CLAT | NET | etc.',
    icon: <FaBook />,
    subcategories: ['MBA', 'CLAT', 'CUET'],
  },
  {
    title: 'ESE GATE & Engineering',
    subtext: 'ESE | GATE | AE/JE',
    icon: <FaWrench />,
    subcategories: ['ESE', 'GATE', 'AE/JE'],
  },
  {
    title: 'Finance Course',
    subtext: 'CA | CS | ACCA | Financial Modeling | Taxation & Accounting',
    icon: <FaBuilding />,
    subcategories: ['CA', 'CS', 'ACCA'],
  },
  {
    title: 'DEFENCE',
    subtext: 'NDA | SSB | CDS | AFCAT | Agniveer - X | Y',
    icon: <FaUserShield />,
    subcategories: ['NDA', 'CDS', 'AFCAT'],
  },
  {
    title: 'MedEd - MBBS Prof & NEET-PG',
    subtext: 'MBBS Prof | NEET-PG | INI-CET | FMGE',
    icon: <FaUserMd />,
    subcategories: ['MBBS', 'NEET-PG', 'FMGE'],
  },
];
