import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AnimalFacts from "./animal-fun-facts";
import "./App.css";
import Contact from "./authorization-form/Contact";
import CopyCatContainer from "./copycat/CopyCatContainer";
import PassingThoughts from "./passing-thoughts/PassingThoughts";
import Random from "./random-color-picker/RandomColorPicker";
import SocialNetworkForPets from "./social-network-for-pets/SocialNetworkForPets";
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
              <SocialNetworkForPets />
            </Route>
            <Route path="/passing-thoughts">
              <PassingThoughts />
            </Route>
            <Route path="/copycat">
              <CopyCatContainer />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
