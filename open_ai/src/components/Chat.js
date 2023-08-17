import { useState, useEffect } from "react";
import send from "../Images/send.png";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
import bot from "../Images/chatbot.png";
import user from "../Images/user.png";

// import Loader from "./Loader";

export default function Chat(props) {
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  const heading = props.heading;
  const query = props.query;
  const id = props.id;
  const chat = props.chat;
  let transcript = props.transcript;
  const listening = props.listening;
  const [textArea, setTextArea] = useState("");
  // const [transcript, setTranscript] = useState(tran);
  const chatArrayLength = Object.keys(chat).length;

  console.log(transcript);
  const resetTranscript = props.resetTranscript;
  const handlequery = (message, id) => {
    // console.log("clicked");
    
    query(message, id);
    setTextArea("");
    resetTranscript();
    // setTranscript("")
    
  };
  useEffect(() => {
    const handleResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <div className="queryWindow">

      {listening ? (
        <>
        <h3>{heading}</h3>
          <textarea
            className="textArea"
            rows={windowSize[1] * 0.001}
            cols={windowSize[0] * 0.1}
            placeholder="Ask me anything"
            value={transcript}
            onChange={(e) => setTextArea(e.target.value)}
            // onChange={(e)=>setTranscript(tran)}
          />
          <img
            src={send}
            onClick={() => handlequery(transcript, id)}
            alt="send"
          ></img>
          <br />
        </>
      ) : (
        <>
          <h3>{heading}</h3>

        <textarea
        className="textArea"
        rows={windowSize[1] * 0.001}
        cols={windowSize[0] * 0.1}
        placeholder="Ask me anything"
        onChange={(e) => setTextArea(e.target.value)}
        value={textArea}
      />
      <img
          src={send}
          onClick={() => handlequery(textArea, id)}
          alt="send"
        ></img>
        <br /></>
      )}

      <Link to="/" style={{ color: "inherit", textDecoration: "inherit" }}>
        <button id="backBtn">back</button>
      </Link>
      <div className="chat">
        {chat.map((item, index) => {
          // console.log(chatArrayLength + " " + index);
          if (chatArrayLength === index + 1) {
            if (item.role === "user") {
              return (
                <div className="chat-wrapper">
                  <div className="userText">
                    <div>{item.content}</div>
                    <div className="image-wrapper">
                      <img src={user} alt="user"></img>
                    </div>
                  </div>
                </div>
              );
            } else {
              return (
                <div className="chat-wrapper">
                  <div className="gptText">
                    <div className="image-wrapper">
                      <img src={bot} alt="bot"></img>
                    </div>
                    <Typewriter
                      onInit={(Typewriter) => {
                        Typewriter.typeString(item.content)
                          .pauseFor(1000)
                          .start();
                      }}
                    />
                  </div>
                </div>
              );
            }
          } else {
            if (item.role === "user") {
              return (
                <div className="chat-wrapper">
                  <div className="userText">
                    <div>{item.content}</div>
                    <div className="image-wrapper">
                      <img src={user} alt="user"></img>
                    </div>
                  </div>
                </div>
              );
            } else {
              return (
                <div className="chat-wrapper">
                  <div className="gptText">
                    <div className="image-wrapper">
                      <img src={bot} alt="bot"></img>
                    </div>
                    <div>{item.content}</div>
                  </div>
                </div>
              );
            }
          }
        })}
      </div>
    </div>
  );
}
