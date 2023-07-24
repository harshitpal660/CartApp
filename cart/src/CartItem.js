import React from "react";


const CartItem=(props)=>{
    
        // console.log(props)
        // console.log(props.prod)
<<<<<<< HEAD
        const {price,title,qty,id,img,rating} = props.prod;
=======
        const {price,title,qty,id} = props.prod;
>>>>>>> 768212ef3466b991de427ad611444f8fa7baf578
        const {prod,onDecreaseQuantity,onIncreaseQuantity,onDeleteprod} = props;
        return (
            <div className='cart-item'>
                <div className="left-block">
<<<<<<< HEAD
                    <img style={styles.image} src={img}/>
=======
                    <img style={styles.image}/>
>>>>>>> 768212ef3466b991de427ad611444f8fa7baf578
                </div>
                <div className="right-block">
                    <div style={{fontSize:25}}>{title}</div>
                    <div style={{color:'#777'}}>Rs {price}</div>
                    <div style={{color:'#777'}}>Qty: {qty}</div>
<<<<<<< HEAD
                    <div style={{color:'#777'}}>rating: {rating}</div>
=======
>>>>>>> 768212ef3466b991de427ad611444f8fa7baf578
                    <div className="cart-item-actions">
                        {/* <img src="icons/plus.svg" alt="increase" className="action-icon"></img>
                        <img src="icons/minus" alt="decrease" className="action-icon"></img>
                        <img src="icons/delete" alt="delete" className="action-icon"></img> */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="action-icons" onClick={()=>onIncreaseQuantity(prod)} viewBox="0 0 448 512"><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM200 344V280H136c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H248v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"/></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className="action-icons" onClick={()=>onDecreaseQuantity(prod)} viewBox="0 0 448 512"><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm88 200H296c13.3 0 24 10.7 24 24s-10.7 24-24 24H152c-13.3 0-24-10.7-24-24s10.7-24 24-24z"/></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className="action-icons" onClick={()=>onDeleteprod(id)} viewBox="0 0 448 512"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
                    </div>
                </div>
            </div>
        );
}
const styles = {
    image:{
        height: 110,
        width: 110,
        borderRadius: 4
    }
}

<<<<<<< HEAD
export default CartItem;

// import firebase from 'firebase/compat/app';
// import 'firebase/compat/firestore';
=======
export default CartItem;
>>>>>>> 768212ef3466b991de427ad611444f8fa7baf578
