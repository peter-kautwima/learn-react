import { animals } from "./animals";
import ocean from "./images/ocean.jpeg";
import "./index.css";
const title = "";

const showBackground = true;

const background = <img className="background" alt="ocean" src={ocean} />;

const images = [];

for (const animal in animals) {
  images.push(
    <img
      alt={animal}
      key={animal}
      className="animal"
      src={animals[animal].image}
      ariaLabel={animal}
      role="button"
      onClick={displayFact}
    />
  );
}

function displayFact(e) {
  console.log(e);
  const selectedAnimal = e.target.alt;
  const animalInfo = animals[selectedAnimal];
  const optionIndex = Math.floor(Math.random() * animalInfo.facts.length);

  const funFact = animalInfo.facts[optionIndex];
  document.getElementById("fact").innerHTML = funFact;
}
const AnimalFacts = () => (
  <div>
    <h1>{title || "Click an animal for a fun fact"}</h1>;
    {showBackground && background}
    <p id="fact"></p>
    <div className="animals">{images}</div>
  </div>
);

export default AnimalFacts;
