import React from 'react';

import lukeSkywalker from './luke-skywalker.jpg';
import c3po from './c-3PO.png';
import darthVader from './darth-vader.png';
import leia from './leia.jpg';
import obiWan from './ben-kenobi.png';

const characters = [
  {name: "Luke Skywalker", gender: "male", birthYear: "19BBY", height: "172", mass: "77", image: lukeSkywalker},
  {name: "C-3PO", gender: "n/a", birthYear: "112BBY", height: "167", mass: "75", image: c3po},
  {name: "Darth Vader", gender: "male", birthYear: "41.9BBY", height: "202", mass: "136", image: darthVader},
  {name: "Leia Organa", gender: "female", birthYear: "19BBY", height: "150", mass: "49", image: leia},
  {name: "Obi-Wan Kenobi", gender: "male", birthYear: "57BBY", height: "182", mass: "77", image: obiWan},
]
function App() {
  return (
    <div className="App">
      <div style={{textAlign: 'center', padding: '30px'}}>
        <h1>Star Wars Characters</h1>
        <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
          {characters.map((character, index) => (
              <div key={index} style={{margin: '10px', width: '200px'}}>
                <img src={character.image} alt={character.name}
                     style={{width: '100%', height: 'auto', borderRadius: '10px'}}/>
                <div style={{padding: '10px'}}>
                  <h3>{character.name}</h3>
                  <p>{character.gender}</p>
                  <p>{character.birthYear}</p>
                  <p>{character.height}</p>
                  <p>{character.mass}</p>
                </div>
              </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
