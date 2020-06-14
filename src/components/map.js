import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker  } from 'google-maps-react';

const mapStyles = {
  width:  500,
  height: 400,
  margin : -5

};

class MapGoogle extends Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    return (
      <div>
        <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={{
            lat: this.props.latitude,
            lng: this.props.longitude
          }}
        >
         <Marker
          onClick={this.onMarkerClick}
          name={'This is test name'}
        />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBkDyO1oMNcefwxoDt7_5_u3_XIckqEO7Y'
})(MapGoogle);