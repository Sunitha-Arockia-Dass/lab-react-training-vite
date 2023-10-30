function SingleColorPicker({ color, value, onChange }) {
  let theme;
  if (color === "r") {
    theme = "red";
  } else if (color === "g") {
    theme = "green";
  } else if (color === "b") {
    theme = "blue";
  }

  return (
    <div className="colorPicker">
      <div className="color-box">
        <p
          className="small-box"
          style={{ border: `1px solid black`, backgroundColor: `${theme}` }}
        ></p>
      </div>
      <label>{color.toUpperCase()}</label>
      <input onChange={onChange} type="number" min="0" max="255" />
    </div>
  );
}

export default SingleColorPicker;
