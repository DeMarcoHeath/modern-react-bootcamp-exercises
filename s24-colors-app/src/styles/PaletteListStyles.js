import sizes from './sizes';
import bg from './bg.svg';

export default {
  root: { backgroundColor: 'skyBlue', background:`url(${bg})`, height: '100vh', overflow: 'auto' },
  container: {
    width: '65%',
    margin: 'auto',
    [sizes.down('md')]: {
      width: '75%'
    },
    [sizes.down('sm')]: {
      width: '90%'
    }
  },
  nav: {
    color: 'white',
    textTransform: 'uppercase',
    letterSpacing: '.1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '& h1': {
      margin: 0,
      padding: '.5rem',
      fontSize: '1.3rem'
    },
    '& a': {
      textDecoration: 'none',
      color: 'white',
      display: 'inline-block',
      [sizes.down('sm')]: {
        display: 'block',
        fontSize: '.8rem'
      }
    },
    '& button': {
      color: '#FFE385',
      marginRight: 0,
      marginLeft: 'auto',
      display: 'inline-block',
      background: 'none',
      border: 'none',
      padding: 0,
      outline: 'none',
      textTransform: 'inherit',
      letterSpacing: 'inherit',
      fontSize: 'inherit',
      cursor: 'pointer',
      [sizes.down('sm')]: {
        display: 'block',
        fontSize: '.8rem'
      }
    }
  },
  links: {
    textAlign: 'right'
  },
  hideable: {
    [sizes.down('sm')]: {
      display: 'none'
    }
  }
};
