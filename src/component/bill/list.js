import React from 'react';
import MaterialTable from 'material-table';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(10),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }
}));

   


class ListBill extends React.Component {
    //const classes} = useStyles();
   
    constructor(props) {
        super(props);
        this.state = {
            columns: [
                { title: 'Bill ID', field: 'bill_id' ,hidden : true},
                { title: 'Monthly', field: 'bill_monthly_cost' },
                { title: 'Customer', field: 'customer_name' },
                { title: 'Status', field: 'status_bill_name' },
                { title: 'Sum', field: 'bills_sum',type: 'numeric' },
                { title: 'People Enter The Bill', field: 'user_username' },
                { title: 'Date', field: 'bill_date' },
            ],
            data: [
                
            ],
        }
      }
    // axios.get('http://localhost:5000/bills/list')
    // .then(function (response) {
    //     const datasql=response.data.bill;
    //     //console.log(response.data.accountsbank[1]);
    //     this.setState({ datasql });
    // })
    // .catch(function (error) {
    //     console.log(error);})
    // .then(function () {});

    //console.log(datasql);
    componentDidMount() {
        axios.get('http://localhost:5000/bills/list')
        .then(response => {
            //   console.log(JSON.stringify(response.data));
            this.setState({ data: response.data.bill });
        })
        .catch(err => console.log(err));
      }
    
    render() {
        
    return (
        <Container component="main">
            <CssBaseline />
            <div style={{marginTop: '100px'}}>
                <MaterialTable
                    title="List Bill"
                    columns={this.state.columns}
                    data={this.state.data}
                    editable={{
                        onRowDelete: oldData =>
                            new Promise(resolve => {
                                setTimeout(() => {
                                    resolve();
                                    const data = [...this.state.data];
                                    data.splice(data.indexOf(oldData), 1);
                                    this.setState({ ...this.state, data });
                                }, 600);
                            }),
                    }}
                    actions={[
                        {
                            icon: 'edit',
                            tooltip: 'Edit Bill',
                            onClick: (event, rowData) => alert("Edit bill of " + rowData.customer)
                        }

                    ]}
                />
            </div>
        </Container>
    );
}
}

export default ListBill;