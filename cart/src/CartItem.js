import React from "react";


class CartItem extends React.Component{
    render(){
        const styles = {
            image:{
                height: 110,
                width: 110,
                borderRadius: 4
            }
        }
        return (
            <div className='cart-item'>
                <div className="left-block">
                    <img style={styles.image}/>
                </div>
                <div className="right-block">
                    <div style={{fontSize:25}}>Phone</div>
                    <div style={{color:'#777'}}>Rs 9999</div>
                    <div style={{color:'#777'}}>Qty: 1</div>
                    <div className="cart-item-actions"></div>
                </div>
            </div>
        );
    }
    
}
// const styles = {
//     image:{
//         height: 210,
//         width: 210,
//         borderRadius: 4
//     }
// }

export default CartItem;