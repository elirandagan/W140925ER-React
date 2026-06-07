import "./App.css";
// import Now from "./components/Now";
// import UseEffectComponent from "./components/UseEffectComponent";
import UseEffectWithDependencies from "./components/UseEffectWithDependencies";

function App() {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 8,
      }}
    >
      {/* <UseEffectComponent />
      <hr />
      <Now />
      <hr /> */}
      <UseEffectWithDependencies />
    </div>
  );
}

export default App;
