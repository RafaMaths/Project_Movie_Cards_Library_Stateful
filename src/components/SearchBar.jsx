import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label
          htmlFor="input-label"
          data-testid="text-input-label"
        >
          Inclui o texto:
          <input
            type="text"
            name="input-label"
            value={ searchText }
            onChange={ onSearchTextChange }
            data-testid="text-input"
          />
        </label>
        <label
          htmlFor="input-label2"
          data-testid="checkbox-input-label"
        >
          Mostrar somente favoritos
          <input
            type="checkbox"
            checked={ bookmarkedOnly }
            name="input-label2"
            onChange={ onBookmarkedChange }
            data-testid="checkbox-input"
          />
        </label>
      </form>
    );
  }
}

// SearchBar.propTypes = {
//   searchText: PropTypes.string.isReqired,
//   onSearchTextChange: PropTypes.func.isReqired,
//   bookmarkedOnly: PropTypes.bool.isReqired,
//   onBookmarkedChange: PropTypes.func.isReqired,
//   selectedGenre: PropTypes.string.isReqired,
//   onSelectedGenreChange: PropTypes.func.isReqired,
// }.isRequired;

export default SearchBar;
