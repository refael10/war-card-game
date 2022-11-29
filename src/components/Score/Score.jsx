import React from 'react'
import '../Score/score.css'
export default function Score(props) {
  const again =()=>{
    props.setPages(1)
    props.createDeck()
  }
  const finish=()=>{
    props.setPages(0);
  }
  return (
    <div className='div5'>
      <button id='finish' onClick={finish}>x</button><br /><br /><br />
      <p id='first'>lose/win</p>
      <p id='score'>{props.lose}-{props.win}</p><br /><br />
      <button onClick={again} id='btn1'>again?</button>
      </div>
  )
}
