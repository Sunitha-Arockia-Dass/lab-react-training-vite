import { useState } from "react";

function Carousel({ images }) {
  const length = images.length;
  const [image, setImage] = useState(images[0]);
  const [index, setIndex] = useState(0);

  function imageChange(dirn) {
    if (dirn === "left") {
      console.log(index);
      setIndex((prevIndex) => (prevIndex - 1 + length) % length);
      setImage(images[index]);
    } else {
      setIndex((prevIndex) => (prevIndex + 1) % length);
      setImage(images[index]);
    }
  }

  return (
    <div>
      <button
        className="image-btn"
        onClick={() => {
          imageChange("left");
        }}
      >
        Left
      </button>
      <img className="carousel-img" src={image} alt="error" />
      <button
        className="image-btn"
        onClick={() => {
          imageChange("right");
        }}
      >
        Right
      </button>
    </div>
  );
}

export default Carousel;
