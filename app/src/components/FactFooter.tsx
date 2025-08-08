import React from 'react';
import { useFactRotator } from '../hooks/useFactRotator';

const FactFooter: React.FC = () => {
  const currentFact = useFactRotator(5000);

  return (
    <div className="text-center text-gray-600 text-sm">
      <div className="transition-opacity duration-500">
        <strong>Did you know?</strong> {currentFact}
      </div>
    </div>
  );
};

export default FactFooter;
