import { CardComponent, type CardProps } from "./Card";

function ProductsList() {
  const products: Array<CardProps> = [
    {
      name: "Laptop",
      price: 2500,
      description: "A powerful 2025 model laptop",
    },
    {
      name: "Keyboard",
      price: 239,
      description: "Mechanical keyboard",
    },
    {
      name: "Headphones",
      price: 750,
      description: "wireless-Noise-canceling headphones",
    },
  ];

  const containerStyle: Partial<React.CSSProperties> = {
    display: "flex",
    flexDirection: "column",
    gap: 16,
  };

  return (
    <div style={containerStyle}>
      {products.map((prod, i) => (
        <CardComponent key={`card_${i}`} {...prod} />
      ))}
    </div>
  );
}

export default ProductsList;
