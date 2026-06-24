import B1 from "./B1";
import B2 from "./B2";

const B = () => {
  return (
    <div className="container border">
      <h2>B Component</h2>
      <div className="inline">
        <B1 />
        <B2 />
      </div>
    </div>
  );
};

export default B;
