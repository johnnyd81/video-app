import React, { Component } from "react";

export default class SearchBar extends Component {
  state = { term: "" };

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className="search-input">
        <form onSubmit={this.onFormSubmit} className="u">
          <div className="form-details">
            <label className="main-title">Video Player</label>
            <input
              type="text"
              value={this.state.term}
              placeholder="Enter search terms and click enter"
              onChange={this.onInputChange}
              className="term-input"
            />
          </div>
        </form>
      </div>
    );
  }
}
