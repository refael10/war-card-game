import React,{useState} from 'react'
import Card from '../Card/Card.jsx'
import '../Game/game.css';


export default function GamePage(props) {

  const [index,setIndex]=useState(0);
  const [playerPoint,setPlayerPoint]=useState(0);
  const [computerPoint,setComputerPoint]=useState(0);
  

  
  const incIndex =()=>{
    if(props.computerDeck[index] > props.playerDeck[index]){
      setComputerPoint(computerPoint +1)
    }else if(props.computerDeck[index] < props.playerDeck[index]){
      setPlayerPoint(playerPoint +1)
    }
    setIndex(index +1);
    if(index === 25) {
      if(playerPoint > computerPoint){
        props.setPlayer({...props.player, win: props.player.win +1});
        props.finishGame();
      }else if(playerPoint <= computerPoint){
        props.setPlayer({...props.player, lose: props.player.lose +1});
        props.finishGame();
      }
    }
  }

  const sendCardToComputer =()=>{
    return props.computerDeck[index]
  }
  const sendCardToPlayer =()=>{
    return props.playerDeck[index]
  }


  return (
    <div className='div'>
      <div className='a'>
      <div className='a1'>
      <h1 id='computer'>Computer</h1>
      <Card cardValue={sendCardToComputer}/>
      <Card cardValue={sendCardToPlayer}/>
      </div>
      <div className='a2'>
      <h1 id='Score'>Score:</h1><br />
      <h1 id='C-point'>Com - {computerPoint}</h1><br />
      <h1 id='P-point'>{props.playerName} - {playerPoint}</h1><br /><br /><br /><br />
      <h1 id='index'>{index}</h1>
      </div>
      </div>
      <div className='div2'>
      <button id='next' onClick={incIndex}>Next</button>
      <h1 id='player'>{props.playerName}</h1>
      </div>
</div>
  )
}
