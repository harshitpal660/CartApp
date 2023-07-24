// import React from "react";
import CartItem from "./CartItem";


const Cart = (props) => {
    // console.log(props)
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