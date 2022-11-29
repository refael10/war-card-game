import { useState } from "react";
import Home from "./components/Home/Home.jsx";
import GamePage from "./components/Game/GamePage.jsx";
import Score from "./components/Score/Score.jsx";

function App() {
  const [player, setPlayer] = useState([]);
  const [computerDeck, setComputerDeck] = useState([]);
  const [playerDeck, setPlayerDeck] = useState([]);
  const [pages, setPages] = useState(0);



  const validName = (name) => {
    if (name.length > 1 || (name.charAt() >= 'a' && name.charAt() <= 'z') ||
      (name.charAt() >= 'A' && name.charAt() <= 'Z')) {
      setPlayer({ fullName: name, win: 0, lose: 0 });

      setPages(1);
      createDeck();
    } else {
      alert("error");
    }
  };

  const createDeck = () => {
    let temp = [];
    for (let i = 1, cardValue = 1; i < 53; i++) {
      temp.push(cardValue);
      if (i % 4 === 0) {
        cardValue++;
      }
    }
    let rnd;
    let compDeck = [];
    let playDeck = [];

    for (let i = 0; i < 26; i++) {
      rnd = Math.floor(Math.random() * temp.length);
      compDeck.push(temp[rnd]);
      temp.splice(rnd, 1)

      rnd = Math.floor(Math.random() * temp.length);
      playDeck.push(temp[rnd]);
      temp.splice(rnd, 1)//הערך הראשון הוא האינדקס הערך השני זה הכמות אותו אנחנו רוצים לחתוך מהמערך
    }
    setComputerDeck([...compDeck]);
    setPlayerDeck([...playDeck]);
  };

  const finishGame = () => {
    setPages(2);
  }



  const switchPages = () => {
    if (pages === 0) {
      return <Home playerName={player.fullName} win={player.win} lose={player.lose} valid={validName} />;
    } else if (pages === 1) {
      return <GamePage finishGame={finishGame} setPlayer={setPlayer}
        player={player} computerDeck={computerDeck} playerDeck={playerDeck}
        playerName={player.fullName} />;
    } else if (pages === 2) {
      return <Score finishGame={finishGame} win={player.win} lose={player.lose} setPages={setPages} createDeck={createDeck} />;
    }
  };

  return <div className="App">{switchPages()}</div>;
}

export default App;
