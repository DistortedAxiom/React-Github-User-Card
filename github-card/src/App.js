import React from 'react';
import axios from 'axios';
import './App.css';

import UserCard from './components/UserCard';
import FollowerCard from './components/FollowerCard';
import SearchBar from './components/SearchBar'

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      user: 'DistortedAxiom',
      userdata: {},
      followers: [],
      userSearch: '',
    }
  }

  getUser() {
    axios.get(`https://api.github.com/users/${this.state.user}`)
    .then((res) => {
      this.setState({
        userdata: res.data
      })
    })
    .catch((err) => {
      console.log(err);
    })
  }

  getFollowers() {
    axios.get(`https://api.github.com/users/${this.state.user}/followers`)
    .then((res) => {
      this.setState({
        followers: res.data
      })
    })
  }

  changeHandler = (event) => {
    event.preventDefault();
    this.setState({
      userSearch: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({
      user: this.state.userSearch,
    })
  }

  componentDidMount() {
    this.getUser();
    this.getFollowers();
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.state.user !== prevState.user) {
      console.log(this.state.user)
      this.getUser();
      this.getFollowers();
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SearchBar changeHandler={this.changeHandler} value={this.state.userSearch} handleSubmit={this.handleSubmit}/>
          <UserCard user={this.state.user} />
          <div>
            <h2>Followers</h2>
            <FollowerCard followers={this.state.followers} />
          </div>
        </header>
      </div>
    );
  }

}

export default App
