interface ProductProps {
  name: string;
  price: number;
  quantity: number;
}

function Product(props: ProductProps) {
  const { name, price, quantity } = props;
  return (
    <div>
      <h3 style={{ fontSize: 24, color: "crimson" }}>
        Product Name is: {name}
      </h3>
      <p style={{ fontSize: 20 }}>
        The price is:{" "}
        <span style={{ fontWeight: 600, textDecoration: "underline" }}>
          {price}
        </span>
      </p>
      <p style={{ fontSize: 18, color: "darkgray" }}>units left: {quantity}.</p>
    </div>
  );
}

export default Product;
