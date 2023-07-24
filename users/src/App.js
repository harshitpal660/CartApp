import firebase from 'firebase/compat/app';
import React from 'react'
import UsersList from './UsersList';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      users: [],
      loading: true
    }
    this.db = firebase.firestore();
  }

  componentDidMount(){
    this.db
      .collection('Users')
      .onSnapshot((snapshot)=>{
        const users = snapshot.docs.map((doc) => {
          const data = doc.data();
          data['id'] = doc.id
          // console.log(snapshot.docs);
          return data;
          
        })
       
        // console.log(users);
        this.setState({
          users,
          loading: false
        })
      })
  }

  render(){
    const { users, loading } = this.state;
    return(
      <div className='App'>
        {loading && <h1>Loading ...</h1>}
        <UsersList
        users={users}
        />
      </div>
    )
  }

}
export default App;
