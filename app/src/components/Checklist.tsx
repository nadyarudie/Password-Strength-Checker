import React from 'react';
import { Check, X } from 'lucide-react';
import type { PasswordCheck } from '../types';

interface ChecklistProps {
  checks: PasswordCheck[];
}

const Checklist: React.FC<ChecklistProps> = ({ checks }) => (
  <div className="text-left space-y-3">
    {checks.map((check, index) => (
      <div key={index} className="flex items-center gap-3">
        {check.passed ? (
          <div className="text-green-500"><Check className="w-5 h-5" /></div>
        ) : (
          <div className="text-red-500"><X className="w-5 h-5" /></div>
        )}
        <span className={`text-lg ${check.passed ? 'text-gray-700' : 'text-gray-400'}`}>
          {check.label}
        </span>
      </div>
    ))}
  </div>
);

export default Checklist;
