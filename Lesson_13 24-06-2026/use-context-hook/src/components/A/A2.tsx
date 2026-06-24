import { useUser } from "../../context/user/UserContext";

const A2 = () => {
  const { age } = useUser();
  return (
    <div className="border">
      <h3>A2 Component</h3>
      <p>User age is: {age}</p>
    </div>
  );
};

export default A2;
