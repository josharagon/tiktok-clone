import React, { useState, useEffect } from "react";
import Video from "./Video";
import db from "./firebase";
import "./App.css";

function App() {
  const [videos, setVideos] = useState([
    {
      url: "https://v16m-webapp.tiktokcdn-us.com/22e9a23a05b3bff127f23397470bb373/62397554/video/tos/useast2a/tos-useast2a-ve-0068c002/eace9e7c6bd645619f10faee588a5cca/?a=1988&br=1022&bt=511&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XY53A3E7nz7ThGKyMDXq&l=202203220105440101130062441BD688FA&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ajpvbGg6Znh5OzMzNzczM0ApPDQ6aTM4ZTxkNzlnaTxpM2cwM141cjRvcGpgLS1kMTZzc2IxXi8zXy4zMjZiXi40YzU6Yw%3D%3D&vl=&vr=",
      channel: "lol",
      description: "lol",
      song: "lol",
      likes: 0,
      messages: 0,
      shares: 0,
    },
    {
      url: "https://v16m-webapp.tiktokcdn-us.com/22fc1b4eadad0cfbf7a054fa98f46de0/623975a8/video/tos/useast2a/tos-useast2a-pve-0068/9f31434f5f0f42c58488be20a6d13534/?a=1988&br=2814&bt=1407&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XY53A3E7nz7ThiVyMDXq&l=2022032201070801011300615404E9E7E7&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=am50cDM6ZnBmOTMzNzczM0ApOWlnZ2k6aDxlN2dkZTQzN2drMS1kcjRnMGdgLS1kMTZzcy9fMC1hYTQ1Yy5iMGMvYjQ6Yw%3D%3D&vl=&vr=",
      channel: "loll",
      description: "lol",
      song: "lol",
      likes: 0,
      messages: 0,
      shares: 0,
    },
    {
      url: "https://v16m-webapp.tiktokcdn-us.com/443c1bb24f4dfd497927ff5d307c623d/623975c0/video/tos/useast5/tos-useast5-ve-0068c001-tx/ae6b1937c9604358870d87105c6b218c/?a=1988&br=1970&bt=985&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XY53A3E7nz7ThB9yMDXq&l=2022032201072901011300616416D31CBE&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3Q0NzY6Zjs7OzMzZzczNEApOGY3aGVmOjxkNzlpNGU5N2dkcDVecjRnczZgLS1kMS9zc2NfXl8yYTYxX18zMjM2MGE6Yw%3D%3D&vl=&vr=",
      channel: "lol",
      description: "lol",
      song: "lollll",
      likes: 0,
      messages: 0,
      shares: 0,
    },
  ]);

  // useEffect(() => {
  //   // db.collection("videos").onSnapshot((snapshot) =>
  //   //   setVideos(snapshot.docs.map((doc) => doc.data()))
  //   // );
  //   console.log(db)
  // }, []);

  return (
    <div className="app">
      <div className="app__videos">
        {videos.map(
          ({ url, channel, description, song, likes, messages, shares }) => (
            <Video
              url={url}
              channel={song}
              song={channel}
              likes={likes}
              messages={messages}
              description={description}
              shares={shares}
              key={url + channel + song + description}
            />
          )
        )}
      </div>
    </div>
  );
}

export default App;
