function BoxColor({ r, g, b }) {
  const componentToHex = (c) => {
    const hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  };

  const rgbToHex = (r, g, b) => {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  };
  const hexa = rgbToHex(r, g, b);
  console.log(rgbToHex(r, g, b));

  return (
    <div className="box-color" style={{ backgroundColor: hexa }}>
      <h1>
        RGB({r},{g},{b})
      </h1>
      <h2>{hexa}</h2>
    </div>
  );
}

export default BoxColor;
