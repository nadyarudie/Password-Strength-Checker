export interface PasswordCheck {
  label: string;
  passed: boolean;
}

export interface PasswordAnalysis {
  score: number;
  title: string;
  subtitle: string;
  checks: PasswordCheck[];
}
