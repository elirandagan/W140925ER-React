import ChildComponent from "./ChildComponent";

function ParentComponent() {
  return (
    <>
      <div id="parent">Hello from Parent</div>
      <ChildComponent name="Israel" age={20} />
      <ChildComponent name="Eden" age={50} />
      <ChildComponent name="Boris" age={60} />
    </>
  );
}

export default ParentComponent;
