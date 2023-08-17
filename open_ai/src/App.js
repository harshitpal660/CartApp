import { Routes, Route} from 'react-router-dom';
// import Home from './components/Home';
// import Chat from './components/Chat';
import { useState } from "react";
import Application from './components/Applications';
import { arrayItems } from './AIOptions';
import Voiceassist from './components/Voiceassist';
// import Chat from './components/Chat';
// import { Link } from "react-router-dom";
function App() {
  const { Configuration, OpenAIApi } = require("openai");
  const configuration = new Configuration({
    apiKey: `${process.env.REACT_APP_Open_AI_Key}`
  });
  const openai = new OpenAIApi(configuration);
  // console.log(`${process.env.REACT_APP_Open_AI_Key}`)
  const [option, setOption] = useState({});
  // const [cardClicked, setCardClicked] = useState(false);
  const [id, setId] = useState("");

  // const [userInput,setUserInput] = useState([]);
  const [gptAnswer,setGPTAnswer] = useState([]);
  const [chat,setChat] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [heading, setHeading] = useState("");


  const selectOption = (option,id) => {
    // console.log(option)
    // console.log(id);
    // setCardClicked(true);
    // console.log(option.heading)
    // setHeading(option.heading)
    setId(id);
    setOption(option);

  };

  const findAnswer = async(query,id) => {
    console.log(query);
   
    setLoading(true);
    const userDialog = {role:"user",content:query}
    console.log(option);
    option.messages.push(userDialog)
    chat.push(userDialog)
    setChat(chat);
    const response = await openai.createChatCompletion(option)
    const gptDialog = response.data.choices[0].message;

    console.log(gptDialog)
    chat.push(gptDialog)
    setChat(chat);
    setGPTAnswer(gptDialog.content);
    setLoading(false);
  };
  return (
    <Routes>
      <Route path="/" element={<Application arrayItems={arrayItems} selectOption={selectOption} />} />
      <Route path="/chat" element={<Voiceassist
          query={findAnswer} 
          id={id}  
          // heading={heading} 
          chat={chat}
          gptAnswer={gptAnswer}
          loading={loading}/>} />
    </Routes>
    // <Home/>
  );
}

export default App;
