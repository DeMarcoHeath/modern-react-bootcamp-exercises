import React from 'react';
import { withStyles } from '@material-ui/styles';
import { Emoji } from 'emoji-mart';
import styles from './styles/MiniPaletteStyles';

function MiniPalette(props) {
  const { classes, paletteName, emoji, id, colors } = props;
  const handleClick = () => props.handleClick(id);
  return (
    <div className={classes.root}>
      <div className={classes.inner} onClick={handleClick}>
        <div className={classes.colors}>
          {colors.map(c => (
            <div key={c.color} style={{ backgroundColor: c.color }} className={classes.smallColor} />
          ))}
        </div>
        <div className={classes.title}>
          <h3>{paletteName}</h3>
          <Emoji emoji={emoji} set="google" size={18} />
        </div>
      </div>
    </div>
  );
}

export default withStyles(styles)(MiniPalette);
