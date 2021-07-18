import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import {BrowserRouter as Router , Route ,Switch} from 'react-router-dom';
import BlogDatails from './BlogDetails';


function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <div className="content">
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route path='/create'>
            <Create />
          </Route>
          <Route path='/blogs/:id'>
            <BlogDatails />
          </Route>

        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;


// npx json-server --watch data/db.json --port 8000