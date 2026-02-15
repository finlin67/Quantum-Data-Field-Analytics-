import React from 'react';
import DataOpsDash from './components/DataOpsDash';

export default function App() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-[#020617] text-slate-100 p-4 overflow-hidden">
      <DataOpsDash />
    </div>
  );
}