import emptyPath from "../assets/images/star_empty.svg";
import fillPath from "../assets/images/star_fill.svg";

function DriverCard({ name, rating, img, car }) {
  const stars = Math.round(rating);

  return (
    <div className="driver-card">
      <div className="driver-card-content">
        <img src={img} alt="error" />
        <div className="driver-details">
          <h2>{name}</h2>
          <img src={stars >= 1 ? fillPath : emptyPath} />
          <img src={stars >= 2 ? fillPath : emptyPath} />
          <img src={stars >= 3 ? fillPath : emptyPath} />
          <img src={stars >= 4 ? fillPath : emptyPath} />
          <img src={stars >= 5 ? fillPath : emptyPath} />
          <p>
            {car.model}-{car.licensePlate}
          </p>
        </div>
      </div>
    </div>
  );
}

export default DriverCard;
