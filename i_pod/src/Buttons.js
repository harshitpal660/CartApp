import menu from "./icons/menu.png"
import React from "react";
const Buttons = (props) => {

  const { onClickMenu } = props;

  return (
    <div className='buttons'>
      <div id="outer" className="circle">
        <div className="control" id="menu" onClick={onClickMenu}><img src={menu}></img></div>
      </div>
    </div>
  );

}
export default Buttons;