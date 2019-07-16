import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Switch from '@material-ui/core/Switch';

import { Emoji } from 'emoji-mart';

import styles from './styles/TodoStyles';

const useStyles = styles;

export default function SearchAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <div className={classes.flag}>
            <Emoji emoji="fr" set="google" size={20} aria-label="Language: fr" />
          </div>
          <Typography className={classes.title} variant="h6" noWrap>
            Login Page
          </Typography>
          <div className={classes.switch} >
            <Typography className={classes.p} variant="body1" noWrap>
              Theme
            </Typography>
            <Switch className={classes.switch} value="checkedF" color="default" onChange={null} inputProps={{ 'aria-label': 'Dark or light theme' }} />
          </div>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{ 'aria-label': 'Search' }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
