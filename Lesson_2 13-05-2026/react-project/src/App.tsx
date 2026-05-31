import MyComponent from "./MyComponent";
import ParentComponent from "./ParentComponent";
import StyleComponent from "./StyleComponent";
import TestComponent from "./TestComponent";

import style from "./StyleComponent.module.css";


function App() {
  return (
    <section id="center">
      <h1 className={style.text}>Hello from App</h1>
      <MyComponent />
      <TestComponent />
      <hr />
      <ParentComponent />
      <hr />
      <StyleComponent />
    </section>
  );
}

export default App;
