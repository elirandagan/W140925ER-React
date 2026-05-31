export interface CardProps {
  name: string;
  price: number;
  description: string;
}

export function CardComponent(props: CardProps) {
  const { description, name, price } = props;

  const cardStyle: Partial<React.CSSProperties> = {
    border: "2px solid #ccc",
    padding: "12px",
    borderRadius: "8px",
    boxShadow: " 0px 5px 10px 2px rgba(0, 0, 0, 0.3)",
  };

  const decorationStyle: Partial<React.CSSProperties> = {
    textDecoration: "underline",
    fontWeight: 600,
  };

  return (
    <div style={cardStyle}>
      <h2>{name}</h2>
      <p>
        <span style={decorationStyle}>Price:</span> {price}$
      </p>
      <p>
        <span style={decorationStyle}>Description:</span> {description}
      </p>
    </div>
  );
}
