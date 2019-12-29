import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
    state = {
        helloMessage: '',
    }

    componentDidMount() {
        axios.get('http://localhost:8080')
        .then(res => {
            this.setState({ helloMessage: res.data });
            console.log(res);
            console.log(res.data);
        })
    }

  render() {
    return (
      <div>
          <h1>{this.state.helloMessage}</h1>
      </div>
    )
  }
}
export default App;