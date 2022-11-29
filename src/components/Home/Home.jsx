import React, { useState } from 'react';
import '../Home/home.css';

export default function Home(props) {
  const [name, setName] = useState('');

  return (
    <div className="home-div">
      <h1 id="first-row">Ready For War</h1>
      <input id="input" onChange={(e) => { setName(e.target.value); }} type="text" placeholder="Enter your name" />
      <br />
      <br />
      <button id="btn" onClick={() => { props.valid(name); }}> start </button>
    </div>
  );
}
