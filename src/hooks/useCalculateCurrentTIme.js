import { useEffect, useState } from "react";

const useCalculateCurrentTime = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000 * 60);
    return () => clearInterval(interval);
  }, []);

  return { currentTime };
};

export default useCalculateCurrentTime;
