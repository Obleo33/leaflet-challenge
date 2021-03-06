/*eslint-disable no-unused-vars*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import MapMarker from '../containers/MapMarkerContainer';

class AllMarkers extends Component {
  render() {
    const markerArray = this.props.locations.map((marker) => {
      return (
        <MapMarker 
          key={marker.id}
          markerID={marker.id}
          location={[+marker.lat, +marker.lng]}
          name={marker.name}
        />
      );
    });

    return (
      <div className="paths-container">
        {markerArray}
      </div>
    );
  }
}

export default AllMarkers;
