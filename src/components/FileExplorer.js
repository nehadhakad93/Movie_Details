import React, { Component } from 'react';
import MovieName from './MovieName';

export default class FileExplorer extends Component {
  state = {
    selectedFile: null,
  };

  onSelect = (file) => this.setState({ selectedFile: file });

  render() {
    return (
      <React.Fragment>
        <MovieName onSelect={this.onSelect} />
      </React.Fragment>
    )
  }
}