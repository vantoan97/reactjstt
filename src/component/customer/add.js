import React  from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/AccountCircleSharp';
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
        Nguyen Van Dang
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
    backgroundColor: '#2196f3',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

//class = useStyles();

class AddCustomer extends React.Component   {
  state = {
    customer_name: '',
    customer_address:'',
    customer_email:'',
    customer_number_phone:'',
    customer_details_company:'',
    customer_details_project:'',
    customer_details_country:'',
    customer_details_note:'',
    redirectToReferrer: false,

  }
  

  handleChange = event => {
    const name =  event.target.name;
    if(name=="customer_name") this.setState( {customer_name: event.target.value});
    if(name=="customer_address") this.setState( {customer_address: event.target.value});
    if(name=="customer_email") this.setState( {customer_email: event.target.value});
    if(name=="customer_number_phone") this.setState( {customer_number_phone: event.target.value});
    if(name=="customer_details_company") this.setState( {customer_details_company: event.target.value});
    if(name=="customer_details_project") this.setState( {customer_details_project: event.target.value});
    if(name=="customer_details_country") this.setState( {customer_details_country: event.target.value});
    if(name=="customer_details_note") this.setState( {customer_details_note: event.target.value});
  }

  handleSubmit = event => {
    event.preventDefault();

    

    //console.log(user);

    axios.post(`http://localhost:5000/customers/add`, this.state )
      .then(res => {
        console.log(res);
        console.log(res.data);
        this.setState({ redirectToReferrer: true });
      });
      

      //return <Redirect to="/customer-list" />;
  }
  
  render(){
    if(this.state.redirectToReferrer) return <Redirect to="/customer-list" />;
  return (
    <ThemeProvider theme={th}>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div style={{marginTop: '70px',display: 'flex',flexDirection: 'column',alignItems: 'center'}}>
        <Avatar /*className={classes.avatar}*/>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Add a customer
        </Typography>
        <form onSubmit={this.handleSubmit} noValidate>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <TextField
                autoComplete="fname"
                name="customer_name"
                variant="outlined"
                required
                margin="dense"
                fullWidth
                id="name"
                label="Name"
                onChange={this.handleChange}
                autoFocus
              />
              <div>{this.state.customer_name}</div>
            </Grid>
            <Grid item xs={12} >
              <TextField
                variant="outlined"
                required
                fullWidth
                id="address"
                label="Address"
                margin="dense"
                name="customer_address"
                onChange={this.handleChange}
                autoComplete="lname"
              />
               <div>{this.state.customer_address}</div>
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                margin="dense"
                id="email"
                label="Email Address"
                name="customer_email"
                onChange={this.handleChange}
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                margin="dense"
                id="phoneNumber"
                label="Phone Number"
                name="customer_number_phone"
                onChange={this.handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                margin="dense"
                id="company"
                label="Company"
                name="customer_details_company"
                onChange={this.handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                margin="dense"
                id="projecr"
                label="Project"
                name="customer_details_project"
                onChange={this.handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                margin="dense"
                id="country"
                label="Country"
                name="customer_details_country"
                onChange={this.handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                margin="dense"
                id="note"
                label="Note"
                name="customer_details_note"
                onChange={this.handleChange}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            /*className={classes.submit}*/
          >
            Save
          </Button>
        </form>
      </div>
      <Box mt={5}>
        <MadeWithLove />
      </Box>
    </Container>
    </ThemeProvider>
  );
  }
}
export default AddCustomer ;