import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      products: [
        {
          price: 99990,
          title: 'Laptop',
          qty: 1,
          img: '',
          id: 1
        },
        {
          price: 99990,
          title: 'Laptop',
          qty: 1,
          img: '',
          id: 2
        },
        {
          price: 99990,
          title: 'Laptop',
          qty: 1,
          img: '',
          id: 3
        },
        {
          price: 99990,
          title: 'Laptop',
          qty: 1,
          img: '',
          id: 4
        }
      ]
    }

  }
  handleIncreaseQuantity = (product) => {
    console.log('Heyy please increase the qty of ', product);
    const { products } = this.state;
    const index = products.indexOf(product)
    products[index].qty += 1;
    this.setState({
      products
    })
  }
  handleDecreaseQuantity = (product) => {
    console.log('Heyy please decrease the qty of ', product);
    const { products } = this.state;
    const index = products.indexOf(product)
    if (products[index].qty == 0) {
      return
    }
    products[index].qty -= 1;
    this.setState({
      products
    })
  }
  handleDeleteprod = (id) => {
    const { products } = this.state;
    // this will dive me a array of item whose id is not equal to deleted item id
    const items = products.filter((item) => {
      return item.id !== id
    })
    this.setState({
      products: items
    })
  }
  getCartCount = () => {
    const { products } = this.state;
    let count = 0;
    products.forEach((product) => {
      count += product.qty;
    })
    return count;
  }
  getTotalPrice=()=>{
    const { products } = this.state;
    let totalprice = 0;
    products.forEach((product) => {
      totalprice += product.price*product.qty;
    })
    return totalprice;
  }
  render() {
    const { products } = this.state;
    return (
      <div className='App'>
        <Navbar count={this.getCartCount()} />
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteprod={this.handleDeleteprod}
        />
        <div id="total">
            TOTAL: {this.getTotalPrice()}
        </div>
      </div>
    );
  }

}

export default App;