import React from 'react';
import { Search } from 'lucide-react';

interface WelcomeScreenProps {
  password: string;
  setPassword: (value: string) => void;
  onCheck: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ password, setPassword, onCheck }) => (
  <div className="text-center">
    <h1 className="text-3xl font-bold mb-3 gradient-text">
      A Fortress or a Welcome Mat?
    </h1>
    <p className="text-gray-600 text-lg mb-8">
      Your password is the front door to your digital life.<br />
      Let's check if it's locked securely.
    </p>
    <div className="flex gap-2 max-w-md mx-auto">
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Input your password here"
        className="flex-1 px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
        onKeyPress={(e) => e.key === 'Enter' && onCheck()}
      />
      <button
        onClick={onCheck}
        className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors"
      >
        <Search className="w-6 h-6" />
      </button>
    </div>
  </div>
);

export default WelcomeScreen;
