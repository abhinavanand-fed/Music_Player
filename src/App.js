import React, { useState, useRef } from "react";
import "./MusicPlayer.css";

const MusicPlayer = () => {
  const [playing, setPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const audioRef = useRef(null);

  const songs = [    {      url: "https://cdn.discordapp.com/attachments/852241547327307786/1070622679666806795/starboy-scloudtomp3downloader.com.mp3",      title: "Song 1",    },   
                     {      url: "https://cdn.discordapp.com/attachments/852241547327307786/1070622679666806795/starboy-scloudtomp3downloader.com.mp3",      title: "Song 2",    },    
                     {      url: "https://cdn.discordapp.com/attachments/852241547327307786/1070622679666806795/starboy-scloudtomp3downloader.com.mp3",      title: "Song 3",    },  ];

  const playPause = () => {
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);
  };

  const skip = (forward) => {
    let nextIndex = currentSongIndex + (forward ? 1 : -1);
    if (nextIndex >= songs.length) {
      nextIndex = 0;
    } else if (nextIndex < 0) {
      nextIndex = songs.length - 1;
    }
    setCurrentSongIndex(nextIndex);
    setPlaying(true);
    audioRef.current.src = songs[nextIndex].url;
    audioRef.current.play();
  };

  return (
    <div className="music-player">
      <audio ref={audioRef} />
      <p>{songs[currentSongIndex].title}</p>
      <button onClick={() => playPause()} className="play-pause">{playing ? "Pause" : "Play"}</button>
      <button onClick={() => skip(false)}>Previous</button>
      <button onClick={() => skip(true)}>Next</button>
    </div>
  );
  
};

export default MusicPlayer;
