import style from "./StyleComponent.module.css";

function StyleComponent() {
  const paragraphStyle: React.CSSProperties = {
    color: "blue",
    fontWeight: "bold",
    fontSize: "24px",
  };

  return (
    <>
      {/* Inline Css */}
      <h4 style={{ color: "red", fontWeight: "400" }}> Im Header</h4>
      {/* Implicit Css */}
      <p style={paragraphStyle}> Im Paragraph</p>
      {/* Explicit Css */}
      <span className={style.text}> Im Span</span>
    </>
  );
}

export default StyleComponent;
