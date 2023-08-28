import React, { useEffect, useState } from 'react';
import '../App.css';

interface ProgressBarProps {
  value?: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ value = 0 }) => {
  const [percentage, setPercentage] = useState<number>(value);
  useEffect(() => {
    setPercentage(Math.min(100, Math.max(value, 0)));
  }, [value]);
  return (
    <div className="progress">
      <span style={{ color: percentage > 49 ? 'white' : 'black' }}>
        {value.toFixed()}%
      </span>
      <div style={{ width: `${percentage}%` }} />
    </div>
  );
};

export default ProgressBar;
