import { AudioContext } from "./Context/AudioContext";
import Routing from "./Routing";
import { useState } from "react";
export default function App() {
  const [audioPlayer, setaudioPlayer] = useState(null);
  const [audioPauser, setaudioPause] = useState(null);
  const [currentSong,setCurrentSong] = useState()
  return (
    <AudioContext.Provider
      value={{
        audioPauser: audioPauser,
        setaudioPause: setaudioPause,
        audioPlayer: audioPlayer,
        setaudioPlayer: setaudioPlayer,
        currentSong,setCurrentSong
      }}
    >
      <Routing />
    </AudioContext.Provider>
  );
}
