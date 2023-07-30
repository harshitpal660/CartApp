import {Switch,Route,withRouter} from 'react-router-dom';
import {Home,PostDetail,CreatePost,Navbar} from "./";
function App() {
  return (
    <div className="container">
      <Navbar/>
      <Switch>
        <Route exact path='/' component={withRouter(Home)}/>
        <Route exact path='/post/:postId' component={withRouter(PostDetail)}/>
        <Route exact path='/create-post' component={withRouter(CreatePost)}/>
      </Switch>
    </div>
    
    
  );
}

export default App;
