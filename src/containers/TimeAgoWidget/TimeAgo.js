import React, { useState, useEffect, useRef } from "react";

import { timeDifferenceForDate } from "utils/utils";

const TimeAgo = ({ time, children }) => {
  const [lastUpdate, setLastUpdate] = useState();
  const [newInterval, setNewInterval] = useState();

  const timer = useRef(null);

  useEffect(() => {
    const [timeDiff, interval] = timeDifferenceForDate(time);
    setLastUpdate(timeDiff);
    setNewInterval(interval);
  }, []);

  useEffect(() => {
    clearInterval(timer.current);
    if (newInterval && newInterval !== 0) {
      timer.current = setInterval(() => {
        const [timeDiff, interval] = timeDifferenceForDate(time);
        setLastUpdate(timeDiff);
        if (interval !== newInterval) {
          setNewInterval(interval);
        }
      }, newInterval);
    }

    return () => clearInterval(timer.current);
  }, [newInterval]);

  return (
    <div>
      {children}
      {lastUpdate}
    </div>
  );
};

export default TimeAgo;
