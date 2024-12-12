'use client';

import React from 'react';

interface PortfolioBackgroundProps {
  children: React.ReactNode;
}

const PortfolioBackground: React.FC<PortfolioBackgroundProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-black text-white relative">
      {children}
    </div>
  );
};

export default PortfolioBackground;