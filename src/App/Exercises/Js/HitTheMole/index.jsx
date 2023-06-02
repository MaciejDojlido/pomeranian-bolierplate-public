import { useState } from 'react';
import './styles.css';

import { Button } from './Button/Button';
import { Menu } from './Menu/Menu';
import { Playground } from './Playground/Playground';
import { GameView } from './GameView/GameView';

export function HitTheMole() {
  const [isGameStarted, setGameStarted] = useState(false);
  const [score, setScore] = useState(0);

  return (
    <div className="hit-the-mole">
      <h4>Hit The Mole</h4>
      <p>
        Gra polegająca na podążaniu za krecikiem i trafieniu na kwadrat, w
        którym się pojawił.
      </p>
      {isGameStarted ? (
        <GameView
          setGameStarted={setGameStarted}
          score={score}
          setScore={setScore}
        />
      ) : (
        //todo it will be nice to move this jsx to another component
        <>
          <Menu label="Czas gry">
            <Button isActive={true}>1 minuta</Button>
            <Button>2 minuty</Button>
            <Button>3 minuty</Button>
          </Menu>

          <Menu label="Liczba kretów">
            <Button>1 kret</Button>
            <Button>2 krety</Button>
            <Button isActive={true}>3 krety</Button>
          </Menu>

          <Menu label="Przyciski sterujące">
            <Button onClick={() => setGameStarted(true)}>Start</Button>
          </Menu>
        </>
      )}

      {/* todo we need to add summary view */}
      {/* <ResultView result={result} /> */}

      {isGameStarted && <Playground score={score} setScore={setScore} />}
    </div>
  );
}
