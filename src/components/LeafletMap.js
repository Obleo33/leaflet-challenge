import React, { Component } from 'react';
import { Map, TileLayer, ZoomControl, Polygon } from 'react-leaflet';
import AllMarkers from '../containers/AllMarkersContainer';

class LeafletMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  makePolygon(arr) {
    if (arr.length) {
      return arr.reduce((polygonArr, point) => {
        polygonArr.push(point.location)
        return polygonArr
      },[]) 
    }
  }

  render() {
      const polygon = this.makePolygon(this.props.polygonArr) || []
    return (
      <div className="map-container">
        <Map
          className="map"
          zoomControl={false}
          center={[39.750809, -104.996810]}
          zoom={4}
          maxBounds={[[85, 100], [-85, -280]]}
        >
          <TileLayer
            url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
            attribution='Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
            maxZoom={10}
            minZoom={2}
          />
          <ZoomControl
            position="bottomright"
          />
          <Polygon color="purple" positions={polygon}/> 
          <AllMarkers />
        </Map>
      </div>
    );
  }
}

export default LeafletMap;