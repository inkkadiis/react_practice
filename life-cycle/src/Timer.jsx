import React, { useEffect } from "react";

export const Timer = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("counting start");
    }, 1000);

    return () => {
      console.log("end Timer");
      clearInterval(interval);
    };
  }, []);
  return <div>Timer</div>;
};
