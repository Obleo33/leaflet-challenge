import React, { Component } from 'react';
import { Marker, Tooltip } from 'react-leaflet';
import L from 'leaflet';
import tealdot from '../imgs/tealdot.svg';

class MapMarker extends Component {
  constructor() {
    super();
    this.state = {
      selected: 0,
    };
  }

  handleClick(point) {
    this.props.addPoint(point.location);
  }

  render() {
    let icon = L.icon({
      iconUrl: tealdot,
      iconSize: [15, 15]
    });

    return (
      <div className="marker-container">
          <Marker
            position={this.props.location}
            icon={icon}
            onClick={ () => this.handleClick(this.props) }
          >
            <Tooltip
              sticky
              interactive
            >
              <div>
                <h4>{this.props.name}</h4>
              </div>
            </Tooltip>
          </Marker>
        </div>
    )
  }
}

export default MapMarker;
