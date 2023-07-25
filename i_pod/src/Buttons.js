import menu from "./icons/menu.png"
import play from "./icons/play.png"
import prev from "./icons/prev.png"
import next from "./icons/next.png"
import pause from "./icons/pause.png"
import React from "react";
class Buttons extends React.Component{
  constructor() {
    super();

    this.state = {
      isPlaying: false
    }
  }

  play_pause=()=>{
    this.setState({
      isPlaying:!this.state.isPlaying
    })
  }
  render(){
    const playing = this.state.isPlaying;
    const buttons = this.props.buttons;
    const onClickMenu = this.props.onClickMenu;
    console.log(buttons);
    return (
      <div className='buttons'>
        <div id="outer" className="circle">
          <div className="control" id="menu" onClick={onClickMenu}><img src={menu}></img></div>
          <p className="control" id="play_pause" onClick={this.play_pause}>
            {!playing && <img src={play}></img>}
            {playing && <img src={pause}></img>}
          </p>
          <p className="control" id="next"><img src={next}></img></p>
          <p className="control" id="prev"><img src={prev}></img></p>
          <div id="inner" className="circle">
            OK
          </div>
        </div>
      </div>
    );
  }
}
export default Buttons;