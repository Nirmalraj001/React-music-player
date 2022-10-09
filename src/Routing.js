import React, {
  useState,
  useCallback,
  useContext,
  useRef,
  useEffect,
} from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "../src/style.scss";
import Splash from "./views/Splash/Splash";
import Login from "./views/Login/Login";
import Register from "./views/Register/Register";
import Forgotpassword from "./views/Forgotpassword/Forgotpassword";
import Resetpassword from "./views/Resetpassword/Resetpassword";
import Verification from "./views/Verification/Verification";
import Settings from "./views/Settings/Settings";
import Artist from "./views/Artist/Artist";
import Editprofile from "./views/Editprofile/Editprofile";
import Language from "./views/Language/Language";
import Home from "./views/Home/Home";
import Category from "./views/Category/Category";
import Search from "./views/Search/Search";
import Search1 from "./views/Search1/Search1";
import Library from "./views/Library/Library";
import Likedsongs from "./views/Likedsongs/Likedsongs";
import Musicplay from "./views/Musicplay/Musicplay";
import Myplaylist from "./views/Myplaylist/Myplaylist";
import Playlist from "./views/Playlist/Playlist";
import Myprofile from "./views/Myprofile/Myprofile";
import Addsongs from "./views/Addsongs/Addsongs";

import MusicPlayer from "./musicPlayer";
import chillHop from "./data";
import { playAudio } from "./util";

const Routing = (props) => {
  //Ref
  const audioRef = useRef(null);

  const [songs, setSongs] = useState(chillHop());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
    volume: 0,
  });
  const [libraryStatus, setLibraryStatus] = useState(false);

  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;

    const roundedCurrent = Math.round(current);
    const roundedDuration = Math.round(duration);
    const percentage = Math.round((roundedCurrent / roundedDuration) * 100);
    setSongInfo({
      ...songInfo,
      currentTime: current,
      duration: duration,
      animationPercentage: percentage,
      volume: e.target.volume,
    });
  };
  const songEndHandler = async () => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    playAudio(isPlaying, audioRef);
    return;
  };

  return (
    <React.Fragment>
      <audio
        onLoadedMetadata={timeUpdateHandler}
        onTimeUpdate={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
        onEnded={songEndHandler}
        autoplay="autoplay"
      ></audio>
      <Router>
        <Routes navigate={props.navigate}>
          <Route
            path="/home"
            element={
              <Home
                audioRef={audioRef}
                songs={songs}
                setSongs={setSongs}
                currentSong={currentSong}
                setCurrentSong={setCurrentSong}
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
                songInfo={songInfo}
                setSongInfo={setSongInfo}
              />
            }
          />
          <Route
            path="/play"
            element={
              <Musicplay
                audioRef={audioRef}
                songs={songs}
                setSongs={setSongs}
                currentSong={currentSong}
                setCurrentSong={setCurrentSong}
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
                songInfo={songInfo}
                setSongInfo={setSongInfo}
              />
            }
          />
          <Route path="/" element={<Splash />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgotpassword" element={<Forgotpassword />} />
          <Route path="/resetpassword" element={<Resetpassword />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/artist" element={<Artist />} />
          <Route path="/editprofile" element={<Editprofile />} />
          <Route path="/language" element={<Language />} />
          <Route path="/category" element={<Category />} />
          <Route path="/search" element={<Search />} />
          <Route path="/search1" element={<Search1 />} />
          <Route path="/library" element={<Library />} />
          <Route path="/likedsongs" element={<Likedsongs />} />
          <Route path="/myplaylist" element={<Myplaylist />} />
          <Route path="/playlist" element={<Playlist />} />
          <Route path="/myprofile" element={<Myprofile />} />
          <Route path="/addsongs" element={<Addsongs />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
};
export default Routing;
