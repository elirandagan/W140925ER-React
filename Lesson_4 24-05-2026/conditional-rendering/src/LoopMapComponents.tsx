import RandomNum from "./RandomNum";

function LoopMapComponents() {
  const mixMaxList = [
    [5, 10],
    [20, 100],
    [50, 100],
    [150, 200],
  ];

  return (
    <div>
      <h2> Loop Map Componenets</h2>

      <ul>
        {mixMaxList.map((value, index) => (
          <RandomNum key={index} min={value[0]} max={value[1]} />
        ))}
      </ul>
    </div>
  );
}

export default LoopMapComponents;
