import React from 'react';
import { ArrowLeft } from 'lucide-react';
import type { PasswordAnalysis } from '../types';
import StrengthMeter from './StrengthMeter';
import Checklist from './Checklist';

interface ResultsScreenProps {
  analysis: PasswordAnalysis;
  password: string;
  onBack: () => void;
}

const ResultsScreen: React.FC<ResultsScreenProps> = ({ analysis, password, onBack }) => (
  <div className="text-center">
     <button 
        onClick={onBack}
        className="absolute top-8 left-8 p-2 hover:bg-gray-100 rounded-lg transition-colors"
      >
        <ArrowLeft className="w-6 h-6 text-gray-600" />
      </button>
    <h1 className="text-3xl font-bold mb-3 gradient-text">
      {analysis.title}
    </h1>
    <p className="text-gray-600 text-lg mb-8">{analysis.subtitle}</p>
    <div className="bg-gray-100 rounded-lg p-4 mb-8 text-lg font-mono">
      {password}
    </div>
    <div className="flex flex-col md:flex-row items-center justify-center gap-8">
      <StrengthMeter score={analysis.score} />
      <Checklist checks={analysis.checks} />
    </div>
  </div>
);

export default ResultsScreen;
