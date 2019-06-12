import React from 'react';
import MaterialTable from 'material-table';
import { Container, CssBaseline } from '@material-ui/core';
import axios from 'axios';
class ListCustomer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: [
                { title: 'Id', field: 'customer_id', hidden: true },
                { title: 'Name', field: 'customer_name' },
                { title: 'Email', field: 'customer_email' },
                { title: 'Phone Number', field: 'customer_number_phone' },
                { title: 'Address', field: 'customer_address' },
                { title: 'UserId', field: 'customer_details_id', hidden: true },
            ],
            data: [
            ],
            users: []
        }

    }
    componentDidMount() {
        axios.get('http://localhost:5000/customers')
            .then(response => {
                //   console.log(JSON.stringify(response.data));
                this.setState({ data: response.data.customers });
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <Container component="main" maxWidth="lg">
                <CssBaseline />
                <div style={{ marginTop: '100px' }}>
                    <MaterialTable
                        title='List Customer'
                        columns={this.state.columns}
                        data={this.state.data}
                        editable={{
                            onRowAdd: newData =>
                                new Promise((resolve, reject) => {
                                    setTimeout(() => {
                                        {
                                            const data = this.state.data;
                                            data.push(newData);
                                            this.setState({ data }, () => resolve());
                                        }
                                        resolve()
                                    }, 1000)
                                }),
                            onRowUpdate: (newData, oldData) =>
                                new Promise((resolve, reject) => {
                                    setTimeout(() => {
                                        {
                                            const data = this.state.data;
                                            const index = data.indexOf(oldData);
                                            data[index] = newData;
                                            this.setState({ data }, () => resolve());
                                        }
                                        resolve()
                                    }, 1000)
                                }),
                            onRowDelete: oldData =>
                                new Promise((resolve, reject) => {
                                    setTimeout(() => {
                                        {
                                            let data = this.state.data;
                                            const index = data.indexOf(oldData);
                                            data.splice(index, 1);
                                            this.setState({ data }, () => resolve());
                                        }
                                        resolve()
                                    }, 1000)
                                }),
                        }}
                    />
                </div>
            </Container>
        )
    }
}
export default ListCustomer;