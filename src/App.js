import React, { Component } from 'react';
import { AppProvider, AppConsumer } from "./context/AppContext";
import MapWithMarkers from './components/MapWithMarkers'

class App extends Component {
  render() {
    return (
      <AppProvider>
        <AppConsumer>
          {({ coordinates }) => (
            <div>
              <MapWithMarkers
                googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `100vh` }} />}
                mapElement={<div style={{ height: `100%` }} />}
                coordinates={coordinates}
              />
            </div >
          )
          }
        </AppConsumer>
      </AppProvider>
    );
  }
}

export default App;
