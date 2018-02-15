import React, { Component } from 'react';
import LeafletMap from '../containers/LeafletMapContainer';
import FormContainer from '../containers/FormContainer';

class App extends Component {
  componentDidMount() {
    this.getLocations();
  }
  getLocations() {
    this.props.fetchAllLocations();
  }

  render() {
    console.log(this.props);
    return (
      <div className="App">
        <FormContainer />
        <LeafletMap locations={this.props.locations} />
      </div>
    );
  }
}

export default App;



// var polygon = L.polygon([
//     [51.509, -0.08],
//     [51.503, -0.06],
//     [51.51, -0.047]
// ]).addTo(mymap);