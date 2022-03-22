import React, { useState, useEffect } from "react";
import Video from "./Video";
import db from "./firebase";
import "./App.css";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // db.collection("videos").onSnapshot((snapshot) =>
    //   setVideos(snapshot.docs.map((doc) => doc.data()))
    // );
    console.log(db)
  }, []);

  return (
    // BEM
    <div className="app">
      <div className="app__videos">
        {/* {videos.map(
          ({ url, channel, description, song, likes, messages, shares }) => (
            <Video
              url={'https://v16m-webapp.tiktokcdn-us.com/4addd9dbd26814ac0d9a0621fe9f3f32/622d93d6/video/tos/useast2a/tos-useast2a-pve-0068/6891493b2f8a4da6bc9eaa6ab36a5849/?a=1988&br=2240&bt=1120&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XY53A3E7nz7Th5a5vDXq&l=2022031300482101011300617406931BF2&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=MzN2bXJ3aW53MzMzaTczM0ApMzc3ZWk1OGVmNzVpNDM5O2dzLi9gcWNoamZgLS0tMTZzc2I0MTIyMDQvMTBfX14vLWM6Yw%3D%3D&vl=&vr='}
              channel={'song'}
              song={'channel'}  
              likes={50}
              messages={messages}
              description={description}
              shares={shares}
            />
          )
        )} */}
           <Video
              url={'https://v16m-webapp.tiktokcdn-us.com/8e0d9651edd11c0caf3612a49c722aff/622d9738/video/tos/alisg/tos-alisg-pve-0037c001/0a8fb7567d3e49a1b6ac210d61ca723c/?a=1988&br=1850&bt=925&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XY53A3E7nz7Th-2-vDXq&l=2022031301031301011313516720B8B8A8&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=am08cWc6Zmh5OzMzODczNEApPGQ4Nzs6M2RoNzc7Ozk4N2dxNXNicjRnNmhgLS1kMS1zc2IyYjZjMjMvLzFgYl4vMTA6Yw%3D%3D&vl=&vr='}
              channel={'song'}
              song={'channel'}  
              likes={50}
              messages={'messages'}
              description={'description'}
              shares={'shares'}
            />
            <Video
              url={'https://v16m-webapp.tiktokcdn-us.com/6c9cb9ba7891a284b1d3e6f9596352e2/622d9739/video/tos/useast2a/tos-useast2a-ve-0068c003/8e612146dfeb4be0a8635eea70abef8d/?a=1988&br=1840&bt=920&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XY53A3E7nz7Th-2-vDXq&l=2022031301031301011313516720B8B8A8&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ajdqOmg6Zm1uOzMzNzgzM0ApZzVnOTg5MzxmNzw1aTgzZmdfM2pgcjRnY2lgLS1kLzZzczEvL18vNDUyYl8xYTJjLS86Yw%3D%3D&vl=&vr='}
              channel={'song'}
              song={'channel'}  
              likes={50}
              messages={'messages'}
              description={'description'}
              shares={'shares'}
            />
      </div>
    </div>
  );
}

export default App;