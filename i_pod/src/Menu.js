import React from "react"

class Menu extends React.Component{
  
  render(){
    const item = this.props.item;
    // console.log(item);
    return (
      <React.Fragment>
        {item.active && <div className="icons" style={{border:"2px solid white"}}><img src={item.image}></img></div>}
        {!item.active && <div className="icons"><img src={item.image}></img></div>}
      </React.Fragment>
      
      // <div className="icons" style={{border:"2px solid black"}}><img src={item.image}></img></div>
    );
  }
    
}
export default Menu;