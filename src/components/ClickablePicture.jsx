import { useState } from "react";

function ClickablePicture({ img, imgClicked }) {
  const [imageClicked, setImageClicked] = useState(false);
  function clickable() {
    if (imageClicked) {
      setImageClicked(false);
    } else {
      setImageClicked(true);
    }
  }
  return (
    <div className="image">
      <button onClick={clickable}>
        {imageClicked ? (
          <span>
            <img src={img} alt="error" />
            <img className="glass" src={imgClicked} alt="error" />
          </span>
        ) : (
          <img src={img} alt="error" />
        )}
      </button>
    </div>
  );
}

export default ClickablePicture;
