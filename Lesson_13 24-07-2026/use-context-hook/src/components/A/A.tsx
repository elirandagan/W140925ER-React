import A1 from "./A1";
import A2 from "./A2";

const A = () => {
  return (
    <div style={{display: "flex", flexDirection: "column", gap: 100}}>
      <h2>A Component</h2>
      <div
        style={{
          display: "flex",
          gap: 60,
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <A1 />
        <A2 />
      </div>
    </div>
  );
};

export default A;
