import Child from "./Child";
import MyComponent from "../MyComponent";

function Parent() {
  return (
    <div>
      <h3>Hello From Parent</h3>
      <Child
        children={<MyComponent />}
        city="Ashdod"
        person={{ age: 20, name: "Israel" }}
      />

      <Child city="Lod" person={{ age: 40, name: "Noam" }}>
        <MyComponent />
      </Child>

      {/* <Child city="Bat-Yam" person={{ age: 25, name: "Eti" }} /> */}
    </div>
  );
}

export default Parent;
