import React from 'react';
import { SortableElement } from 'react-sortable-hoc';
import { withStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import CopyIcon from '@material-ui/icons/FileCopy';
import styles from '../styles/DraggableBoxStyles';

function DraggableBox(props) {
  const { classes, color, name } = props;
  const removeColor = () => props.removeColor(name);
  const duplicateColor = () => props.duplicateColor({ color, name });
  return (
    <div className={classes.root} style={{ backgroundColor: color }}>
      <div className={classes.boxContent}>
        <span className={classes.duplicateIcon}>
          <CopyIcon onClick={duplicateColor} />
        </span>
        <span className={classes.name}>{name.length < 14 ? name : name.slice(0, 12) + '...'}</span>
        <span className={classes.deleteIcon}>
          <DeleteIcon onClick={removeColor} />
        </span>
      </div>
    </div>
  );
}

export default SortableElement(withStyles(styles)(DraggableBox));
