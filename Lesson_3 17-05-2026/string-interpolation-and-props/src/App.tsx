// import MyComponent from "./MyComponent";
// import Product from "./product/Product";
// import Parent from "./props-with-children/Parent";

import Lorem from "./props-exercise/Lorem";
import Title from "./props-exercise/Title";

function App() {
  return (
    <div style={{ width: "100%" }}>
      {/* <h1> Hello From App Component!</h1>
      <MyComponent />

      <Product name="Iphone" price={3500} quantity={10} />
      <Product name="Mac" price={5000} quantity={20} />
      <Product name="Samsung Tablet" price={1500} quantity={35} />
      <hr />
      <hr />
      <hr />
      <Parent /> */}

      <Title title="Section 1" />
      <Lorem color="crimson" />

      <Title title="Section 2" />
      <Lorem color="green" />
    </div>
  );
}

export default App;
