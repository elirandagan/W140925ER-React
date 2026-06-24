import "./App.css";
import A from "./components/A/A";
import B from "./components/B/B";

function App() {
  return (
    <div style={{display: "flex", flexDirection: "column", gap: 100}}>
      <h1>App Component</h1>
      <div
        style={{
          display: "flex",
          gap: 40,
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <A />
        <B />
      </div>
    </div>
  );
}

export default App;
