import { useState } from "react";

interface User {
  firstName: string;
  lastName: string;
  id: string;
}

function UserProfile() {
  const [user, setUser] = useState<User>({
    firstName: "Israel",
    lastName: "Israeli",
    id: "123456",
  });

  function changeFirstName() {
    // Noa
    setUser({ ...user, firstName: "Noa" });
  }

  function changeLastName() {
    // Cohen
    setUser({ ...user, lastName: "Cohen" });
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 20,
        alignItems: "center",
      }}
    >
      <p>User First Name: {user.firstName}</p>
      <p>User last Name: {user.lastName}</p>
      <p>User ID: {user.id}</p>
      <div style={{ display: "flex", gap: 20 }}>
        <button
          style={{
            width: "fit-content",
            fontSize: 20,
            borderRadius: 12,
            padding: 8,
            background: "gray",
          }}
          onClick={changeFirstName}
        >
          Change First Name
        </button>
        <button
          style={{
            width: "fit-content",
            fontSize: 20,
            borderRadius: 12,
            padding: 8,
            background: "gray",
          }}
          onClick={changeLastName}
        >
          Change Last Name
        </button>
      </div>
    </div>
  );
}

export default UserProfile;
