import React from "react";
import icon from "./icons/cart.png";

const Navbar=(props)=> {
    
        return(
            <div style={styles.Navbar}>
                <h2 style={styles.text}>Cart</h2>
                <div style={styles.icon}>
                    <img src={icon} style={styles.img} alt="cart-icon"/>
                    <span style={styles.count}>{props.count}</span>
                </div>
            </div>
        )
    
}
const styles = {
    Navbar:{
        height: 50,
        width: '100%',
        backgroundColor:"grey",
        textAlign:"center"
    },
    icon:{
        height:50,
        width:50,
        position:"absolute",
        right:0,
        top:5
    },
    img:{
        height:"80%",
        width:"80%"
    },
    count:{
        height:'20px',
        width:'20px',
        borderRadius:"50%",
        backgroundColor: 'rgb(255, 8, 0,0.5)',
        position:"absolute",
        textAlign:"center",
        top:"-3px",
        right:"3px"
    },
    text:{
        margin:0
    }
}

export default Navbar;