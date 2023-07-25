import signal from "./icons/signal.png"
import wifi from "./icons/wifi.png"
import battery from "./icons/battery.png"
import wallpaper from "./icons/wallpaper.png"
const Screen=()=>{
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
            <img src={wallpaper}></img>
          </div>
        </div>
      );
}
export default Screen;