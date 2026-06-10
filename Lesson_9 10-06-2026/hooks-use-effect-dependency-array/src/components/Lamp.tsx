/* eslint-disable react-hooks/set-state-in-effect */
import {
  /* useCallback, */ useEffect,
  useState,
  type CSSProperties,
} from "react";

type Color = "black" | "yellow";

const Lamp = () => {
  const [isOn, setIsOn] = useState<boolean>(false);
  const [color, setColor] = useState<Color>("black");

  const styles = {
    container: {
      margin: 20,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 20,
      textAlign: "center",
    } as Partial<CSSProperties>,
    lamp: {
      height: 120,
      width: 120,
      borderRadius: 9999,
      background: color,
      margin: 0,
      boxShadow: "2px 6px 10px #a4a2a2",
    } as Partial<CSSProperties>,
    btn: {
      borderRadius: 12,
      padding: 12,
      background: "#949494",
      color: "white",
    } as Partial<CSSProperties>,
  };

  function toggleLamp() {
    setIsOn((prev) => !prev);
  }

  // const changeColor = useCallback(() => {
  //   setColor(isOn ? "yellow" : "black");
  // }, [isOn]);

  useEffect(() => {
    function changeColor() {
      setColor(isOn ? "yellow" : "black");
    }

    changeColor();
  }, [isOn]);

  return (
    <div style={styles.container}>
      <div style={styles.lamp}></div>
      <p>Status: {isOn ? "ON" : "OFF"}</p>
      <button style={styles.btn} onClick={toggleLamp}>
        {isOn ? "Turn OFF" : "Turn ON"}
      </button>
    </div>
  );
};

export default Lamp;
