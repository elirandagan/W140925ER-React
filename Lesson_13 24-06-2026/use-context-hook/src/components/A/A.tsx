import { useUser } from "../../context/user/UserContext";
import A1 from "./A1";
import A2 from "./A2";

const A = () => {
  const { name } = useUser();
  return (
    <div className="container border">
      <h2>A Component</h2>
      <p>The Name is: {name}</p>
      <div className="inline">
        <A1 />
        <A2 />
      </div>
    </div>
  );
};

export default A;
