import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";
import firebase from 'firebase/compat/app'; //v9
// import add from 'firebase/compat/app'
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      products: [],
      loading: true
    }
    this.db = firebase.firestore();
  }

  componentDidMount() {
    // firebase
    //   .firestore()
    //   .collection('products')
    //   .get()
    //   .then((snapshot)=>{
    //     // console.log(snapshot);
    //     const products = snapshot.docs.map((doc)=>{
    //       const data = doc.data();
    //       data['id'] = doc.id
    //       return data;
    //     })
    //     console.log(products);
    //     this.setState({
    //       products,
    //       loading:false
    //     })

    //   })

    this.db
      .collection('products')
      .orderBy("price")
      .onSnapshot((snapshot) => {
        // console.log(snapshot);
        const products = snapshot.docs.map((doc) => {
          const data = doc.data();
          data['id'] = doc.id
          return data;
        })
        console.log(products);
        this.setState({
          products,
          loading: false
        })

      })
  }

  handleIncreaseQuantity = (product) => {
    // console.log('Heyy please increase the qty of ', product);
    const { products } = this.state;
    const index = products.indexOf(product)
    // products[index].qty += 1;

    // this.setState({
    //   products
    // })

    const docRef = this.db.collection('products').doc(products[index].id)
    docRef
      .update({
        qty: products[index].qty + 1
      })
      .then(() => {
        console.log('updated successfully');
      })
      .catch((err) => {
        console.log(err);
      })
  }
  handleDecreaseQuantity = (product) => {
    // console.log('Heyy please decrease the qty of ', product);
    const { products } = this.state;
    const index = products.indexOf(product)
    if (products[index].qty == 0) {
      return
    }
    // products[index].qty -= 1;
    // this.setState({
    //   products
    // })
    const docRef = this.db.collection('products').doc(products[index].id)
    docRef
      .update({
        qty: products[index].qty - 1
      })
      .then(() => {
        console.log('updated successfully');
      })
      .catch((err) => {
        console.log(err);
      })
  }
  handleDeleteprod = (id) => {
    const { products } = this.state;
    // this will dive me a array of item whose id is not equal to deleted item id
    // const items = products.filter((item) => {
    //   return item.id !== id
    // })
    // this.setState({
    //   products: items
    // })
    const docRef = this.db.collection('products').doc(id)
    docRef
      .delete()
      .then(() => {
        console.log('Deleted successfully');
      })
      .catch((err) => {
        console.log(err);
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
  getTotalPrice = () => {
    const { products } = this.state;
    let totalprice = 0;
    products.forEach((product) => {
      totalprice += product.price * product.qty;
    })
    return totalprice;
  }
  addProduct = () => {
    this.db
      .collection('products')
      .add({
        img: 'https://m.media-amazon.com/images/I/61Dw5Z8LzJL._SX425_.jpg',
        price: 65000,
        qty: 1,
        title: 'Laptop',
        rating: 4.2
      }).then((docref) => {
        console.log("product have been added", docref);
      }).catch((error) => {
        console.log('Error : ', error);
      })
  }

  // Sort=()=>{
  //   console.log("clicked");
  //   this.db
  //     .collection('products')
  //     .where('price','>=',1000)
  //     .onSnapshot((snapshot) => {
  //       // console.log(snapshot);
  //       const products = snapshot.docs.map((doc) => {
  //         const data = doc.data();
  //         data['id'] = doc.id
  //         return data;
  //       })
  //       console.log(products);
  //       this.setState({
  //         products,
  //         loading: false
  //       })

  //     })
  // }
  render() {
    const { products, loading } = this.state;
    return (
      <div className='App'>
        <Navbar count={this.getCartCount()} />
        <button onClick={this.addProduct} style={{ padding: 20, fontSize: 20, margin: 10 }}>Add Prod</button>
        {/* <div>

          <label>
            Sort by
            <select>
              <option onClick={this.Sort}>Price</option>
              <option onClick={this.Sort}>rating</option>
              <option onClick={this.Sort}>Qty</option>
            </select>

          </label>

        </div> */}
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteprod={this.handleDeleteprod}
        />
        {loading && <h1>Loading ...</h1>}
        <div id="total">
          TOTAL: {this.getTotalPrice()}
        </div>
      </div>
    );
  }

}

export default App;