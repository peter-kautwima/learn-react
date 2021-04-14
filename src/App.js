import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AnimalFacts from "./animal-fun-facts";
import "./App.css";
import Contact from "./authorization-form/Contact";
import Random from "./random-color-picker/RandomColorPicker";
import VideoPlayer from "./video-player/VideoPlayer";

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
            <Route path="/authorization">
              <Contact />
            </Route>
            <Route path="/video-player">
              <VideoPlayer />
            </Route>
            <Route path="/random-color-picker">
              <Random />
            </Route>
            <Route path="/social-network-for-pets">
              <App />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
