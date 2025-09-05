import React, { useEffect, useState } from "react";

const CountdownTimer = ({ initialMinutes = 60 }) => {
  const STORAGE_KEY = "examEndTime"; // localStorage key
  const [timeLeft, setTimeLeft] = useState(initialMinutes * 60); // seconds

  useEffect(() => {
    // Check if end time already exists in localStorage
    let savedEndTime = localStorage.getItem(STORAGE_KEY);

    if (!savedEndTime) {
      // If not exist, set new end time
      const endTime = Date.now() + initialMinutes * 60 * 1000;
      localStorage.setItem(STORAGE_KEY, endTime);
      savedEndTime = endTime;
    }

    savedEndTime = parseInt(savedEndTime, 10);

    // Function to update remaining time
    const updateTime = () => {
      const remaining = Math.max(0, Math.floor((savedEndTime - Date.now()) / 1000));
      setTimeLeft(remaining);

      if (remaining <= 0) {
       // clearInterval(timerId);
        // ✅ Auto submit / redirect when time finishes
        // window.location.href = "/result";  // or navigate("/result")
      }
    };

    updateTime(); // run immediately
    const timerId = setInterval(updateTime, 1000);

    return () => clearInterval(timerId);
  }, [initialMinutes]);

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
      <div style={timerStyle}>{formatTime()}</div>
    </div>
  );
};

export default CountdownTimer;
