import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      user: [],
      followers: []
    }
  }

  getFollowers() {
    axios.get("https://api.github.com/users/DistortedAxiom/followers")
    .then((res) => {
      this.setState({
        followers: res.data
      })
    })
  }

  componentDidMount() {
    axios.get("https://api.github.com/users/DistortedAxiom")
    .then((res) => {
      this.setState({
        user: res.data
      })
    })
    .catch((err) => {
      console.log(err);
    })
    this.getFollowers()
  }

  render() {
    console.log(this.state.user);
    console.log(this.state.followers);
    return (
      <div className="App">
        <header className="App-header">
        </header>
      </div>
    );
  }

}

export default App
