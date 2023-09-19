import { useState } from "react";
import "./App.css";
import Join from "./components/Join/Join";
import Chat from "./components/Chat/Chat";
import React, { useRef } from "react";

function App() {
  const [chatVisibility, setChatVisibility] = useState(false);
  const [socket, setSocket] = useState(null);

  const videoRef = useRef(null);

  const handleStartVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <>
      <div className="Chat">
        <div className="App">
          {chatVisibility ? (
            <Chat socket={socket} />
          ) : (
            <Join setSocket={setSocket} setChatVisibility={setChatVisibility} />
          )}
        </div>
      </div>

      <div className="video">
        <video
          ref={videoRef}
          className="background-video"
          loop
          muted
          autoPlay
          playsInline
        >
          <source src="./video/backgroundvideo2.mp4" type="video/mp4" />
        </video>
      </div>
    </>
  );
}

export default App;
