import B1 from "./B1";
import B2 from "./B2";

const B = () => {
  return (
    <div style={{display: "flex", flexDirection: "column", gap: 100}}>
      <h2>B Component</h2>
      <div
        style={{
          display: "flex",
          gap: 60,
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <B1 />
        <B2 />
      </div>
    </div>
  );
};

export default B;
