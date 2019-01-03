import React, { Component } from 'react';
import Match from './components/Match';
import './App.css';
import axios from 'axios';
const URL = 'https://apifootball.com/api/?action=get_events&from=2018-12-26&to=2019-1-31&league_id=62&APIkey=1a9df061406d7abfccff89c4c2b15f26060d0a08d9091b1dc4a0e418a0f70158';


class App extends Component {
  state = {
    events: []
  };

  componentDidMount() {
    axios.get(URL).then(res => {
      const events = res.data;
      this.setState({ events});
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
         <h1>Football Scores</h1>
        </header>
        <Match matches={this.state.events} />
       { console.log(this.state.events)}
      </div>
    );
  }
}

export default App;
