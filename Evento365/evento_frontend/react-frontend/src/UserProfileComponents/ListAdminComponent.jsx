import React, { Component } from 'react';
import AdminService from '../UserServices/AdminService';
import Grid from '@material-ui/core/Grid';


class ListAdminComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            admin: [],
            keyword: ''
        }



        this.addAdmin = this.addAdmin.bind(this);
        this.editAdmin = this.editAdmin.bind(this);
        this.deleteAdmin = this.deleteAdmin.bind(this);
    }

    deleteAdmin(id) {

        AdminService.deleteAdmin(id).then(res => {
            this.setState({ admin: this.state.admin.filter(admin => admin.id !== id) });
        });
    }

    confirmation(id) {
        var result = window.confirm("Are you sure to delete?");
        if (result) {
            AdminService.deleteAdmin(id).then(res => {
                this.setState({ admin: this.state.admin.filter(admin => admin.id !== id) });
            });
        }
    }

    viewAdmin(id) {
        this.props.history.push(`/view-admin/${id}`);
    }

    editAdmin(id) {
        this.props.history.push(`/add-admin/${id}`);
    }

    componentDidMount() {
        AdminService.getAdmins().then((res) => {
            this.setState({ admin: res.data });
        });
    }

    addAdmin() {
        this.props.history.push('/add-admin/_addadmin');
    }


    search(val) {
        AdminService.searchAdmin(val).then((res) => {
            this.setState({ admin: res.data });
            console.log(res.data);
        });
        if (this.keyword == "") {
            this.componentDidMount();
        } else if (this.keyword == undefined) {
            this.componentDidMount();
        }
    }

    keywordhandle(event) {
        this.keyword = event.target.value;

    }

    searchbuttonhandle(event) {
        this.search(this.keyword);

    }


    render() {
        return (
            <div style={{ width: '100%' }}>
                <br /><br /> <br /> <br /> <br /> <br />
                <h2 className="text-center">EVENTO 365 - ADMIN INFORMATION</h2>
                <br /> <br /><br />

                <Grid container spacing={2} justify="center">
                    <div className="row">
                        
                            <button className="userButtons" style={{ width: '1500px' }} onClick={this.addAdmin}>Add Admin</button>
                        
                       < br /> <br /><br />
                    </div>
                    <div >
                        <input type="text" name="searchBox" onChange={this.keywordhandle.bind(this)} className="searchBox" style={{marginLeft:'1000px'}}/>
                        <button onClick={this.searchbuttonhandle.bind(this)} className="userButtons" style={{ marginLeft: '5px', width: '100px', height: '30px' }} >Search</button>
                    </div>
                    <br />
                    <br />
                    <br />
                    <div className="row">
                        <table className="table-striped table-bordered admin_table_main" style={{ width: '1500px' }} >
                            <thead>
                                <tr className="admin_table_row" style={{ backgroundColor: 'rgb(100, 149, 237)' }}>
                                    <th> Name</th>
                                    <th> Email</th>
                                    <th> Address</th>
                                    <th> NIC</th>
                                    <th> Birthday</th>
                                    <th> Mobile</th>
                                    <th> Gender</th>
                                    <th> Admin Type</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    this.state.admin.map(
                                        admin =>
                                            <tr key={admin.Id} className="admin_table_row" style={{ backgroundColor: 'rgb(100, 149, 237,0.3)' }} >
                                                <td>{admin.name}</td>
                                                <td style={{ width: '100px' }}>{admin.email}</td>
                                                <td style={{ width: '150px' }}>{admin.address}</td>
                                                <td>{admin.nic}</td>
                                                <td>{admin.birthday}</td>
                                                <td >{admin.mobile}</td>
                                                <td>{admin.gender}</td>
                                                <td>{admin.admin_type}</td>
                                                <td>
                                                    <button onClick={() => this.editAdmin(admin.id)} className="userButtons" style={{ width: '80px', height: '35px', marginRight: '5px' }}>Update</button>
                                                    <button onClick={() => this.viewAdmin(admin.id)} className="userButtons" style={{ width: '80px', height: '35px', marginRight: '5px' }}>View</button>
                                                    <button onClick={() => this.confirmation(admin.id)} className="userButtons" style={{ width: '80px', height: '35px', marginRight: '5px' }}>Delete</button>

                                                </td>
                                            </tr>
                                    )
                                }
                            </tbody>

                        </table>
                    </div>
                </Grid>
                <br /><br /><br />

            </div>
        );
    }
}

export default ListAdminComponent;