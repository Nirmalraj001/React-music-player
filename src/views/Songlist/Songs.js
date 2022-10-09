import React from "react";
import { playAudio } from "../../util";
import { useNavigate } from "react-router";


export const Songs = ({
  name,
  artist,
  cover,
  id,
  setCurrentSong,
  songs,
  audioRef,
  isPlaying,
  setSongs,
  active,
}) => {

  const navigate = useNavigate();

  const songSelectHandler = () => {
    const selectedSong = songs.filter((state) => state.id === id);
    setCurrentSong({ ...selectedSong[0] });
    //Set Active in library
    const newSongs = songs.map((song) => {
      if (song.id === id) {
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

    //Play audio
    playAudio(isPlaying, audioRef);
    navigate("/play");
  };

  return (
    <div className="song-list">
      <div
        className="song-details"
        //   key={i}
        onClick={songSelectHandler}
      >
        <div className="thumb">
          <img src={cover} alt="" />
        </div>
        <div className="ml-3">
          <h5>{name}</h5>
          <p>{artist}</p>
        </div>
      </div>
      <div className="dropdown ">
        <a
          className="btn  dropdown-toggle"
          role="button"
          id="dropdownMenuLink"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.0001 10.8333C10.4603 10.8333 10.8334 10.4602 10.8334 9.99999C10.8334 9.53975 10.4603 9.16666 10.0001 9.16666C9.53984 9.16666 9.16675 9.53975 9.16675 9.99999C9.16675 10.4602 9.53984 10.8333 10.0001 10.8333Z"
              stroke="#9698B4"
              stroke-width="1.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10.0001 16.6667C10.4603 16.6667 10.8334 16.2936 10.8334 15.8333C10.8334 15.3731 10.4603 15 10.0001 15C9.53984 15 9.16675 15.3731 9.16675 15.8333C9.16675 16.2936 9.53984 16.6667 10.0001 16.6667Z"
              stroke="#9698B4"
              stroke-width="1.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10.0001 5.00001C10.4603 5.00001 10.8334 4.62691 10.8334 4.16668C10.8334 3.70644 10.4603 3.33334 10.0001 3.33334C9.53984 3.33334 9.16675 3.70644 9.16675 4.16668C9.16675 4.62691 9.53984 5.00001 10.0001 5.00001Z"
              stroke="#9698B4"
              stroke-width="1.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </a>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <a className="dropdown-item" href="#">
            Play
          </a>
          <a className="dropdown-item" href="#">
            whislist
          </a>
          <a className="dropdown-item">Favourite</a>
        </div>
      </div>
    </div>
  );
};
