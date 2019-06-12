import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import blue from '@material-ui/core/colors/blue';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import logo from './logotma.png';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import MaterialTable from 'material-table';
import InputLabel from '@material-ui/core/InputLabel';
const th = createMuiTheme({
    palette: {
        primary: { main: blue[500] }, // Purple and green play nicely together.
        secondary: { main: '#2196f3' }, // This is just green.A700 as hex.
    },
});

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
    p: {
        alignItems: 'right',
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
    input: {
        margin: theme.spacing(0),
    },
}));
const AddBill = () => {
    const classes = useStyles();
    const [age, setAge] = React.useState(10);
    const [account, setAccount] = React.useState(20);
    const [open, setOpen] = React.useState(false);
    const [openAccount, setOpenAccount] = React.useState(false);

    function handleChange(event) {
        setAge(event.target.value);
    }

    function handleClose() {
        setOpen(false);
    }

    function handleOpen() {
        setOpen(true);
    }
    
    function handleChangeAccount(event) {
        setAccount(event.target.value);
    }

    function handleCloseAccount() {
        setOpenAccount(false);
    }

    function handleOpenAccount() {
        setOpenAccount(true);
    }
    const [state, setState] = React.useState({
        columns: [
            { title: 'Description', field: 'description' },
            { title: 'Payment Amount in USD', field: 'paymentAmount', type: 'numeric' },
        ],
        data: [
            { description: 'Buy Laptop', paymentAmount: 400 },
            { description: 'Buy LCD', paymentAmount: 100 },
            { description: 'Buy Router', paymentAmount: 50 },
        ],
    });
    return (
        <ThemeProvider theme={th}>
            <Container component="main" maxWidth="md" style={{ backgroundColor: 'white' }} >
                <CssBaseline />
                <main className={classes.contentShift}>
                    <div className={classes.paper}>
                        <Grid container spacing={3}>
                            <Grid item xs={3} style={{ height: '150px' }} justify-xs-space-between="true"	>
                                <img src={logo} width="150px" alt="vvn"/>
                            </Grid>
                            <Grid item xs={9} style={{ height: '100px' }} justify-xs-space-between="true"	>
                                <Typography style={{ fontSize: '15px', fontWeight: 'bold' }} align='right'>&nbsp;&nbsp;</Typography>
                                <Typography style={{ fontSize: '15px', fontWeight: 'bold' }} align='right'>TUONG MINH SOFTWARE SOLUTIONS COMPANY LIMITED (TMA SOLUTIONS CO., LTD)</Typography>
                                <Typography style={{ fontSize: '15px', fontWeight: 'bold' }} align='right'>Address: 111 Nguyen Dinh Chinh, Phu Nhuan Dist., Ho Chi Minh City, Vietnam</Typography>
                                <Typography style={{ fontSize: '15px', fontWeight: 'bold' }} align='right'>Phone: +84 28 3997 8000 - E-mail: tma@tma.com.vn</Typography>
                            </Grid>
                            <Grid item xs={12} style={{ height: '20px' }}>
                            </Grid>
                            <Grid item xs={3} style={{ height: '100px' }}>
                                <Typography variant="h4" style={{ fontWeight: 'bold' }}>INVOICE</Typography>
                            </Grid>
                            <Grid item xs={9} style={{ height: '130px' }} className="border border-primary">
                                <div className="row">
                                    <div className="col-sm-8" style={{ fontWeight: 'bold' }}>TMA reference number:</div>
                                    <div className="col-sm-4" >
                                        <Input
                                            defaultValue="AUG2017CUS"
                                            className={classes.input}
                                            inputProps={{
                                                'aria-label': 'Description',
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-8" style={{ fontWeight: 'bold' }}>PO No</div>
                                    <div className="col-sm-4" >
                                        <Input
                                            defaultValue="1101043286"
                                            className={classes.input}
                                            inputProps={{
                                                'aria-label': 'Description',
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-8" style={{ fontWeight: 'bold' }}>Date:</div>
                                    <div className="col-sm-4" > <Input
                                        type="date"
                                        defaultValue="2017-05-24"

                                        className={classes.input}
                                        inputProps={{
                                            'aria-label': 'Description',
                                        }}
                                    /></div>
                                </div>
                            </Grid>
                            <Grid item xs={12} style={{ height: '20px' }}></Grid>
                            <Grid item xs={4} >
                                <div className="row">
                                    <div className="col-sm-4" style={{ fontWeight: 'bold' }}>To:</div>
                                    <div className="col-sm-8" >
                                        <FormControl className={classes.formControl}>
                                            <Select
                                                open={open}
                                                onClose={handleClose}
                                                onOpen={handleOpen}
                                                value={age}
                                                onChange={handleChange}
                                                inputProps={{
                                                    name: 'age',
                                                    id: 'demo-controlled-open-select',
                                                }}
                                            >
                                                <MenuItem value={10}>Nguyễn Văn Toàn</MenuItem>
                                                <MenuItem value={20}>Nguyễn Văn Đặng</MenuItem>
                                                <MenuItem value={30}>Nguyễn Nhựt Tín</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-4" style={{ fontWeight: 'bold' }}></div>
                                    <div className="col-sm-8" >
                                        <Input
                                            defaultValue="Hà Nội"
                                            disabled
                                            className={classes.input}
                                            inputProps={{
                                                'aria-label': 'Description',
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12" style={{ height: '10px' }}></div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-4" style={{ fontWeight: 'bold' }}></div>
                                    <div className="col-sm-8" style={{ fontWeight: 'bold' }}>PO No: 1101043286</div>
                                </div>
                            </Grid>
                            <Grid item xs={8} >
                            </Grid>
                            <Grid item xs={12} >
                                <div style={{ fontWeight: 'bold' }}>Description:</div>
                            </Grid>
                            <Grid item xs={6} align-content-xs-flex-end="true" >
                                <Typography style={{ fontWeight: 'bold', fontSize: '20px' }} align="right">Monthly cost for</Typography>
                            </Grid>
                            <Grid item xs={6} >
                                <Typography style={{ fontWeight: 'bold', fontSize: '20px' }} align="left">
                                    <Input
                                        type="month"
                                        defaultValue="2019-06"

                                        className={classes.input}
                                        inputProps={{
                                            'aria-label': 'Description',
                                        }} />
                                </Typography>
                            </Grid>
                            <Grid item xs={12} >
                                <MaterialTable
                                    title=" "
                                    columns={state.columns}
                                    data={state.data}
                                    editable={{
                                        onRowAdd: newData =>
                                            new Promise(resolve => {
                                                setTimeout(() => {
                                                    resolve();
                                                    const data = [...state.data];
                                                    data.push(newData);
                                                    setState({ ...state, data });
                                                }, 600);
                                            }),
                                        onRowUpdate: (newData, oldData) =>
                                            new Promise(resolve => {
                                                setTimeout(() => {
                                                    resolve();
                                                    const data = [...state.data];
                                                    data[data.indexOf(oldData)] = newData;
                                                    setState({ ...state, data });
                                                }, 600);
                                            }),
                                        onRowDelete: oldData =>
                                            new Promise(resolve => {
                                                setTimeout(() => {
                                                    resolve();
                                                    const data = [...state.data];
                                                    data.splice(data.indexOf(oldData), 1);
                                                    setState({ ...state, data });
                                                }, 600);
                                            }),
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} style={{ height: '20px' }}></Grid>
                            <Grid item xs={12}>
                                <div className="row">
                                    <div className="col-sm-4" style={{ fontWeight: 'bold' }}>Total amount to be paid:</div>
                                    <div className="col-sm-8" style={{ fontWeight: 'bold' }}>214</div>
                                </div>
                            </Grid>
                            <Grid item xs={12} >
                            <Typography style={{ fontSize: '15px', fontWeight: 'bold' }} align='left'>Please pay by WIRE TRANSFER the above amount to our account:</Typography>
                            </Grid>
                            <Grid item xs={12} >
                            <div className="row border border-primary" style={{ height: '220px'}}>
                                    <div className="col-sm-4" style={{ fontWeight: 'bold' }}>Name on account :</div>
                                    <div className="col-sm-8" style={{ fontWeight: 'bold' }}>TMA Solutions Co., LTD</div>
                                    <div className="col-sm-4" style={{ fontWeight: 'bold' }}>Account number  :</div>
                                    <div className="col-sm-8" style={{ fontWeight: 'bold' }}>
                                    <FormControl className={classes.formControl}>
                                            <Select
                                                open={openAccount}
                                                onClose={handleCloseAccount}
                                                onOpen={handleOpenAccount}
                                                value={account}
                                                onChange={handleChangeAccount}
                                                inputProps={{
                                                    name: 'account',
                                                    id: 'demo-controlled-open-select',
                                                }}
                                            >
                                                <MenuItem value={10}>0123456</MenuItem>
                                                <MenuItem value={20}>1234567</MenuItem>
                                                <MenuItem value={30}>7894561</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </div>
                                    <div className="col-sm-4" style={{ fontWeight: 'bold' }}>Account Name :</div>
                                    <div className="col-sm-8">
                                    <Input
                                            defaultValue="ACB"
                                            disabled
                                            className={classes.input}
                                            inputProps={{
                                                'aria-label': 'Description',
                                            }}
                                        />
                                    </div>
                                    <div className="col-sm-4" style={{ fontWeight: 'bold' }}></div>
                                    <div className="col-sm-8" >
                                    <Input
                                            defaultValue="Hà Nội"
                                            disabled
                                            className={classes.input}
                                            inputProps={{
                                                'aria-label': 'Description',
                                            }}
                                        />
                                    </div>
                                    <div className="col-sm-4" style={{ fontWeight: 'bold' }}></div>
                                    <div className="col-sm-8" style={{ fontWeight: 'bold' }}>
                                    <FormControl className={classes.formControl}>
                                    <InputLabel htmlFor="formatted-text-mask-input">SWIFT code</InputLabel>
                                        <Input
                                            defaultValue="789"
                                            disabled
                                            className={classes.input}
                                            inputProps={{
                                                'aria-label': 'Description',
                                            }}
                                        />
                                        </FormControl></div>
                                    <div className="col-sm-4" style={{ fontWeight: 'bold' }}>Tel:</div>
                                    <div className="col-sm-8" style={{ fontWeight: 'bold' }}>+84-28 38292288</div>
                                    <div className="col-sm-4" style={{ fontWeight: 'bold' }}>Fax:</div>
                                    <div className="col-sm-8" style={{ fontWeight: 'bold' }}>+84-28 38230530</div>
                                </div>
                            </Grid>
                            <Grid item xs={12} >
                            <Typography style={{ fontSize: '15px', fontWeight: 'bold' }} align='left'><br/>Your sincerely</Typography>
                            </Grid>
                            <Grid item xs={12} style={{height:"50px"}}>
                            </Grid>
                            <Grid item xs={12} >
                            <Typography style={{ fontSize: '15px', fontWeight: 'bold' }} align='left'>Pham Ngoc Nhu Duong</Typography>
                            <Typography style={{ fontSize: '15px', fontWeight: 'bold' }} align='left'>CFO</Typography>
                            <Typography style={{ fontSize: '15px', fontWeight: 'bold' }} align='left'>Tel: +84 28 3997 8000, extension: 5211</Typography>
                            <Typography style={{ fontSize: '15px', fontWeight: 'bold' }} align='left'>Email: pnnduong@tma.com.vn</Typography>
                            </Grid> 
                        </Grid>
                    </div>
                </main>
            </Container>
        </ThemeProvider>
    );
}
export default AddBill;