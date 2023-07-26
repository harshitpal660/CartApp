import Screen from "./Screen";
import Buttons from "./Buttons";
import React from "react"

import Settings from "./icons/settings.png";
import Games from "./icons/joystick.png";
import Music from "./icons/spotify.png";
import Gallery from "./icons/picture.png";
import Radio from "./icons/radio.png";
import Gmail from "./icons/gmail.png";
import Google from "./icons/google.png";
import Whatsapp from "./icons/whatsapp.png";
import Instagram from "./icons/instagram.png";
import Snapchat from "./icons/snapchat.png";
class App extends React.Component {
  constructor(){
    super();
    this.state={
      screens:{
        menu:false,
        wallpaper:true,
        app:false
      },
      buttons:{
        itemClicked:""
      },
      menu:[
        {
          id:1,
          title:"Settings",
          // active:false,
          image:Settings
        },
        {
          id:2,
          title:"Games",
          // active:false,
          image:Games
        },
        {
          id:3,
          title:"Music",
          // active:true,
          image:Music
        },
        {
          id:4,
          title:"Gallery",
          // active:false,
          image:Gallery
        },
        {
          id:5,
          title:"Radio",
          // active:false,
          image:Radio
        },
        {
          id:6,
          title:"Gmail",
          // active:false,
          image:Gmail
        },
        {
          id:7,
          title:"Google",
          // active:false,
          image:Google
        },
        {
          id:8,
          title:"Whatsapp",
          // active:false,
          image:Whatsapp
        },
        {
          id:9,
          title:"Instagram",
          // active:false,
          image:Instagram
        },
        {
          id:10,
          title:"Snapchat",
          // active:false,
          image:Snapchat
        }
      ]
        
      
    }
  }
  handleMenuClick=()=>{
    // console.log("Menu Clicked")
    const screens = this.state.screens;
    screens.menu = !screens.menu;
    screens.wallpaper = !screens.wallpaper; 
    const buttons = this.state.buttons;
    if(screens.wallpaper){
      buttons.itemClicked="";
    }
    console.log(screens.app +" "+screens.menu+" "+screens.wallpaper);

  
    this.setState({
      screens
    })
  }
  handleOKClick=(id)=>{
    const menu = this.state.menu;
    const buttons = this.state.buttons;
    const screens = this.state.screens;
    if(screens.wallpaper){
      return
    }
    if(!screens.wallpaper){
      screens.app=!screens.app
    }
    console.log(screens.app +" "+screens.menu+" "+screens.wallpaper);

    console.log(menu[id-1]);
    const itemClicked = menu[id-1];
    buttons.itemClicked=itemClicked;
    this.setState({
      buttons
    })
  }
  render(){
    const {screens,menu,buttons} = this.state;
    return (
      <div className='mobile'>
        <Screen 
          screens={screens}
          menu={menu}
          itemClicked={buttons.itemClicked}
          onClickOK={this.handleOKClick}
        />
        <Buttons 
          // buttons={buttons}
          onClickMenu={this.handleMenuClick}
          onClickOK={this.handleOKClick}
        />
      </div>
    );
  }  

}

export default App;
