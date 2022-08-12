import React, { useState, useEffect } from "react";
import Video from "./Video";
import db from "./firebase";
import "./App.css";

function App() {
  const [videos, setVideos] = useState([
    {
      url: "/video.mp4",
      channel: "lol",
      description: "lol",
      song: "lol",
      likes: 0,
      messages: 0,
      shares: 0,
    },
    {
      url: "/video1.mp4",
      channel: "loll",
      description: "lol",
      song: "lol",
      likes: 0,
      messages: 0,
      shares: 0,
    },
    {
      url: "/video2.mp4",
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
