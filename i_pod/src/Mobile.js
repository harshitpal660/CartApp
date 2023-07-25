import Screen from "./Screen";
import Buttons from "./Buttons";
import React from "react"
class Mobile extends React.Component{
  constructor(){
    super();
    this.state={
      screens:{
        menu:false,
        wallpaper:true,
      },
      buttons:{
        menu:false,
        isplayed:false,
        next:false,
        prev:false,
        ok:false
      }
    }
  }
  handleMenuClick=()=>{
    console.log("Menu Clicked")
    const screens = this.state.screens;
    screens.menu = !screens.menu;
    screens.wallpaper = !screens.wallpaper; 
    const buttons = this.state.buttons;
    this.setState({
      screens,
      buttons
    })
  }
  render(){
    const screens = this.state.screens;
    const buttons = this.state.buttons
    return (
      <div className='mobile'>
        <Screen 
          screens={screens}
        />
        <Buttons 
          buttons={buttons}
          onClickMenu={this.handleMenuClick}
        />
      </div>
    );
  }  
}
export default Mobile;