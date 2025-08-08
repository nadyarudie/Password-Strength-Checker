import { useState, useEffect } from 'react';
import { SECURITY_FACTS } from '../utils/constants';

export const useFactRotator = (intervalMs: number = 5000): string => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % SECURITY_FACTS.length);
    }, intervalMs);

    return () => clearInterval(interval);
  }, [intervalMs]);

  return SECURITY_FACTS[currentIndex];
};
