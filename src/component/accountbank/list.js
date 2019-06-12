import React from 'react';
import MaterialTable from 'material-table';
import { Container, CssBaseline } from '@material-ui/core';
import axios from 'axios';
class ListAccountBank extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: [
                { title: 'Id', field: 'account_bank_id', hidden: true },
                { title: 'Account Bank Number', field: 'account_bank_number' },
                { title: 'Account Bank Name', field: 'account_bank_name' },
                { title: 'Account Bank Address', field: 'account_bank_address' },
                { title: 'Account Bank Swift', field: 'account_bank_swift' },
                { title: 'UserId', field: 'user_id', hidden: true },
            ],
            data: [
            ],
            users: []
        }

    }
    componentDidMount() {
        axios.get('http://localhost:5000/accountsbank/1')
            .then(response => {
                //   console.log(JSON.stringify(response.data));
                this.setState({ data: response.data.accountsbank });
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <Container component="main" maxWidth="lg">
                <CssBaseline />
                <div style={{ marginTop: '100px' }}>
                    <MaterialTable
                        title='Account Bank'
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
export default ListAccountBank;