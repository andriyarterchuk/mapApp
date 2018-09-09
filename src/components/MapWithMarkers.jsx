import React from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

export default withScriptjs(withGoogleMap(props =>
  <GoogleMap
    defaultZoom={5}
    defaultCenter={{ lat: 50.4547, lng: 30.5238 }}
  >
    {props.coordinates.map(({ lat, lng }, index) => (
      <Marker
        key={index}
        position={{ lat, lng }}
      />
    ))}
  </GoogleMap>
));