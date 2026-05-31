interface LoremProps {
  color: string;
}

function Lorem(props: LoremProps) {
  const { color } = props;
  return (
    <section style={{ color: color }}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </section>
  );
}

export default Lorem;
