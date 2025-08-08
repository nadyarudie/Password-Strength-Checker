import type { PasswordAnalysis } from '../types';

export const analyzePassword = (pwd: string): PasswordAnalysis => {
  const checks = [
    { label: 'At least 8 characters long', passed: pwd.length >= 8 },
    { label: 'Contains uppercase letters', passed: /[A-Z]/.test(pwd) },
    { label: 'Contains lowercase letters', passed: /[a-z]/.test(pwd) },
    { label: 'Contains numbers', passed: /\d/.test(pwd) },
    { label: 'Contains symbols', passed: /[^A-Za-z0-9]/.test(pwd) }
  ];

  const passedCount = checks.filter(check => check.passed).length;
  const score = Math.round((passedCount / checks.length) * 100);

  let title = '';
  let subtitle = '';

  if (score === 100) {
    title = 'A Fortress';
    subtitle = 'Is that a password or the launch code for a nuclear submarine? Impressive.';
  } else if (score >= 60) {
    title = 'Or The Bare Minimum';
    subtitle = "You've successfully built a fence that a determined toddler could climb over.";
  } else {
    title = 'A Welcome Mat';
    subtitle = "This isn't a password, it's a VIP invitation for every hacker on the planet.";
  }

  return { score, title, subtitle, checks };
};
