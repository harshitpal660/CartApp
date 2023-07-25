import menu from "./icons/menu.png"
import play from "./icons/play.png"
import prev from "./icons/prev.png"
import next from "./icons/next.png"
const Buttons=()=>{
    return (
        <div className='buttons'>
          <div id="outer" className="circle">
            <div className="control" id="menu"><img src={menu}></img></div>
            <p className="control" id="play_pause"><img src={play}></img></p>
            <p className="control" id="next"><img src={next}></img></p>
            <p className="control" id="prev"><img src={prev}></img></p>
            <div id="inner" className="circle">
              OK
            </div>
          </div>
        </div>
      );
}
export default Buttons;