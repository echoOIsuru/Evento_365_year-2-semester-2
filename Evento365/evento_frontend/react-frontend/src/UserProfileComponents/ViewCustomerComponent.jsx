import React, { Component } from 'react';
import CustomerService from '../UserServices/CustomerService';

class ViewEmployeeComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            id: this.props.match.params.id,
            customer: {}
        }
    }

    componentDidMount(){
        CustomerService.getCustomerById(this.state.id).then(res =>{
           this.setState({customer: res.data}); 
        })
    }

    renderElement(){
        if(this.state.customer.gender === 'M')
           return 'Male'
        return 'Female';
     }

    render() {
        return (
            <div>
                <br/><br/>
                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center">View Customer Details</h3>
                    <div className="card-body">
                        <div className="row">
                            <label>Name : </label>
                            <div style={{ marginLeft: '.5rem' }} > {this.state.customer.name}</div>
                        </div>
                        <div className="row">
                            <label>Email : </label>
                            <div style={{ marginLeft: '.5rem' }} >{this.state.customer.email}</div>
                        </div>
                        <div className="row">
                            <label>Address : </label>
                            <div style={{ marginLeft: '.5rem' }} >{this.state.customer.address}</div>
                        </div>
                        <div className="row">
                            <label>NIC : </label>
                            <div style={{ marginLeft: '.5rem' }} >{this.state.customer.nic}</div>
                        </div>
                        <div className="row">
                            <label>Username : </label>
                            <div style={{ marginLeft: '.5rem' }} >{this.state.customer.username}</div>
                        </div>
                        <div className="row">
                            <label>Password : </label>
                            <div style={{ marginLeft: '.5rem' }} >{this.state.customer.password}</div>
                        </div>
                        <div className="row">
                            <label>Birthday: </label>
                            <div style={{ marginLeft: '.5rem' }} >{this.state.customer.birthday}</div>
                        </div>
                        <div className="row">
                            <label>Mobile : </label>
                            <div style={{ marginLeft: '.5rem' }} >{this.state.customer.mobile}</div>
                        </div>
                        <div className="row">
                            <label>Qusetion : </label>
                            <div style={{ marginLeft: '.5rem' }} >{this.state.customer.sec_ques_no}</div>
                        </div>
                        <div className="row">
                            <label>Answer: </label>
                            <div style={{ marginLeft: '.5rem' }} >{this.state.customer.sec_ques_answer}</div>
                        </div>
                        <div className="row">
                            <label>Gender : </label>
                            <div style={{ marginLeft: '.5rem' }} >{this.renderElement()}</div>
                        </div>
                        <div className="row">
                            <label>Image : </label>
                            <div style={{ marginLeft: '.5rem' }} >{this.state.customer.image}</div>
                        </div>
                        <div className="row">
                            <label>Customer Type : </label>
                            <div style={{ marginLeft: '.5rem' }} >{this.state.customer.customer_type}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewEmployeeComponent;