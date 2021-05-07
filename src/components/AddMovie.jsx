import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import TitleSubtitleImage from './StrutureOfForm/TitleSubtitleImage';
import StoryLineValuationGenre from './StrutureOfForm/StoryLineValuationGenre';

class AddMovie extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.handleClickAndReset = this.handleClickAndReset.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleClickAndReset() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  onChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  render() {
    // const { storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <TitleSubtitleImage states={ this.state } onChange={ this.onChange } />
        <StoryLineValuationGenre states={ this.state } onChange={ this.onChange } />
        <button
          data-testid="send-button"
          type="button"
          onClick={ this.handleClickAndReset }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: Proptype.func.isRequired,
};

export default AddMovie;
