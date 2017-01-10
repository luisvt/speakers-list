import React, { Component } from 'react';

class Search extends Component {

  handleChange(event) {
    this.props.onUserInput(event.target.value)
  }

  render() {
    return (
      <div>
        <h2>Search by name</h2>
        <input type="text" value={this.props.search} onChange={this.handleChange.bind(this)}/>
      </div>
    )
  }
}

export default Search;
