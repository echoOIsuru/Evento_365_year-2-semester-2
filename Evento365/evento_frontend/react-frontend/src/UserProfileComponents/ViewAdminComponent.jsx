import React, { Component } from 'react';
import AdminService from '../UserServices/AdminService';

class ViewEmployeeComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            id: this.props.match.params.id,
            admin: {}
        }
    }

    componentDidMount(){
        AdminService.getAdminById(this.state.id).then(res =>{
           this.setState({admin: res.data}); 
        })
    }

    renderElement(){
        if(this.state.admin.gender === 'M')
           return 'Male'
        return 'Female';
     }

    render() {
        return (
            <div>
                <br/><br/>
                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center">View Admin Details</h3>
                    <div className="card-body">
                        <div className="row">
                            <label>Name : </label>
                            <div style={{ marginLeft: '.5rem' }} > {this.state.admin.name}</div>
                        </div>
                        <div className="row">
                            <label>Email : </label>
                            <div style={{ marginLeft: '.5rem' }} >{this.state.admin.email}</div>
                        </div>
                        <div className="row">
                            <label>Address : </label>
                            <div style={{ marginLeft: '.5rem' }} >{this.state.admin.address}</div>
                        </div>
                        <div className="row">
                            <label>NIC : </label>
                            <div style={{ marginLeft: '.5rem' }} >{this.state.admin.nic}</div>
                        </div>
                        <div className="row">
                            <label>Username : </label>
                            <div style={{ marginLeft: '.5rem' }} >{this.state.admin.username}</div>
                        </div>
                        <div className="row">
                            <label>Password : </label>
                            <div style={{ marginLeft: '.5rem' }} >{this.state.admin.password}</div>
                        </div>
                        <div className="row">
                            <label>Birthday: </label>
                            <div style={{ marginLeft: '.5rem' }} >{this.state.admin.birthday}</div>
                        </div>
                        <div className="row">
                            <label>Mobile : </label>
                            <div style={{ marginLeft: '.5rem' }} >{this.state.admin.mobile}</div>
                        </div>
                        <div className="row">
                            <label>Qusetion : </label>
                            <div style={{ marginLeft: '.5rem' }} >{this.state.admin.sec_ques_no}</div>
                        </div>
                        <div className="row">
                            <label>Answer: </label>
                            <div style={{ marginLeft: '.5rem' }} >{this.state.admin.sec_ques_answer}</div>
                        </div>
                        <div className="row">
                            <label>Gender : </label>
                            <div style={{ marginLeft: '.5rem' }} >{this.renderElement()}</div>
                        </div>
                        <div className="row">
                            <label>Image : </label>
                            <div style={{ marginLeft: '.5rem' }} >{this.state.admin.image}</div>
                        </div>
                        <div className="row">
                            <label>Admin Type : </label>
                            <div style={{ marginLeft: '.5rem' }} >{this.state.admin.admin_type}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewEmployeeComponent;