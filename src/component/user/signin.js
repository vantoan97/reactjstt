   
import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import blue from '@material-ui/core/colors/blue';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import axios from 'axios';
import { Redirect } from 'react-router';
const th = createMuiTheme({
  palette: {
    primary: { main: blue[500] }, // Purple and green play nicely together.
    secondary: { main: '#2196f3' }, // This is just green.A700 as hex.
  },
});

function MadeWithLove() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Built with love by  '}
      <Link color="inherit" href="https://material-ui.com/">
        Nguyen Van Toan
      </Link>
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

class Signin extends React.Component   { 
  //const classes = useStyles();
  state = {
    user_username: '',
    user_password:'',
    
    redirectToReferrer: false,

  }
  

  handleChange = event => {
    const name =  event.target.name;
    if(name=="user_username") this.setState( {user_username: event.target.value});
    if(name=="user_password") this.setState( {user_password: event.target.value});
    
  }
  handleSubmit = event => {
    event.preventDefault();

    

    //console.log(user);

    axios.post('http://localhost:5000/listuser', this.state )
      .then(res => {
        console.log(res);
        console.log(res.data);
        this.setState({ redirectToReferrer: res.data.user });
        if(this.state.redirectToReferrer)  localStorage.setItem('username', this.state.user_username);
      });
    //if(this.state.redirectToReferrer)  localStorage.setItem('username', this.state.user_username);

  }

  render(){
    var n;
    if(this.state.redirectToReferrer) return <Redirect to="/customer-list" />;
    if( localStorage.getItem('username')) n= localStorage.getItem('username');
  return (
    <ThemeProvider theme={th}>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div  style={{marginTop: '70px',display: 'flex',flexDirection: 'column',alignItems: 'center',}}>
        <Avatar >
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form onSubmit={this.handleSubmit} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="User Name"
            name="user_username"
            type="text"
            onChange={this.handleChange}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="user_password"
            label="Password"
            type="password"
            id="password"
            onChange={this.handleChange}
            autoComplete="current-password"
          />
          <div>{n}</div>
          <FormControlLabel
            control={<Checkbox value="remember" color="secondary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password? 
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <MadeWithLove />
      </Box>
    </Container>
    </ThemeProvider>
  )
  }
};

export default Signin ;