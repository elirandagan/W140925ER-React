interface TitleProps {
  title: string;
}

function Title(props: TitleProps) {
  const { title } = props;
  return <h1>{title}</h1>;
}

export default Title;
