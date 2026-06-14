import { useState, useEffect } from "react";
import axios from "axios";

function NameFetcher() {
  const [userName, setUserName] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchName = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users/2",
        );

        setUserName(response.data?.name);
      } catch (_error) {
        console.error(_error);
        setError("Failed to load user");
      } finally {
        // ALWAYS WILL DO THIS CODE!
        setLoading(false);
      }
    };

    fetchName();
  }, []);

  if (loading) return <p> Loading User Data...</p>;
  if (error) return <p style={{ color: "red" }}> {error}</p>;
  if (!userName) return <p style={{ color: "yellow" }}> No User data found</p>;

  return (
    <div>
      <h1> Axios Fetch </h1>
      <p> User Name: {userName}</p>
    </div>
  );
}

export default NameFetcher;
