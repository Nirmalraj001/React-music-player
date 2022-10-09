import { useEffect, useRef, useState } from "react"

const MusicPlayer = ({ currentPlaying,audioRef }) => {
    const musicBaseUrl = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-"
    const [musicSrc, setMusicSrc] = useState(`${musicBaseUrl}1.mp3`)
    // const audioRef = useRef()
    useEffect(() => {
        audioRef.current.load();
        audioRef.current.play();
        setMusicSrc(currentPlaying)
    }, [currentPlaying])

    console.log(musicSrc,currentPlaying,"musicSrc")
    return (
        <>
            <audio controls autoPlay ref={audioRef} id="audio" >
                <source src={musicSrc} type="audio/ogg" />
                Your browser does not support the audio element.
            </audio>
        </>
    )
}

export default MusicPlayer