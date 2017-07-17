import React, { Component } from 'react';
//const Component = React.Component;

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
        {/* Value of the input: {this.state.term} */}
      </div>
    );
  }

  onInputChange(term){
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
  // onInputChange(event) {
  //   console.log(event.target.value);
  // }
}

export default SearchBar;
