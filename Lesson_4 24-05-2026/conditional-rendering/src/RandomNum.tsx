interface RandomNumProps {
  min: number;
  max: number;
}

function RandomNum(props: RandomNumProps) {
  const { min, max } = props;

  // eslint-disable-next-line react-hooks/purity
  const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

  const isEven = randomNum % 2 == 0;

  const labels = {
    even: "is even",
    odd: "is odd",
  };

  const labelStyle: Partial<React.CSSProperties> = {
    color: isEven ? "green" : "gray",
    fontWeight: 600,
    fontSize: 24,
  };

  return (
    <div>
      <p style={labelStyle}>
        The Random Number Is: {randomNum}, {isEven ? labels.even : labels.odd}
      </p>
      <hr />
    </div>
  );
}

export default RandomNum;
