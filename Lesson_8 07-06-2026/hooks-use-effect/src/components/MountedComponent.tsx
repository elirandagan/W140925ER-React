import { useEffect } from "react";

function MountedComponent() {
  useEffect(() => {
    // Mounting
    console.log("Mounting");

    // Unmounting
    return () => {
      console.log("Unmounting");
    };
  }, []);

  return (
    <div>
      <p>Hello User!</p>
    </div>
  );
}

export default MountedComponent;
