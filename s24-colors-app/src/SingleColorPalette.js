import React, { Component } from 'react';
import { Emoji } from 'emoji-mart';
import NavBar from './NavBar';
import ColorBox from './ColorBox';
import './SingleColorPalette.css';

export default class SingleColorPalette extends Component {
  constructor() {
    super();
    this.state = { mode: 'hex' };
    this.changeMode = this.changeMode.bind(this);
  }
  changeMode(mode) {
    this.setState({ mode });
  }
  render() {
    const { shades, paletteId, emoji, paletteName } = this.props;
    return (
      <div className="SingleColorPalette">
        <NavBar level={null} changeLevel={null} mode={this.state.mode} changeMode={this.changeMode} />
        <div className="SingleColorPalette-colors">
          {shades.map(c => (
            <ColorBox {...c} mode={this.state.mode} paletteId={paletteId} name={c.key} more={false} />
          ))}
        </div>
        <footer className="SingleColorPalette-footer">
          {paletteName}{' '}
          <span className="SingleColorPalette-footer-emoji">
            <Emoji emoji={emoji} set="google" size={20} />
          </span>
        </footer>
      </div>
    );
  }
}
