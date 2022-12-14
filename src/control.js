import { useState, useEffect,useContext } from "react";
import track from "./db/music";
import {AudioContext} from "./Context/AudioContext"

function Control() {

  const { currentSong } = useContext(AudioContext);

  const [duration, setDuration] = useState();
  const [curTime, setCurTime] = useState();
  const [playing, setPlaying] = useState(false);
  const [clickedTime, setClickedTime] = useState();

  const newTrack = track.map(item => item.audioSrc)

  console.log(currentSong,"currentSong")

  

  useEffect(() => {
    const audio = document.getElementById("audio");

    console.log(audio,"audio1")

    if (!audio.src || audio.src !== currentSong) audio.src = currentSong; 
    // state setters wrappers
    const setAudioData = () => {
      setDuration(audio.duration);
      setCurTime(audio.currentTime);
    }

    const setAudioTime = () => setCurTime(audio.currentTime);

    // DOM listeners: update React state on DOM events
    audio.addEventListener("loadeddata", setAudioData);

    audio.addEventListener("timeupdate", setAudioTime);

    // React state listeners: update DOM on React state changes
    playing ? audio.play() : audio.pause();

    if (clickedTime && clickedTime !== curTime) {
      audio.currentTime = clickedTime;
      setClickedTime(null);
    } 

    // effect cleanup
    return () => {
      audio.removeEventListener("loadeddata", setAudioData);
      audio.removeEventListener("timeupdate", setAudioTime);
    }
  });

  return {
    curTime,
    duration,
    playing,
    setPlaying,
    setClickedTime
  }
}

export default Control;