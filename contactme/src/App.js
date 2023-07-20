import React from "react";
import ContactOptions from "./ContactOptions";
import leetcode from "./icons/leetcode.png";
import github from "./icons/github.png"
import linkedin from "./icons/linkedin.png"

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data:[
        {
          bgColor:'#c46743',
          name:'LinkedIn',
          icon:linkedin,
          key:1,
          link:'https://www.linkedin.com/in/harshit-pal-77916a205/'
        },
        {
          bgColor:'#e7eb7a',
          name:'GitHub',
          icon:github,
          key:2,
          link:'https://github.com/harshitpal660'
        },
        {
          bgColor:'#c574db',
          name:'LeetCode',
          icon:leetcode,
          key:3,
          link:'https://leetcode.com/palharshit239/'
        }
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <h1 id="title">Contact Me</h1>
        {/* <img src={pic} alt="ab"/> */}
        {this.state.data.map((data) =>{
          return(<ContactOptions data={data} key={data.key}/>)
        })}
      </div>
    );
  }
}

export default App;
