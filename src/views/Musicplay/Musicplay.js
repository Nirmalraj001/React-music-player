import React, {
  Component,
  Fragment,
  useState,
  useRef,
  useEffect,
  createRef,
} from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  Container,
  Input,
  Dropdown,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledCollapse,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import sign11Img from "../../assets/images/sing11.png";
// import playImg from "../../assets/images/playimg.png";
import bbnnImg from "../../assets/images/bbnn.png";
import playImg from "../../assets/images/play.png";
import pauseImg from "../../assets/images/pause.png";
import prevImg from "../../assets/images/previous.png";
import nextImg from "../../assets/images/next.png";
import Repeat from "../../assets/images/Repeat.png";
import Shuffle from "../../assets/images/Shuffle.png";
import favImg from "../../assets/images/heart.png";
import Control from "../../control";
import { useNavigate } from "react-router";

import { playAudio } from "../../util";

const Musicplay = ({
  isPlaying,
  setIsPlaying,
  audioRef,
  songInfo,
  setSongInfo,
  currentSong,
  songs,
  setCurrentSong,
  setSongs,
}) => {
  const navigate = useNavigate();

  const activeLibraryHandler = (nextPrev) => {
    const newSongs = songs.map((song) => {
      if (song.id === nextPrev.id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });

    setSongs(newSongs);
  };

  const trackAnim = {
    transform: `translateX(${songInfo.animationPercentage}%)`,
  };
  //Event Handlers
  function getTime(time) {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  }
  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };

  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };
  const skipTrackHandler = async (direction) => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);

    //Forward BAck
    if (direction === "skip-forward") {
      await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
      activeLibraryHandler(songs[(currentIndex + 1) % songs.length]);
    }
    if (direction === "skip-back") {
      if ((currentIndex - 1) % songs.length === -1) {
        await setCurrentSong(songs[songs.length - 1]);
        activeLibraryHandler(songs[songs.length - 1]);
        playAudio(isPlaying, audioRef);
        return;
      }
      await setCurrentSong(songs[(currentIndex - 1) % songs.length]);
      activeLibraryHandler(songs[(currentIndex - 1) % songs.length]);
    }
    if (isPlaying) audioRef.current.play();
  };

  const str =
    "invert(100%) sepia(99%) saturate(2%) hue-rotate(286deg) brightness(105%) contrast(101%)";
  const arr = str.split(/[()]/);

  const str1 =
    "invert(100%) sepia(99%) saturate(2%) hue-rotate(286deg) brightness(105%) contrast(101%)";
  const arr1 = str1.split(/[()]/);

  const style = {
    headerIcon: {
      width: "15px",
      height: "20px",
      WebkitFilter: `invert(${arr[1]}) sepia(${arr[3]}) saturate(${arr[5]}) hue-rotate(${arr[7]}) brightness(${arr[9]}) contrast(${arr[11]})`,
    },

    icon: {
      width: "25px",
      height: "25px",
      WebkitFilter:
        "invert(100%) sepia(99%) saturate(2%) hue-rotate(286deg) brightness(105%) contrast(101%)",
    },
  };

  return (
    <Fragment>
      <div className="cnt-load-div">
        <div className="new-mob">
          <div id="note8" className="silver">
            <div className="marvel-device note8">
              <div className="inner"></div>
              <div className="overflow">
                <div className="shadow"></div>
              </div>
              <div className="speaker"></div>
              <div className="sensors"></div>
              <div className="more-sensors"></div>
              <div className="sleep"></div>
              <div className="volume"></div>
              <div className="camera"></div>
              <div className="screen home">
                <div className="full-new-mob">
                  <div className="main-screen">
                    <div className="main-header liked-header">
                      <div className="flex-d">
                        <button
                          className="arrow-svg"
                          onClick={() => navigate("/home")}
                        >
                          <svg
                            width="8"
                            height="14"
                            viewBox="0 0 8 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7 1L1 7L7 13"
                              stroke="white"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </button>
                        <h3 style={style.header}>Let Me Love You...</h3>
                        <div className="profile ">
                          <img src={sign11Img} alt="" />
                        </div>
                      </div>
                      <form className="search-form">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Search music..."
                          />
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.33333 14.1667C11.555 14.1667 14.1667 11.555 14.1667 8.33333C14.1667 5.11167 11.555 2.5 8.33333 2.5C5.11167 2.5 2.5 5.11167 2.5 8.33333C2.5 11.555 5.11167 14.1667 8.33333 14.1667Z"
                              stroke="#9698B4"
                              stroke-width="1.25"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M17.5 17.5L12.5 12.5"
                              stroke="#9698B4"
                              stroke-width="1.25"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>
                      </form>
                    </div>
                    <main className="like-main brain-wash">
                      <div className="background">
                        {/* <img src={playImg} alt="" style={{width:"50px",height:"50px"}} /> */}
                      </div>
                      <div className="curent-song">
                        <img src={currentSong.cover} alt="" />
                      </div>
                      <div className="song-tails">
                        <h5 style={style.title}>{currentSong.name}</h5>
                        <p style={style.subtitle}>{currentSong.artist}</p>
                      </div>
                      <div className="btn-details">
                        <button>
                          <img src={Shuffle} alt="" style={style.icon} />
                        </button>
                        <button>
                          <img src={Repeat} alt="" style={style.icon} />
                        </button>
                        <button>
                          <a>
                            <img src={favImg} alt="" style={style.icon} />
                          </a>
                        </button>
                      </div>

                      <div className="progress-m">
                        <div className="time">
                          <p style={style.timeline}>
                            {getTime(songInfo.currentTime)}
                          </p>
                          <p style={style.timeline}>
                            {songInfo.duration
                              ? getTime(songInfo.duration)
                              : "0:00"}
                          </p>
                        </div>

                        <div
                          style={{
                            background: `linear-gradient(to right, ${currentSong.color[0]},${currentSong.color[1]})`,
                          }}
                          className="track"
                        >
                          <input
                            value={songInfo.currentTime}
                            type="range"
                            max={songInfo.duration || 0}
                            min={0}
                            onChange={dragHandler}
                          />
                          <div
                            style={trackAnim}
                            className="animate-track"
                          ></div>
                        </div>

                        <div className="btn-dg">
                          <button onClick={() => skipTrackHandler("skip-back")}>
                            <img src={prevImg} alt="" style={style.icon} />
                          </button>

                          <button onClick={playSongHandler}>
                            {isPlaying ? (
                              <img src={pauseImg} alt="" style={style.icon} />
                            ) : (
                              <img src={playImg} alt="" style={style.icon} />
                            )}
                          </button>

                          <button
                            onClick={() => skipTrackHandler("skip-forward")}
                          >
                            <img src={nextImg} alt="" style={style.icon} />
                          </button>
                        </div>
                      </div>
                    </main>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Musicplay;
