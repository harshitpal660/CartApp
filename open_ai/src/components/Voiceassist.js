import React from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import microphone from "../Images/mike.png";
import microphone2 from "../Images/mikedis.png";
import Chat from "./Chat";
import { useLocation } from "react-router-dom";

const Voiceassist = (props) => {
  const { transcript, listening, browserSupportsSpeechRecognition,resetTranscript } =
    useSpeechRecognition();

  const query = props.query;
  const id = props.id;
  const chat = props.chat;
  const gptAnswer = props.gptAnswer;
  const loading = props.loading;
  const location = useLocation();
  const linkheading = location.state;
  //   console.log(linkheading)
  const startListening = () => {
    // console.log("clicked")
    return SpeechRecognition.startListening({
      continuous: true,
      language: "en-IN",
    });
  };
  if (!browserSupportsSpeechRecognition) {
    return (
      <span style={{ color: "red" }}>
        Browser doesn't support speech recognition.
      </span>
    );
  }

  return (
    <div id="voiceassits">
      <div style={{ height: "30px", width: "30px", overflow: "hidden" }}>
        {/* <img src={microphone} alt="mike"></img> */}
        {listening ? (
          <img
            src={microphone}
            alt="mike"
            className="mike tooltip"
            onClick={SpeechRecognition.stopListening}
            style={{ height: "100%", width: "100%" }}
          >
          </img>
        ) : (
          <img
            src={microphone2}
            alt="mike"
            className="mike tooltip"
            onClick={startListening}
            style={{ height: "100%", width: "100%" }}
          >
          </img>
        )}
         <span class="tooltiptext">Voice search</span>
      </div>

      {/* <div id="textAreea">
        <textarea rows={10} cols={110} value={transcript} />
      </div> */}

      {
        <Chat
          query={query}
          id={id}
          heading={linkheading}
          chat={chat}
          gptAnswer={gptAnswer}
          loading={loading}
          transcript={transcript}
          listening={listening}
          resetTranscript={resetTranscript}
        />
      }
    </div>
  );
};
export default Voiceassist;
