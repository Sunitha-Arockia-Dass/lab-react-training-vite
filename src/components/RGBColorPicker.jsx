import SingleColorPicker from "./SingleColorPicker";
import { useState } from "react";

function RGBColorPicker() {
  const [rValue, setRValue] = useState(0);
  const [gValue, setGValue] = useState(0);
  const [bValue, setBValue] = useState(0);

  const rgbValue = `rgb(${rValue},${gValue},${bValue})`;

  return (
    <div>
      <SingleColorPicker
        color="r"
        value={rValue}
        onChange={(e) => {
          const r = e.target.value;
          setRValue(r);
        }}
      />

      <SingleColorPicker
        color="g"
        value={gValue}
        onChange={(e) => {
          const g = e.target.value;
          setGValue(g);
        }}
      />

      <SingleColorPicker
        color="b"
        value={bValue}
        onChange={(e) => {
          const b = e.target.value;
          setBValue(b);
        }}
      />
      <div className="rgb-box">
        <div className="color-box ">
          <p
            className="small-box"
            style={{
              border: `1px solid black`,
              backgroundColor: `${rgbValue}`,
            }}
          ></p>
        </div>
        <h3>{rgbValue}</h3>
      </div>
    </div>
  );
}

export default RGBColorPicker;
