function MyComponent() {
  const firstName: string = "Israel";
  const lastName: string = "Israeli";

  const fullName: string = `${firstName} ${lastName}`;

  const age: number = 20;
  const isAdult: boolean = age >= 18;

  return (
    <div>
      <h2>Hello, {fullName}</h2>
      <p>Your age is: {age}</p>
      {isAdult && <p>You Are Adult</p>}
    </div>
  );
}

export default MyComponent;
