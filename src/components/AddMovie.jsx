import React, { Component } from 'react';
import TitleSubtitleImage from './TitleSubtitleImage';

class AddMovie extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      // genre: 'action',
    };
  }

  onChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  render() {
    // const { onClick } = this.props;
    const { storyline, rating } = this.state;
    return (
      <form data-testid="add-movie-form">
        <TitleSubtitleImage states={ this.state } onChange={ this.onChange } />
        <label htmlFor="storyline-input" data-testid="storyline-input-label">
          Sinopse
          <textarea
            data-testid="storyline-input"
            name="storyline"
            value={ storyline }
            onChange={ this.onChange }
          />
        </label>
        <label htmlFor="rating-input" data-testid="rating-input-label">
          Avaliação
          <input
            type="number"
            data-testid="rating-input"
            name="rating"
            value={ rating }
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
