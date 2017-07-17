import React, { Component } from 'react';
//const Component = React.Component;

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { nilai: 'nilai awal' };
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.nilai}
          onChange={event => this.setState({ nilai: event.target.value })} />
        {/* Value of the input: {this.state.nilai} */}
      </div>
    );
  }

  // onInputChange(event) {
  //   console.log(event.target.value);
  // }
}

export default SearchBar;
