import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FolderIcon from '@material-ui/icons/Folder';
import { ThemeProvider } from '@material-ui/styles';
import { Container, CssBaseline, createMuiTheme } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';
import { Link } from "react-router-dom";
import axios from 'axios';
const API = 'http://localhost:5000/accountsbank/3';
const th = createMuiTheme({
    palette: {
        primary: { main: blue[500] }, // Purple and green play nicely together.
        secondary: { main: '#2196f3' }, // This is just green.A700 as hex.
    },
});


class ContentList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: "Default parent state"
        };
        this.childHandler = this.childHandler.bind(this);
        this.state = {
            hits: [],
          };
        this.classes = this.useStyles;
        
    }
     a = "Damh";
    getData(){
        return this.a;
        // do not forget to bind getData in constructo
    }
     useStyles = makeStyles(theme => ({
        root: {
            marginTop: theme.spacing(8),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        paper: {
            marginTop: theme.spacing(8),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        demo: {
            backgroundColor: theme.palette.background.paper,
        },
        title: {
            margin: theme.spacing(4, 0, 2),
        },
    }));
    childHandler(dataFromChild) {
        // log our state before and after we updated it
        console.log('%cPrevious Parent State: ' + JSON.stringify(this.state), "color:orange");
        this.setState({
            data: dataFromChild
        },() => console.log('Updated Parent State:', this.state));
    }
      componentDidMount() {
        fetch(API)
          .then(response => response.json())
          .then(data => this.setState({ hits: data.accountsbank[0] }));
          axios.get('http://localhost:5000/accountsbank/1')
            .then(function (response) {
                console.log(JSON.stringify(response.data.accountsbank[1]));})
            .catch(function (error) {
                console.log(error);})
            .then(function () {});
      }
    render(){
    const { hits } = this.state;
    console.log(JSON.stringify(hits));
    return (
        <ThemeProvider theme={th}>
            <Container component="main" maxWidth="md">
                <CssBaseline />
                <div className={this.classes.paper}>
                    <Grid container spacing={2}>
                    <Grid item xs={12} style={{height: '100px'}}></Grid>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h6" className={this.classes.title}>
                                Customer
          </Typography>
                            <div className={this.classes.demo}>
                                <List >
                                    <Link to='/customer/add' >
                                        <ListItem>
                                            <ListItemIcon>
                                                <FolderIcon />
                                            </ListItemIcon>
                                            <ListItemText
                                                primary="Add"
                                            />
                                        </ListItem>
                                    </Link>
                                    <Link to='/customer-list' >
                                        <ListItem>
                                            <ListItemIcon>
                                                <FolderIcon />
                                            </ListItemIcon>
                                            <ListItemText
                                                primary="List"
                                            />
                                        </ListItem>
                                    </Link>
                                </List>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h6" className={this.classes.title}>
                                Account Bank
          </Typography>
                            <div className={this.classes.demo}>
                                <List >

                                    <Link to='/accountbank-add'>
                                        <ListItem>
                                            <ListItemIcon>
                                                <FolderIcon />
                                            </ListItemIcon>
                                            <ListItemText
                                                primary="Add"
                                            />
                                        </ListItem>
                                    </Link>
                                    <Link to='/accountbank'>
                                        <ListItem>
                                            <ListItemIcon>
                                                <FolderIcon />
                                            </ListItemIcon>
                                            <ListItemText
                                                primary="List"
                                            />
                                        </ListItem>
                                    </Link>
                                </List>
                            </div>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h6" className={this.classes.title}>
                                Bills
          </Typography>
                            <div className={this.classes.demo}>
                                <List >

                                    <Link to='/bill-add'>
                                        <ListItem>
                                            <ListItemIcon>
                                                <FolderIcon />
                                            </ListItemIcon>
                                            <ListItemText
                                                primary="Add"
                                            />
                                        </ListItem>
                                    </Link>
                                    <Link to='/bill-list' >
                                        <ListItem>
                                            <ListItemIcon>
                                                <FolderIcon />
                                            </ListItemIcon>
                                            <ListItemText
                                                primary="List"
                                            />
                                        </ListItem>
                                    </Link>
                                </List>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h6" className={this.classes.title}>
                                User
          </Typography>
                            <div className={this.classes.demo}>
                                <List >
                                <Link to='/signin' >
                                    <ListItem>
                                        <ListItemIcon>
                                            <FolderIcon />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary="Sign In"
                                        />
                                    </ListItem>
                                    </Link>
                                    <Link to='/signup' >
                                    <ListItem>
                                        <ListItemIcon>
                                            <FolderIcon />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary="Sign Up"
                                        />
                                    </ListItem>
                                    </Link>
                                </List>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h6" className={this.classes.title}>
                                User
          </Typography>
                            <div className={this.classes.demo}>
                                { hits.account_bank_name }
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </ThemeProvider>
    );
}}
export default ContentList;