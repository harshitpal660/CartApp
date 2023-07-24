import React from "react";
import CartItem from "./CartItem";


const Cart = (props) => {
<<<<<<< HEAD
    // console.log(props)
=======
    console.log(props)
>>>>>>> 768212ef3466b991de427ad611444f8fa7baf578
    const { products } = props;
    return (
        <div className="cart">
            {/* <CartItem qty={1} price={99} title={"Watch"} img={''}/> */}
            {products.map((product) => {
                // console.log(product)
                return (<CartItem
                    prod={product}
                    key={product.id}
                    onIncreaseQuantity={props.onIncreaseQuantity}
                    onDecreaseQuantity={props.onDecreaseQuantity}
                    onDeleteprod={props.onDeleteprod}
                />)
            })}
        </div>

    );
}

export default Cart;