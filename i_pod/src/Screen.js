import signal from "./icons/signal.png"
import wifi from "./icons/wifi.png"
import battery from "./icons/battery.png";
import wallpaper from "./icons/wallpaper.png";
import Menu from "./Menu";
import React from "react";

// Games images
import Games from "./Apps/Games";
import bikeracing from "./games/bikeracing.gif";
import carracing from "./games/carracing.gif";
import chess from "./games/chess.gif";
import space from "./games/space.gif";
import subwaysurfers from "./games/subwaysurfers.gif";
import tetris from "./games/tetris.gif";

// Gallery
import Gallery from "./Apps/Gallery";
import scene1 from "./gallery/scenery1.jpg";
import scene2 from "./gallery/scenery2.jpg";
import scene3 from "./gallery/scenery3.jpg";
import scene4 from "./gallery/scenery4.jpg";
import scene5 from "./gallery/scenery5.jpg";
import scene6 from "./gallery/scenery6.jpg";

// Music
import Music from "./Apps/Music";

// Settings
import Settings from "./Apps/Settings";

// Gmail
import Gmail from "./Apps/Gmail";

// Google
import Google from "./Apps/Google";

// Instagram
import Instagram from "./Apps/Instagram";

// Radio
import Radio from "./Apps/Radio";

// Snapchat
import Snapchat from "./Apps/Snapchat";

// Whatsapp
import Whatsapp from "./Apps/Whatsapp";

class Screen extends React.Component {
  constructor(){
    super();
    this.state={
      games:[
        {
          title:"Bike Racing",
          img:bikeracing,
          id:1
        },
        {
          title:"Car Racing",
          img:carracing,
          id:2
        },
        {
          title:"Chess",
          img:chess,
          id:3
        },
        {
          title:"Space",
          img:space,
          id:4
        },
        {
          title:"Subway Surfers",
          img:subwaysurfers,
          id:5
        },
        {
          title:"Tetris",
          img:tetris,
          id:6
        }
      ],
      gallery:[
        {
          img:scene1,
          id:1
        },
        {
          img:scene2,
          id:2
        },
        {
          img:scene3,
          id:3
        },
        {
          img:scene4,
          id:4
        },
        {
          img:scene5,
          id:5
        },
        {
          img:scene6,
          id:6
        }
      ],
      music:[
        {
          id:"sX2bYV6nSy4"
        },
        {
          id:"hMBKmQEPNzI"
        },
        {
          id:"iHhKMS6Y_fA"
        },
        {
          id:"By3OgGR7uN4"
        },
        {
          id:"6sgeUMG_1a0"
        },
        {
          id:"3i5un3CARN4"
        },
        {
          id:"dx4Teh-nv3A"
        }
      ]
    }
  }
  render() {
    const { screens, menu, itemClicked,onClickOK } = this.props;
    // console.log(itemClicked.title);
    const {games,gallery,music} = this.state;
    // console.log(menu);
    return (
      <React.Fragment>
        {((itemClicked==="" && screens.menu===true && screens.wallpaper===false) || (itemClicked==="" && screens.menu===false && screens.wallpaper===true) || (screens.wallpaper && itemClicked!=="")) && <div className='screen'>
          <div className="info">
            <div id="date">{new Date().toLocaleString()}</div>
            <div id="extra">
              <div className="extrainfo"><img src={signal} alt="!signal"></img></div>
              <div className="extrainfo"><img src={wifi} alt="!wifi"></img></div>
              <div className="extrainfo"><img src={battery} alt="!battery"></img></div>
            </div>
          </div>
          <div id="wallpaper">
            {screens.wallpaper && <img src={wallpaper} alt="wallpaper"></img>}
            <div id="menuScreen" >
              {screens.menu && menu.map((item) => {
                return <Menu
                  item={item}
                  key={item.id}
                  onClickOK={onClickOK}
                />
              })}
            </div>
          </div>

        </div>}
        {(screens.menu && itemClicked!=="")&&
        <div className="screen">
          {itemClicked.title==="Games" && <Games games={games} key={games.id}/>}
          {itemClicked.title==="Gallery" && <Gallery gallery={gallery} key={gallery.id}/>}
          {itemClicked.title==="Music" && <Music music={music} key={music.id}/>}
          {itemClicked.title==="Settings" && <Settings/>}
          {itemClicked.title==="Gmail" && <Gmail/>}
          {itemClicked.title==="Google" && <Google/>}
          {itemClicked.title==="Instagram" && <Instagram/>}
          {itemClicked.title==="Radio" && <Radio/>}
          {itemClicked.title==="Snapchat" && <Snapchat/>}
          {itemClicked.title==="Whatsapp" && <Whatsapp/>}
        </div>}
      </React.Fragment>

    );
  }

}
export default Screen;