import React, { Component } from 'react';

class TitleSubtitleImage extends Component {
  render() {
    const { states: { title, subtitle, imagePath }, onChange } = this.props;
    return (
      <div>
        <label htmlFor="title-input-label" data-testid="title-input-label">
          Título
          <input
            name="title"
            data-testid="title-input"
            value={ title }
            onChange={ onChange }
          />
        </label>
        <label htmlFor="subtitle-input-label" data-testid="subtitle-input-label">
          Subtítulo
          <input
            name="subtitle"
            data-testid="subtitle-input"
            value={ subtitle }
            onChange={ onChange }
          />
        </label>
        <label htmlFor="image-input-label" data-testid="image-input-label">
          Imagem
          <input
            type="text"
            name="imagePath"
            data-testid="image-input"
            value={ imagePath }
            onChange={ onChange }
          />
        </label>
      </div>
    );
  }
}

export default TitleSubtitleImage;
