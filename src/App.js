// import React from 'react';
//
// import lukeSkywalker from './luke-skywalker.jpg';
// import c3po from './c-3PO.png';
// import darthVader from './darth-vader.png';
// import leia from './leia.jpg';
// import obiWan from './ben-kenobi.png';
//
// const characters = [
//   {name: "Luke Skywalker", gender: "male", birthYear: "19BBY", height: "172", mass: "77", image: lukeSkywalker},
//   {name: "C-3PO", gender: "n/a", birthYear: "112BBY", height: "167", mass: "75", image: c3po},
//   {name: "Darth Vader", gender: "male", birthYear: "41.9BBY", height: "202", mass: "136", image: darthVader},
//   {name: "Leia Organa", gender: "female", birthYear: "19BBY", height: "150", mass: "49", image: leia},
//   {name: "Obi-Wan Kenobi", gender: "male", birthYear: "57BBY", height: "182", mass: "77", image: obiWan},
// ]
// function App() {
//   return (
//     <div className="App">
//       <div style={{textAlign: 'center', padding: '30px'}}>
//         <h1>Star Wars Characters</h1>
//         <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
//           {characters.map((character, index) => (
//               <div key={index} style={{margin: '10px', width: '200px'}}>
//                 <img src={character.image} alt={character.name}
//                      style={{width: '100%', height: 'auto', borderRadius: '10px'}}/>
//                 <div style={{padding: '10px'}}>
//                   <h3>{character.name}</h3>
//                   <p>{character.gender}</p>
//                   <p>{character.birthYear}</p>
//                   <p>{character.height}</p>
//                   <p>{character.mass}</p>
//                 </div>
//               </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
//
// export default App;


//Lesson 25//
import React, { Component } from "react";

class Voting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smiles: [
        {id: 1, smile: '😀', votes: 0},
        {id: 2, smile: '😊', votes: 0},
        {id: 3, smile: '😎', votes: 0},
        {id: 4, smile: '🤩', votes: 0},
        {id: 5, smile: '😍', votes: 0},
      ],
      result: null,
    };
  }

  componentDidMount() {
    const savedVotes = JSON.parse(localStorage.getItem('votes'));
    if (savedVotes) {
      this.setState({smiles: savedVotes});
    }
  }

  updateVotes = (id) => {
    const updatedVotes = this.state.smiles.map((smile) => {
      if (smile.id === id) {
        smile.votes += 1;
      }
      return smile;
    });
    this.setState({smiles: updatedVotes});
    localStorage.setItem('votes', JSON.stringify(updatedVotes));
  };

  showResults = () => {
    const winner = this.state.smiles.reduce((a, b) => (a.votes > b.votes ? a : b));
    this.setState({result: winner});
  }

  clearResults = () => {
    this.setState({
      smiles: [
        { id: 1, smile: "😀", votes: 0 },
        { id: 2, smile: "😊", votes: 0 },
        { id: 3, smile: "😎", votes: 0 },
        { id: 4, smile: "🤩", votes: 0 },
        { id: 5, smile: "😍", votes: 0 },
      ],
      result: null,
    });
    localStorage.removeItem('votes');
  };

  render() {

    return (
        <div>
          <h1>Голосування за смайлик</h1>
          <div>
            <button onClick={() => this.updateVotes(1)}>😀 {this.state.smiles[0].votes}</button>
            <button onClick={() => this.updateVotes(2)}>😊 {this.state.smiles[1].votes}</button>
            <button onClick={() => this.updateVotes(3)}>😎 {this.state.smiles[2].votes}</button>
            <button onClick={() => this.updateVotes(4)}>🤩 {this.state.smiles[3].votes}</button>
            <button onClick={() => this.updateVotes(5)}>😍 {this.state.smiles[4].votes}</button>
          </div>
          <button onClick={this.showResults}>Результат</button>
          <button onClick={this.clearResults}>Очистити</button>
          <div>
            {this.state.result ? `Переможець: ${this.state.result.smile} (${this.state.result.votes})` : null}
          </div>
        </div>
    );
  }
}

export default Voting;