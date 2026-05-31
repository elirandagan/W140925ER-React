// import { type PropsWithChildren } from "react";

// interface ChildProps extends PropsWithChildren {
//   person: { name: string; age: number };
//   city: string;
// }

interface ChildProps {
  person: { name: string; age: number };
  city: string;
  children?: React.ReactNode;
}

function Child(props: ChildProps) {
  const { city, person, children } = props;
  // const { age, name } = person;
  return (
    <div>
      <h5>Hello From Child</h5>
      <div style={{ color: "crimson", fontWeight: 600 }}>{children}</div>
      <p>
        The Person name is {person.name}, and he is {person.age} years old.
      </p>
      <p>He lives in: {city} city</p>
    </div>
  );
}

export default Child;
