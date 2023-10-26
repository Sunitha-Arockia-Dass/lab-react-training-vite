import emptyPath from "../assets/images/star_empty.svg";
import fillPath from "../assets/images/star_fill.svg";

function Rating(props) {
  const stars = Math.round(props.children);
  return (
    <div className="rating-image">
      <img src={stars >= 1 ? fillPath : emptyPath} />
      <img src={stars >= 2 ? fillPath : emptyPath} />
      <img src={stars >= 3 ? fillPath : emptyPath} />
      <img src={stars >= 4 ? fillPath : emptyPath} />
      <img src={stars >= 5 ? fillPath : emptyPath} />
    </div>
  );
}
export default Rating;
