interface ConditionalStyleProps {
  age: number;
}

function ConditionalStyle(props: ConditionalStyleProps) {
  const { age } = props;

  const isAuthorized = age >= 18;

  const labels = {
    title: `Conditional Style Component`,
    authorized: `נהדר! מוזמנים לגלוש באתר ולרכוש אלכוהול`,
    unauthorized: `מצטערים, לא נוכל לתת לכם לגלוש באתר`,
    subtitle: "שמחים לראותך!",
  };

  const pStyle: Partial<React.CSSProperties> = {
    fontSize: 20,
    fontWeight: 600,
    color: isAuthorized ? "green" : "tomato",
  };

  return (
    <div>
      <h2>{labels.title}</h2>
      {isAuthorized && <h4 style={{ direction: "rtl" }}>{labels.subtitle}</h4>}
      <p style={pStyle}>
        {isAuthorized ? labels.authorized : labels.unauthorized}
      </p>
    </div>
  );
}

export default ConditionalStyle;
