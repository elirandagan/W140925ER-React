import "./App.css";
import A from "./components/A/A";
import B from "./components/B/B";
// import UserProvider from "./context/user/UserProvider";
import { useUser } from "./context/user/UserContext";

function App() {
  const { name, age } = useUser();

  return (
    <div className="container border" style={{ margin: 20 }}>
      <h1>App Component</h1>
      <p>The Name is: {name}</p>
      <p>User age is: {age}</p>
      {/* <UserProvider> */}
      <div className="inline">
        {/* <UserProvider> */}
        <A />
        {/* </UserProvider> */}
        <B />
      </div>
      {/* </UserProvider> */}
    </div>
  );
}

export default App;
