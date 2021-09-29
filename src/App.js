import { useState } from 'react';
import './App.css';

const animationDuration = 2650;

function App() {
  const audio = new Audio("/wololo-sound.mp3")
  const [isPlaying, setIsPlaying] = useState(false);
  const [showRed, setShowRed] = useState(false);

  const playSound = () => {
    if (isPlaying) return;
    audio.play();
  };

  return (
    <div className="App">
      <div className="bg-img">
        <img src="/aoe1-bg.jpeg" alt="" />
      </div>
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
              <img src="/wololo-red-to-blue.gif" className="App-logo" alt="logo" />
            ) : (
              <img src="/red-still.gif" className="App-logo" alt="logo" />
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
              <img src="/wololo-blue-to-red.gif" className="App-logo" alt="logo" />
            ) : (
              <img src="/blue-still.gif" className="App-logo" alt="logo" />
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
