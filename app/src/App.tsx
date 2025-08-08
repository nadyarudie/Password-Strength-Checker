// src/App.tsx

import React, { useState } from 'react';
import Background from './components/Background';
import WelcomeScreen from './components/WelcomeScreen';
import ResultsScreen from './components/ResultsScreen';
import FactFooter from './components/FactFooter';
import { analyzePassword } from './utils/passwordAnalyzer';

const App: React.FC = () => {
  const [password, setPassword] = useState('');
  const [showResults, setShowResults] = useState(false);

  const handlePasswordCheck = () => {
    if (password.trim()) {
      setShowResults(true);
    }
  };

  const handleBack = () => {
    setShowResults(false);
    setPassword('');
  };

  const analysis = analyzePassword(password);

  return (
    <div className="min-h-screen relative bg-gray-100 flex items-center justify-center p-4 overflow-hidden">
      <Background />
      <div className="w-full max-w-2xl relative z-10">
        {/* --- PERUBAHAN DI SINI --- */}
        <div 
          className="bg-gray-50/60 backdrop-blur-sm rounded-3xl shadow-xl p-8 mb-6 flex flex-col justify-center items-center" 
          style={{ minHeight: '450px' }}
        >
          {/* Perubahan yang dilakukan:
            - Menghapus 'backgroundColor' dari inline style.
            - Menambahkan kelas 'bg-gray-50/60' untuk memberi warna latar belakang abu-abu sangat terang dengan opasitas 60%.
              Anda bisa mengubah angka 60 (misal: 50, 40, 30) untuk opasitas yang lebih rendah lagi.
          */}
          {!showResults ? (
            <WelcomeScreen
              password={password}
              setPassword={setPassword}
              onCheck={handlePasswordCheck}
            />
          ) : (
            <ResultsScreen
              analysis={analysis}
              password={password}
              onBack={handleBack}
            />
          )}
        </div>
        <FactFooter />
      </div>
    </div>
  );
};

export default App;
