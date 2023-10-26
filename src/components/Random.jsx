function Random({ min, max }) {
  const randomNumber = Math.floor(Math.random() * (max - min) + min);

  return (
    <div className="greetings">
      <p>
        Random Value Between {min} and {max}=>{randomNumber}
      </p>
    </div>
  );
}

export default Random;
