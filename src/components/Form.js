import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
      latValid: 0,
      lngValid: 0,
    };
  }

  submitForm(e, inputData) {
    e.preventDefault();
    this.props.addLocation(this.props.saveLocation(inputData))
    this.setState({ data: this.state.data = {} });
  }

  handleChange(e){
    let updateData = Object.assign({}, this.state.data, {[e.target.id]: e.target.value})
    this.setState({ data: updateData });
    // this.validateLat(this.state.latValid);
    // this.validateLng(this.state.lngValid);
  }

  // validateLat(data) {
  //   console.log(data);
  //   if (data.lat !== undefined && data.lat >= -90 || data.lat <= 90) {
  //     return this.setState({ latValid: true });
  //   } 

  //   return this.setState({ latValid: false });
  // }

  // validateLng(data) {
  //   if (data.lat === '' || data.lng >= -180 || data.lng <= 180) {
  //     return this.setState({ lngValid: true });
  //   } 
    
  //   return this.setState({ lngValid: false });
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
            value={ this.state.data.name || ''}
          />
        </label>
        <label>
          Lat
          <input
            id="lat"
            onChange={this.handleChange.bind(this)}
            ref={(input) => { this.lat = input }}
            type="number"
            value={ this.state.data.lat || '' }
          />
        </label>
        <label>
          Lon
          <input
            id="lng"
            onChange={this.handleChange.bind(this)}
            ref={(input) => { this.lng = input }}
            type="number"
            value={ this.state.data.lng || ''}
          />
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

          // { this.validateLng() && <div className="lng-warning">Longitude must be between -180 and 180</div>}
          // { this.validateLat() && <div className="lat-warrning">Latitude must be between -90 and 90</div>}
