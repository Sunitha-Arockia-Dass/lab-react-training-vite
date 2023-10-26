import Visa from "../assets/images/visa.png";
import MasterCard from "../assets/images/master-card.svg";

function CreditCard({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) {
  const numberStr = number.toString();
  const lastFourDigits = numberStr.slice(-4);
  const maskedNumber = `************${lastFourDigits}`;
  const cardStyle = {
    backgroundColor: bgColor,
    color: color,
  };
  return (
    <div className="credit-card" style={cardStyle}>
      {type === "Visa" ? (
        <img className="visa-img" src={Visa} alt="Visa Logo" />
      ) : (
        <img className="master-img" src={MasterCard} alt="Other Card Logo" />
      )}
      <br></br>
      <h1 className="masked">{maskedNumber}</h1>
      <div className="row">
        <div className="col-4">
          <span>
            Expires {expirationMonth}/{expirationYear}
          </span>
        </div>
        <div className="col-4 bank">
          <span>{bank}</span>
        </div>
      </div>
      <div className="owner">{owner}</div>
    </div>
  );
}

export default CreditCard;
