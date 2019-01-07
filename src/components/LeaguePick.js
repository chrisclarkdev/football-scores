import React from "react";

class LeaguePick extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({ value: e.target.value });
    console.log(this.state.value);
  }
  render() {
    return (
      <header style={{ backgroundColor: "orange" }}>
        <form>
          <label className="picker">
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="62 Premier">Premier League</option>
              <option value="63 Championship">Championship</option>
              <option value="64 League 1">League 1</option>
              <option value="69 FA Cup">FA Cup</option>
            </select>
          </label>
        </form>
      </header>
    );
  }
}

export default LeaguePick;
