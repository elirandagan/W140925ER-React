import { useUser } from "../../context/user/UserContext";

const B2 = () => {
  const {name} = useUser();
  return (
   <div className="border">
      <h3>B2 Component</h3>
       <p>The Name is: {name}</p>
    </div>
  );
};

export default B2;
