import React from 'react';
import { useState, useEffect } from 'react';
import './index.css';
import Header from './component/Header';
import Game from './component/Game';
import AboveGame from './component/AboveGame';
import useLocalStorage from './hook/useLocalStorage';

export default function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useLocalStorage('bestScore', 0);

  useEffect(() => {
    if (score > bestScore) {
      setBestScore(score);
    }
  });

  return (
    <div className="container">
      <Header score={score} bestScore={bestScore} />
      <AboveGame />
      <Game setScore={setScore} />
    </div>
  );
}
