import React, { Component } from 'react';

const reg = /^(\-?\d+(\.\d+)?)/;

// Latitude -90 and +90 
// Longitude -180 and +180

class Form extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
    };
  }


  submitForm(e, data) {
    e.preventDefault();
    this.validateLat(data)
    this.validateLng(data)
    this.props.saveLocation(data);
  }

  handleChange(e){
    let updateData = Object.assign({}, this.state.data, {[e.target.id]: e.target.value})
    this.setState({ data: updateData });
  }

  handleSubmit() {

  }

  // validateLat(data) {
  //   if (data.lat < -90 || data.lat > 90) {
  //     console.log('lat off');
  //     return (
  //       <div className="lat-warrning">Latitude must be between -90 and 90</div>
  //     )
  //   }
  // }

  // validateLng(data) {
  //   if (data.lng < -180 || data.lng > 180) {
  //     console.log('lng off');
  //     return (
  //       <div className="lng-warning">Longitude must be between -180 and 180</div>
  //     )
  //   }
  // }

  render() {
    return (
      <form className="form">
        <label>
          Name
          <input
            id="name"
            onChange={this.handleChange.bind(this)}
            ref={(input) => { this.name = input }}
            type="text"
            value={ this.state.data.name }
          />
        </label>
        <label>
          Lat
          <input
            id="lat"
            onChange={this.handleChange.bind(this)}
            ref={(input) => { this.lat = input }}
            type="number"
            value={ this.state.data.lat }
          />
        </label>
        { this.validateLat }
        <label>
          Lon
          <input
            id="lng"
            onChange={this.handleChange.bind(this)}
            ref={(input) => { this.lng = input }}
            type="number"/>
            value={ this.state.data.lng }
        </label>
        { this.validateLng }
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
