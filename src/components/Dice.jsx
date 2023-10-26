import emptyDice from "../assets/images/dice-empty.png";
import dice1 from "../assets/images/dice1.png";
import dice2 from "../assets/images/dice2.png";
import dice3 from "../assets/images/dice3.png";
import dice4 from "../assets/images/dice4.png";
import dice5 from "../assets/images/dice5.png";
import dice6 from "../assets/images/dice6.png";
import { useState } from "react";

const diceArray = [emptyDice, dice1, dice2, dice3, dice4, dice5, dice6];
function Dice() {
  const randomIndex = Math.floor(Math.random() * diceArray.length);

  const [dice, setDice] = useState(diceArray[randomIndex]);

  function changeDice() {
    setDice(diceArray[0]);
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * diceArray.length);
      setDice(diceArray[randomIndex]);
    }, 1000);
  }

  return (
    <div className="dice">
      <button onClick={changeDice} className="dice-btn">
        <img src={dice} alt="dice" />
      </button>
    </div>
  );
}

export default Dice;
