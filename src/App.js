import { useEffect, useState } from 'react';
import './App.css';

const animationDuration = 2650;
const targetCount = 4;

function App() {
  const audio = new Audio("./wololo-sound.mp3");
  const remix = new Audio("./wololo-remix.mp3");
  const [isPlaying, setIsPlaying] = useState(false);
  const [showRed, setShowRed] = useState(false);
  const [clickCounter, setClickCounter] = useState(0);

  const playSound = () => {
    if (isPlaying || clickCounter >= targetCount) return;
    setClickCounter((prev) => prev + 1);
    audio.play();
  };

  useEffect(() => {
    if (clickCounter === targetCount) {
      remix.play();
    }
  }, [clickCounter]);

  return (
    <div className={`App ${clickCounter >= targetCount ? 'zoom-out' : ''}`}>
      <div className="bg-img">
        <img src="./aoe1-bg.jpeg" alt="" />
      </div>
      {clickCounter < targetCount ? (
        <div className="gif-container">
          {showRed ? (
            <div
              onClick={() => {
                playSound();
                setIsPlaying(true);
                setTimeout(() => {
                  setIsPlaying(false);
                  setShowRed(false);
                }, animationDuration);
              }}
            >
              {isPlaying ? (
                <img src="./wololo-red-to-blue.gif" className="App-logo" alt="logo" />
              ) : (
                <img src="./red-still.gif" className="App-logo" alt="logo" />
              )}
            </div>
          ) : (
            <div onClick={() => {
              playSound();
              setIsPlaying(true);
              setTimeout(() => {
                setIsPlaying(false);
                setShowRed(true);
              }, animationDuration - 100);
            }}
            >
              {isPlaying ? (
                <img src="./wololo-blue-to-red.gif" className="App-logo" alt="logo" />
              ) : (
                <img src="./blue-still.gif" className="App-logo" alt="logo" />
              )}
            </div>
          )}
        </div>
      ) : (
        <div className="dance-gif-container">
          <img src="./wololo.gif" className="App-logo" alt="logo" />
        </div>
      )}
    </div>
  );
}

export default App;
