import React, { Component } from 'react';

class Search extends Component {

  handleChange(event) {
    this.props.onUserInput(event.target.value)
  }

  render() {
    return (
      <section className="search">
        <form>
          <label htmlFor="search" className="ir">Search: </label>
          <input type="text" id="search" value={this.props.search} onChange={this.handleChange.bind(this)}/>
          <button className="button1">Search</button>
        </form>
      </section>
    )
  }
}

export default Search;
