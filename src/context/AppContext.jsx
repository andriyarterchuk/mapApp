import React from "react";
import openSocket from 'socket.io-client';

const AppContext = React.createContext({
  coordinates: [],
});
let socket;

class AppProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coordinates: [],
    };
  }

  componentDidMount() {
    socket = openSocket('http://localhost:3000');
    socket.on('coordinates', coordinates => {
      this.setState({ coordinates });
    });
    socket.emit('fetchCoordinates');
  }

  render() {
    const { coordinates } = this.state;
    return (
      <AppContext.Provider
        value={{
          coordinates
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

const AppConsumer = AppContext.Consumer;

export { AppProvider, AppConsumer };
