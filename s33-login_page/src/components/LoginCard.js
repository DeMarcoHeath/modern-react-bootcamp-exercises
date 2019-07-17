import React, { useContext } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import LockIcon from '@material-ui/icons/Lock';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import ThemeContext from '../contexts/ThemeContext';
import styles from '../styles/LoginCardStyles';
import LanguageContext from '../contexts/LanguageContext';

const dictionary = {
  en: {
    signIn: 'Sign In',
    name: 'Name',
    insertYourName: 'Insert your name',
    password: 'Password',
    insertYourPassword: 'Insert your password',
    rememberMe: 'Remember me',
    language: 'Language'
  },
  fr: {
    signIn: 'Se Connecter',
    name: 'Nom',
    insertYourName: 'Insérez votre nom',
    password: 'Mot de passe',
    insertYourPassword: 'Insérez votre mot de passe',
    rememberMe: 'Souvienez-vous de moi',
    language: 'Langue'
  },
  es: {
    signIn: 'Iniciar Sesión',
    name: 'Nombre',
    insertYourName: 'Introduzca su nombre',
    password: 'Contraseña',
    insertYourPassword: 'Introduzca su contraseña',
    rememberMe: 'Recordarme',
    language: 'Idioma'
  }
};

export default () => {
  const { lang, selectLang } = useContext(LanguageContext);
  const { darkTheme } = useContext(ThemeContext);
  const classes = makeStyles(styles)();
  const words = dictionary[lang];

  return (
    <Card className={`${classes.card} ${darkTheme ? classes.dark : ''}`}>
      <CardContent>
        <Avatar className={classes.avatar}>
          <LockIcon />
        </Avatar>
        <Typography className={classes.title} variant="h4" component="h1">
          {words.signIn}
        </Typography>
        <FormControl className={classes.formControl}>
          <Select value={lang} onChange={selectLang} name="age" className={classes.select}>
            <MenuItem value="" disabled>
              {words.language}
            </MenuItem>
            <MenuItem value={'en'}>English</MenuItem>
            <MenuItem value={'fr'}>Français</MenuItem>
            <MenuItem value={'es'}>Español</MenuItem>
          </Select>
        </FormControl>
        <div className={classes.inputs}>
          <div className={classes.input}>
            <TextField
              label={words.name}
              placeholder={words.insertYourName}
              fullWidth
              InputLabelProps={{
                shrink: true
              }}
            />
          </div>
          <div className={classes.input}>
            <TextField
              label={words.password}
              placeholder={words.insertYourPassword}
              type="password"
              fullWidth
              InputLabelProps={{
                shrink: true
              }}
            />
          </div>
          <FormControlLabel
            className={classes.input}
            control={<Checkbox checked={true} onChange={null} color="primary" />}
            label={words.rememberMe}
          />
          <div className={classes.input}>
            <Button variant="contained" color="primary" className={classes.button}>
              {words.signIn}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
