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
        <img
          className="visa-img"
          src="https://cdn.freebiesupply.com/logos/large/2x/visa-5-logo-png-transparent.png"
          alt="Visa Logo"
        />
      ) : (
        <img
          className="master-img"
          src="https://purepng.com/public/uploads/large/purepng.com-mastercard-logologobrand-logoiconslogos-251519938372dnf77.png"
          alt="Other Card Logo"
        />
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
