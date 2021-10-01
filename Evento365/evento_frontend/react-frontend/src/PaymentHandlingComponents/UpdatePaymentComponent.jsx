import React, { Component } from 'react';
import PaymentService from '../PaymentHandlingServices/PaymentService';


class UpdatePaymentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            customerName: '',
            paymentDate: '',
            status: '',
            method: '',
            amount: ''
        }
        this.changecustomerNameHandler = this.changecustomerNameHandler.bind(this);
        this.changepaymentDateHandler = this.changepaymentDateHandler.bind(this);
        this.updatePayment = this.updatePayment.bind(this);
    }

    componentDidMount(){
        PaymentService.getPaymentById(this.state.id).then( (res) =>{
            let Payment = res.data;
            this.setState({customerName: Payment.customerName,
                paymentDate: Payment.paymentDate,
                status : Payment.status,
                method : Payment.paymentMethod,
                amount : Payment.amount
            });
        });
    }

    updatePayment = (e) => {
        e.preventDefault();
        let Payment = {customerName: this.state.customerName, paymentDate: this.state.paymentDate, status: this.state.status};
        console.log('Payment => ' + JSON.stringify(Payment));
        console.log('id => ' + JSON.stringify(this.state.id));
        PaymentService.updatePayments(Payment, this.state.id).then( res => {
            this.props.history.push('/paymanagement');
        });
    }
    
    changecustomerNameHandler= (event) => {
        this.setState({customerName: event.target.value});
    }

    changepaymentDateHandler= (event) => {
        this.setState({paymentDate: event.target.value});
    }

    changestatusHandler= (event) => {
        this.setState({status: event.target.value});
    }

    cancel(){
        this.props.history.push('/paymanagement');
    }

    render() {
        return (
            <div  style={{marginTop: 120, marginBottom:270}}>
                <br></br>
                   <div className = "form2">
                        <div className = "row">
                            <div className = "formDiv">
                                <h2 className="text-center">Update Payment Details</h2>
                                <div className = "card-body">
                                    <form id="form1">
                                    <br />
                                        <div className = "form-group">
                                            <label> Payment ID: </label>
                                            <input placeholder="id" name="paymentid" className="form-control" 
                                                value={this.state.id} disabled/>
                                        </div>

                                    <br />
                                        <div className = "form-group">
                                            <label> Customer Name: </label>
                                            <input placeholder="Customer Name" name="customerName" className="form-control" 
                                                value={this.state.customerName} onChange={this.changecustomerNameHandler}/>
                                        </div>
                                        <br />
                                        <div className = "form-group">
                                            <label> Payment Date: </label>
                                            <input placeholder="payment Date" name="paymentDate" className="form-control" 
                                                value={this.state.paymentDate} onChange={this.changepaymentDateHandler}/>
                                        </div>
                                        <br />
                                        <div className = "form-group">
                                            <label> Status: </label>
                                            <input placeholder="status" name="status" className="form-control" 
                                                value={this.state.status} onChange={this.changestatusHandler}/>
                                        </div>
                                        <br />
                                       
                                        <div className = "form-group">
                                            <label> Amount: </label>
                                            <input placeholder="5000" name="amount" className="form-control" 
                                                value={this.state.amount} disabled/>
                                        </div>
                                        <br />
                                        <button className="edidelbtn" onClick={this.updatePayment}>Update</button>
                                        <button className="edidelbtn" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>

                   <br /> <br /><br /> <br /><br /> <br /><br /> <br /><br /> <br /><br /> <br />
            </div>
        )
    }
}
export default UpdatePaymentComponent;