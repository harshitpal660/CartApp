import React from "react";
import CartItem from "./CartItem";

class Cart extends React.Component{
    constructor(){
        super();
        
        this.state ={
            products :[
                {
                    price:99990,
                    title: 'Laptop',
                    qty: 1,
                    img: '',
                    id:1
                },
                {
                    price:99990,
                    title: 'Laptop',
                    qty: 1,
                    img: '',
                    id:2
                },
                {
                    price:99990,
                    title: 'Laptop',
                    qty: 1,
                    img: '',
                    id:3
                },
                {
                    price:99990,
                    title: 'Laptop',
                    qty: 1,
                    img: '',
                    id:4
                }
            ]
        }
    }
    render(){
        const {products} = this.state;
        return (
            <div className="cart">
                {/* <CartItem qty={1} price={99} title={"Watch"} img={''}/> */}
                {products.map((product)=>{
                    // console.log(product)
                    return <CartItem prod={product} key={product.id}/>
                })}
            </div>
        );
    }
    
}

export default Cart;