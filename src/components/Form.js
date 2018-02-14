import React, { Component } from 'react';

const reg = /^(\-?\d+(\.\d+)?)/;

class Form extends Component {
  submitForm(e, data) {
    e.preventDefault();
    this.props.saveLocation(data);
  }
  render() {
    return (
      <form className="form">
        <label>
          Name
          <input
            ref={(input) => { this.name = input }}
            type="text"
          />
        </label>
        <label>
          Lat
          <input
            ref={(input) => { this.lat = input }}
            type="number"
          />
        </label>
        <label>
          Lon
          <input
            ref={(input) => { this.lng = input }}
            type="number"/>
        </label>
        <button
          type="submit"
          onClick={(e) => this.submitForm(e, {
            name: this.name.value,
            lat: this.lat.value,
            lng: this.lng.value,
          })}
        >
            Save
        </button>
      </form>
    );
  }
}


export default Form;
