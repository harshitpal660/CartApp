import signal from "./icons/signal.png"
import wifi from "./icons/wifi.png"
import battery from "./icons/battery.png"
import wallpaper from "./icons/wallpaper.png"
import Menu from "./Menu"
import React from "react"

class Screen extends React.Component{
  // constructor(){
  //   super();
  //   this.state={
  //     screens:{
  //       Menu:false
  //     }
  //   }
  // }
  render(){
    const screens = this.props.screens;
    // console.log(screens.menu);
    return (
      <div className='screen'>
        <div className="info">
          <div id="date">12/3/23</div>
          <div id="extra">
            <div className="extrainfo"><img src={signal}></img></div>
            <div className="extrainfo"><img src={wifi}></img></div>
            <div className="extrainfo"><img src={battery}></img></div>
          </div>
        </div>
        <div id="wallpaper">
          {screens.wallpaper && <img src={wallpaper}></img>}
          {screens.menu && <Menu/>}
        </div>
      </div>
    );
  }
    
}
export default Screen;