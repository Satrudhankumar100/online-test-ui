import React, { useEffect, useState } from "react";

const CountdownTimer = ({ initialMinutes = 60 }) => {
  const [timeLeft, setTimeLeft] = useState(initialMinutes * 60); // seconds
  const [isPaused, setIsPaused] = useState(false);
 
  useEffect(() => {
    if (timeLeft <= 0 || isPaused) return;

    //track current date time minus test started
    //console.log(new Date().toLocaleTimeString())
    const timerId = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeLeft, isPaused]);

  const formatTime = () => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  };

  const timerStyle = {
    fontSize: "2rem",
    fontWeight: "bold",
    color: timeLeft <= 5 * 60 ? "red" : "black",
  };

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <div style={timerStyle}> {formatTime()}</div>

      <button
        onClick={() => setIsPaused(!isPaused)}
        style={{
          background: "transparent",
          border: "none",
          cursor: "pointer",
          fontSize: "1.5rem",
        }}
      >
        {isPaused ? "▶" : "⏸"}
      </button>
    </div>
  );
};

export default CountdownTimer;
