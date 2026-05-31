import "./App.css";
import ProductsList from "./products-list/ProductsList";
// import LoopMap from "./LoopMap";
// import LoopMapComponents from "./LoopMapComponents";
// import RandomNum from "./RandomNum";
// import ConditionalStyle from "./ConditionalStyle";

function App() {
  return (
    <section id="center">
      <h1>App </h1>
      {/* <ConditionalStyle age={12} /> */}
      {/* <RandomNum min={1} max={10} />
      <RandomNum min={10} max={100} />
      <RandomNum min={2} max={6} />
      <RandomNum min={25} max={50} /> */}
      {/* <LoopMap />
      <LoopMapComponents /> */}
      <ProductsList />
    </section>
  );
}

export default App;
