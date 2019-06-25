import React, { Component } from 'react';
import './Joke.css';

export default class Joke extends Component {
  constructor(props) {
    super(props);
    this.rateUp = this.rateUp.bind(this);
    this.rateDown = this.rateDown.bind(this);
  }
  static defaultProps = {
    smileys: {
      '-11': '🤬',
      '-10': '😡',
      '-9': '😤',
      '-8': '😠',
      '-7': '😭',
      '-6': '😰',
      '-5': '😢',
      '-4': '😖',
      '-3': '😞',
      '-2': '😒',
      '-1': '🙁',
      '0': '🙄',
      '1': '😑',
      '2': '😌',
      '3': '🙃',
      '4': '😏',
      '5': '😜',
      '6': '🤗',
      '7': '😅',
      '8': '😁',
      '9': '😆',
      '10': '😂',
      '11': '🤣',
      '12': '🤯'
    }
  };
  rateUp() {
    this.props.rate(this.props.id, +1);
  }
  rateDown() {
    this.props.rate(this.props.id, -1);
  }
  getRGB(rating) {
    if (rating > 0) return `${200 - rating * 20},200,0`;
    return `200,${200 - rating * -20},0`;
  }
  render() {
    const { rating, joke, smileys } = this.props;
    return (
      <div className="Joke">
        <div className="Joke-left">
          <button onClick={this.rateDown} className="Joke-arrow">
            ⬇
          </button>
          <div className="Joke-rating" style={{ border: `3px solid rgb(${this.getRGB(rating)})` }}>
            {rating}
          </div>
          <button onClick={this.rateUp} className="Joke-arrow">
            ⬆
          </button>
        </div>
        <div className="Joke-text">{joke}</div>
        <div className="Joke-emoji">
          <span role="img" aria-label="">
            {smileys[Math.min(Math.max(rating, -11), 12).toString()]}
          </span>
        </div>
      </div>
    );
  }
}
