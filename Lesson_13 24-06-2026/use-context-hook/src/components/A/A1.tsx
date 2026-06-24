import { useUser } from "../../context/user/UserContext";

const A1 = () => {
  const { age, setAge } = useUser();

  return (
    <div className="border">
      <h3>A1 Component</h3>
      <div>
        <p>To Change the age {age}:</p>
        <button onClick={() => setAge(age + 1)}>+</button>
        <button onClick={() => setAge(age - 1)}>-</button>
      </div>
    </div>
  );
};

export default A1;
