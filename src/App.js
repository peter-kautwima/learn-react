import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AnimalFacts from "./animal-fun-facts";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/" exact={true}>
              <p>home</p>
            </Route>
            <Route path="/animal-fun-facts">
              <AnimalFacts />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;