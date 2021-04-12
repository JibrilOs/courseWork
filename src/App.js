import React from 'react';
import {BrowserRouter as Router,Link,Route,Switch} from "react-router-dom";
import Home from "./Home"
import Todo from "./Todo"

function App(props) {
    return (
      <div className="App">
        <Router>
          <div>
            <Link to="/" style={{ marginRight:"10px" }}>
              Home
            </Link>
            <Link to="/Todo">TodoList</Link>
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/Todo" exact>
                <Todo />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
}

export default App;