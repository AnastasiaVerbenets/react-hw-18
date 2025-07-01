import Clock from './Clock/Clock';
import AppBar from './AppBar';
const { Component } = require('react');

export class App extends Component {
  render() {
    return (
      <div>
        {/* <Clock /> */}

        <AppBar />
      </div>
    );
  }
}
