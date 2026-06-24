import { useUser } from "../../context/user/UserContext";

const B1 = () => {
  const { age } = useUser();
  return (
    <div className="border">
      <h3>B1 Component</h3>
       <p>User age is: {age}</p>
    </div>
  );
};

export default B1;
