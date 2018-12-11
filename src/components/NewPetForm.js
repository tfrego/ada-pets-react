import React, { Component } from 'react';
import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.min.css';
import './NewPetForm.css'

class NewPetForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      species: '',
      location: '',
      image: '',
      about: '',
    };
  }

  onNameChangeHandler = (event) => {
    this.setState({
      name: event.target.value,
    });
  }

  onSpeciesChangeHandler = (event) => {
    this.setState({
      species: event.target.value,
    });
  }

  onLocationChangeHandler = (event) => {
    this.setState({
      location: event.target.value,
    });
  }

  onImageChangeHandler = (event) => {
    this.setState({
      image: event.target.value,
    });
  }

  onAboutChangeHandler = (event) => {
    this.setState({
      about: event.target.value,
    });
  }

  onSubmitHandler = (event) => {
    event.preventDefault();
    this.props.addPetCallback(this.state);
    this.setState({
      name: '',
      species: '',
      location: '',
      image: '',
      about: '',
    });
  }

  render() {
    return (
      <form  className="new-pet-form" onSubmit={this.onSubmitHandler}>
        <h3>Add a Pet</h3>
        <label htmlFor="name" className="new-pet-form--label">Name</label>
        <input
          name="name"
          id="name"
          placeholder="name"
          value={this.state.name}
          onChange={this.onNameChangeHandler}
        />
        <label htmlFor="species" className="new-pet-form--label">Species</label>
        <input
          name="species"
          id="species"
          placeholder="species"
          value={this.state.species}
          onChange={this.onSpeciesChangeHandler}
        />
        <label htmlFor="location" className="new-pet-form--label">Location</label>
        <input
          name="location"
          id="location"
          placeholder="location"
          value={this.state.location}
          onChange={this.onLocationChangeHandler}
        />
        <label htmlFor="image" className="new-pet-form--label">Image</label>
        <input
          name="image"
          id="image"
          placeholder="image link"
          value={this.state.image}
          onChange={this.onImageChangeHandler}
        />
        <label htmlFor="about" className="new-pet-form--label">About</label>
        <input
          className="new-pet-form--about"
          name="about"
          id="about"
          value={this.state.about}
          onChange={this.onAboutChangeHandler}
        />
        <input className="btn btn-success new-pet-form--submit" type="submit" name="submit" value="Add a Pet" />
      </form>
    );
  }


}

NewPetForm.propTypes = {
  addPetCallback: PropTypes.func.isRequired,
};

export default NewPetForm;
