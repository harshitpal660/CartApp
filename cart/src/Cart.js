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
    handleIncreaseQuantity = (product)=>{
        console.log('Heyy please increase the qty of ',product);
        const {products} = this.state;
        const index = products.indexOf(product)
        products[index].qty +=1;
        this.setState({
            products
        })
    }
    handleDecreaseQuantity = (product)=>{
        console.log('Heyy please decrease the qty of ',product);
        const {products} = this.state;
        const index = products.indexOf(product)
        if(products[index].qty ==0){
            return
        }
        products[index].qty -=1;
        this.setState({
            products
        })
    }
    handleDeleteprod = (id)=>{
        const {products} = this.state;
        // this will dive me a array of item whose id is not equal to deleted item id
        const items = products.filter((item)=>{
            return item.id !== id
        })
        this.setState({
            products:items
        })
    }
    render(){
        const {products} = this.state;
        return (
            <div className="cart">
                {/* <CartItem qty={1} price={99} title={"Watch"} img={''}/> */}
                {products.map((product)=>{
                    // console.log(product)
                    return (<CartItem 
                    prod={product} 
                    key={product.id}
                    onIncreaseQuantity={this.handleIncreaseQuantity}
                    onDecreaseQuantity={this.handleDecreaseQuantity}
                    onDeleteprod={this.handleDeleteprod}
                    />)
                })}
            </div>
        );
    }
    
}

export default Cart;