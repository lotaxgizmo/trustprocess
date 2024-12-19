import { useEffect, useState, useRef } from 'react';

import Home from './components/Home'


import bgmusic from './assets/audio.mp3';
import enter from './assets/enter.png';
import eyeglass from './assets/sticker.gif'

function App() {

  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const handlePlayMusic = () => {
    setIsPlaying(true);
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const handleToggleMute = () => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.muted = false;
      } else {
        audioRef.current.muted = true;
      }
      setIsMuted(!isMuted);
    }
  };



  return (
    <div className="App">
      <Home />








      {!isPlaying && (
        <div className="bg-black/60 backdrop-blur-xl fixed top-0 w-full h-screen flex flex-col justify-center items-center z-[100] ftop-10">
          {/* <img src={logo} alt="" className='w-60' /> */}
          <img
            src={eyeglass}
            alt="Enter"
            className="w-96 p-3 z-[100] cursor-pointer rounded-full"
            onClick={handlePlayMusic}
          />
          <p className="text-white text-2xl">Click to Enter</p>

        </div>
      )}
      <audio ref={audioRef} src={bgmusic} loop />
    </div>
  );
}

export default App;