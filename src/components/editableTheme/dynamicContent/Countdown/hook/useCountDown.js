// CountdownHook.js
import { useState, useEffect } from 'react';

function useCountdown(targetTime) {
  const [timeRemaining, setTimeRemaining] = useState({});

  useEffect(() => {
    const calculateTimeRemaining = () => {
      const now = Date.now() / 1000;
      const remaining = targetTime - now;

      const days = Math.floor(remaining / (3600 * 24));
      const hours = Math.floor((remaining % (3600 * 24)) / 3600);
      const minutes = Math.floor((remaining % 3600) / 60);
      const seconds = Math.floor(remaining % 60);

      return { days, hours, minutes, seconds, total: remaining };
    };

    const updateCountdown = () => {
      const newTimeRemaining = calculateTimeRemaining();
      setTimeRemaining(newTimeRemaining);
    };

    const interval = setInterval(updateCountdown, 1000);
    updateCountdown(); // Initial update

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [targetTime]);

  return timeRemaining;
}

export default useCountdown;