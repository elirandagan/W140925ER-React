/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";

const Now = () => {
  const [currentDate, setCurrentDate] = useState<Date>();

  const formattedDate = currentDate?.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  useEffect(() => {
    setCurrentDate(new Date());
  }, []);

  return (
    <div
      style={{
        margin: 16,
        display: "flex",
        flexDirection: "column",
        gap: 16,
        justifyContent: "center",
      }}
    >
      <h2 style={{ fontSize: 24, color: "gray" }}>Current Date and Time:</h2>
      <p style={{ fontSize: 22, color: "lightgray" }}> {formattedDate}</p>
    </div>
  );
};

export default Now;
