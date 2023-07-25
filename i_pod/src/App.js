import React from "react";
import Mobile from "./Mobile";
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      products: [],
      loading: true
    }
    // this.db = firebase.firestore();
  }

  
  render() {
    
    return (
      <div className='App'>
        <Mobile/>
      </div>
    );
  }

}

export default App;
