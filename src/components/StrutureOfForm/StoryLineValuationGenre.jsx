import React, { Component } from 'react';
import PropTypes from 'prop-types';

class StoryLineValuationGenre extends Component {
  render() {
    const { states: { storyline, rating, genre }, onChange } = this.props;
    return (
      <div>
        <label htmlFor="storyline-input" data-testid="storyline-input-label">
          Sinopse
          <textarea
            data-testid="storyline-input"
            name="storyline"
            value={ storyline }
            onChange={ onChange }
          />
        </label>
        <label htmlFor="rating-input" data-testid="rating-input-label">
          Avaliação
          <input
            type="number"
            data-testid="rating-input"
            name="rating"
            value={ rating }
            onChange={ onChange }
          />
        </label>
        <label
          data-testid="genre-input-label"
          value="selectedGenre"
          htmlFor="genre-input"
        >
          Gênero
          <select
            data-testid="genre-input"
            name="genre"
            value={ genre }
            onChange={ onChange }
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
      </div>
    );
  }
}

StoryLineValuationGenre.propTypes = {
  storytitle: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  genre: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}.isRequired;

export default StoryLineValuationGenre;
