import React from "react"

const Menu = (props) => {


  const { item, onClickOK } = props;

  return (
    <React.Fragment>
      {item.active && <div className="icons" style={{ border: "2px solid white" }} onClick={() => onClickOK(item.id)}><img src={item.image}></img></div>}
      {!item.active && <div className="icons" onClick={() => onClickOK(item.id)}><img src={item.image}></img></div>}
    </React.Fragment>

    // <div className="icons" style={{border:"2px solid black"}}><img src={item.image}></img></div>
  );


}
export default Menu;