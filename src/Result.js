import React, { Component } from 'react';

class Result extends Component {

  render() {
    return (
      <div className="result-container">
        <h3 className="title">
          {this.props.result.title}
        </h3>
        <p className="description">
          {this.props.result.description}
        </p>
        <a target="_blank" className="description" href={this.props.result.link}>
          {this.props.result.link}
        </a>
      </div>
    )
  }
}

export default Result;