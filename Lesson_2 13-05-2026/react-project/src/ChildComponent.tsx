interface ChildComponentProps {
  name: string;
  age: number;
}

const ChildComponent = (props: ChildComponentProps) => {
  const { name, age } = props;

  return (
    <div>
      Hello, My Name is:{name}.
       My age is: {age}.
       Im Child Component
    </div>
  );
};

export default ChildComponent;
