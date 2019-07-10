import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import chroma from 'chroma-js';
import { withStyles } from '@material-ui/styles';

const lightColor = col => chroma(col).luminance() > 0.75;
const darkColor = col => chroma(col).luminance() < 0.2;

const styles = {
  ColorBox: {
    width: ({ single }) => (single ? '16.6666666666666666666666%' : '20%'),
    height: ({ single }) => (single ? '50%' : '25%'),
    cursor: 'pointer',
    position: 'relative',
    textTransform: 'uppercase',
    '&:hover $ColorBoxCopy': {
      opacity: 1
    }
  },
  ColorBoxMore: {
    color: ({ hex }) => (lightColor(hex) ? 'rgb(51, 51, 51)' : 'white'),
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    padding: '0.3rem',
    fontSize: '0.8rem',
    textDecoration: 'none'
  },
  ColorBoxOverlayBg: {
    width: '100%',
    height: '100%',
    opacity: 0,
    transform: 'scale(0.1)',
    transition: 'transform 0.6s ease-in-out',
    zIndex: 0,
    '&.show': {
      position: 'absolute',
      opacity: 1,
      transform: 'scale(50)',
      zIndex: 1
    }
  },
  ColorBoxOverlayText: {
    position: 'fixed',
    top: '40%',
    left: '-200%',
    textAlign: 'center',
    color: 'white',
    width: '500%',
    zIndex: 0,
    opacity: 0,
    transform: 'scale(0.1)',
    '& h3': {
      fontSize: '4rem',
      fontWeight: 'bold',
      backgroundColor: 'rgba(255, 255, 255, 0.25)',
      margin: 0,
      padding: '1rem',
      textShadow: '2px 2px rgba(0, 0, 0, 0.5)'
    },
    '& p': {
      color: ({ hex }) => (lightColor(hex) ? 'rgb(51, 51, 51)' : 'white'),
      fontWeight: 200,
      fontSize: '1.5rem'
    },
    '&.show': {
      transition: 'all 0.6s ease-in-out 0s',
      zIndex: 2,
      transform: 'scale(1)',
      opacity: 1
    }
  },
  ColorBoxCopy: {
    color: ({ hex }) => (lightColor(hex) ? 'rgb(51, 51, 51)' : 'white'),
    position: 'absolute',
    width: '5rem',
    height: '2rem',
    margin: '-1rem 0 0 -2.5rem',
    top: '50%',
    left: '50%',
    background: 'rgba(255, 255, 255, 0.25)',
    border: 'none',
    outline: 'none',
    fontFamily: 'inherit',
    fontWeight: 'bold',
    textTransform: 'inherit',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    opacity: 0
  },
  ColorBoxName: {
    color: ({ hex }) => (darkColor(hex) ? 'white' : 'rgb(51, 51, 51)'),
    position: 'absolute',
    bottom: 0,
    left: 0,
    padding: '0.3rem',
    fontSize: '0.7rem',
    letterSpacing: '0.1rem'
  }
};

class ColorBox extends Component {
  constructor() {
    super();
    this.state = { copying: false };
    this.startCopy = this.startCopy.bind(this);
  }
  startCopy() {
    this.setState({ copying: true }, () => {
      setTimeout(() => {
        this.setState({ copying: false });
      }, 800);
    });
  }
  render() {
    const { hex, mode, id, name, paletteId, classes, single } = this.props;
    const { copying } = this.state;

    const moreLink = (
      <Link className={classes.ColorBoxMore} to={`/palette/${paletteId}/${id}`} onClick={e => e.stopPropagation()}>
        More
      </Link>
    );
    return (
      <CopyToClipboard text={this.props[mode]} onCopy={this.startCopy}>
        <div className={classes.ColorBox} style={{ backgroundColor: hex }}>
          <div className={`${classes.ColorBoxOverlayBg} ${copying ? 'show' : ''}`} style={{ backgroundColor: hex }} />
          <div className={`${classes.ColorBoxOverlayText} ${copying ? 'show' : ''}`}>
            <h3>Copied!</h3>
            <p>{this.props[mode]}</p>
          </div>
          <button className={classes.ColorBoxCopy}>Copy</button>
          <span className={classes.ColorBoxName}>{name}</span>
          {!single && moreLink}
        </div>
      </CopyToClipboard>
    );
  }
}

export default withStyles(styles)(ColorBox);
