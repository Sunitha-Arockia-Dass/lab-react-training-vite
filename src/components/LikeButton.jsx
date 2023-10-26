import { useState } from "react";

function LikeButton() {
  const colors = ["purple", "blue", "green", "yellow", "orange", "red"];
  const [color1, setColor1] = useState(colors[0]);
  const [color2, setColor2] = useState(colors[0]);
  let [likesCount1, setLikesCount1] = useState(0);
  let [likesCount2, setLikesCount2] = useState(0);
  function likesCounter1() {
    let index = Math.floor(Math.random() * colors.length);
    likesCount1++;
    console.log(likesCount1);
    setLikesCount1(likesCount1);
    setColor1(colors[index]);
  }
  function likesCounter2() {
    let index = Math.floor(Math.random() * colors.length);
    likesCount2++;
    console.log(likesCount2);
    setLikesCount2(likesCount2);
    setColor2(colors[index]);
  }
  return (
    <div>
      <button className="btn" style={{ backgroundColor: color1 }} onClick={likesCounter1}>
        {likesCount1} Likes
      </button>
      <button className="btn" style={{ backgroundColor: color2 }} onClick={likesCounter2}>
        {likesCount2} Likes
      </button>
    </div>
  );
}

export default LikeButton;
