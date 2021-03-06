import React, { Component } from "react";
import Match from "./components/Match";
import "./App.css";
import axios from "axios";
const dateFrom = "2019-1-1";
const dateTo = "2019-1-13";
const league_id = "62";
const URL = `https://apifootball.com/api/?action=get_events&from=${dateFrom}&to=${dateTo}&league_id=${league_id}&APIkey=1a9df061406d7abfccff89c4c2b15f26060d0a08d9091b1dc4a0e418a0f70158`;

class App extends Component {
  state = {
    events: []
  };

  componentDidMount() {
    axios.get(URL).then(res => {
      const events = res.data;
      this.setState({ events });
      console.log(res.request.status);
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Football Scores</h1>
        </header>
        <Match matches={this.state.events} />
      </div>
    );
  }
}

export default App;
