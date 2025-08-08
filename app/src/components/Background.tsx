import React from 'react';

const Background: React.FC = () => (
  <>
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700;800;900&display=swap');
      * {
        font-family: 'Nunito', system-ui, sans-serif;
      }
      .float-1 { animation: float1 20s ease-in-out infinite; }
      .float-2 { animation: float2 25s ease-in-out infinite; }
      @keyframes float1 {
        0%, 100% { transform: translate(0, 0) scale(1); }
        33% { transform: translate(30px, -20px) scale(1.1); }
        66% { transform: translate(-20px, 15px) scale(0.9); }
      }
      @keyframes float2 {
        0%, 100% { transform: translate(0, 0) scale(1); }
        50% { transform: translate(-25px, 30px) scale(1.05); }
      }
      .gradient-text {
        background: linear-gradient(135deg, #1e40af, #3b82f6, #ef4444, #dc2626);
        background-size: 300% 300%;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: gradientMove 4s ease-in-out infinite;
        text-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
      }
      @keyframes gradientMove {
        0%, 100% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
      }
    `}</style>
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-400/30 rounded-full blur-3xl float-1"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-300/40 rounded-full blur-3xl float-2"></div>
    </div>
  </>
);

export default Background;
