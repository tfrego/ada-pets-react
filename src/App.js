import React, { Component } from 'react';
import PetList from './components/PetList';
import PetCard from './components/PetCard'
import PetDetails from './components/PetDetails';
import SearchBar from './components/SearchBar';
import NewPetForm from './components/NewPetForm';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import pets from './data/pets.json';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      petList: pets,
      currentPet: undefined,
    };
  }

  onSelectPet = (petId) => {
    console.log('Pet Selected');

    const pet = this.state.petList.find( (pet) => {
      return pet.id === petId;
    })
    this.setState({
      currentPet: pet,
    })
  }

  onRemovePet = (petId) => {
    console.log('Pet Removed');

    const pet = this.state.petList.find( (pet) => {
      return pet.id === petId;
    })

    let updatedPetList = this.state.petList
    updatedPetList.splice( updatedPetList.indexOf(pet), 1 );

    this.setState({
      petList: updatedPetList,
    })
  }

  addPet = (newPet) => {
    const updatedPets = this.state.petList;
    updatedPets.push(newPet);

    this.setState({
      petList: updatedPets,
    })
  }

  render() {
    const { currentPet } = this.state;

    return (
      <main className="App">
        <header className="app-header">
          <h1>Ada Pets</h1>
        </header>
        <section className="search-bar-wrapper">
          { /* Wave 4:  Place to add the SearchBar component */ }
          <SearchBar />
        </section>
          { this.state.currentPet ? <PetDetails currentPet={currentPet} /> : "" }
        <section className="pet-list-wrapper">
          <PetList
            pets={this.state.petList}
            onSelectPetCallback={this.onSelectPet}
            onRemovePetCallback={this.onRemovePet}
          />
        </section>
        <section className="new-pet-form-wrapper">
          <NewPetForm addPetCallback={this.addPet} />
        </section>
      </main>
    );
  }
}

export default App;
