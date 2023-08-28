import { useEffect, useState } from 'react';
import ProgressBar from './components/ProgressBar';
import './App.css';

function App() {
  const [value, setValue] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setValue((val) => {
        if (val >= 100) {
          clearInterval(timer);
          return 100;
        }
        return val + 1;
      });
    }, 100);

    return () => clearInterval(timer);
  }, []);
  return (
    <div className="app">
      <span>Progress Bar</span>
      <ProgressBar value={value} />
    </div>
  );
}

export default App;
