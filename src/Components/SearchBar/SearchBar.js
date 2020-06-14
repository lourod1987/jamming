import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    state = {
      searchTerm: ''
    }
    this.search = this.search.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
  }

  search(searchTerm) {
    this.props.onSearch(searchTerm)
  }

  handleTermChange(e) {
    this.setState({
      searchTerm: e
    });
  }

  render() {
    return (
      <div className="SearchBar">
        <input placeholder="Enter A Song, Album, or Artist" onChange={e => this.handleTermChange(e.target.value)} />
        <button className="SearchButton">SEARCH</button>
      </div>
    );
  }
}

export default SearchBar;