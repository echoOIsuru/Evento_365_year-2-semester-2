import React, { Component } from 'react';
import PaymentService from '../PaymentHandlingServices/PaymentService';
import edit from "../Images/edit.png";
import delete1 from "../Images/delete.png";
import "../PaymentHandlingStyles/searchbar.css";

class PaymentManagementComponent extends Component {
    constructor(props){
        super(props)
            this.state={
                payments: [],
                input:''
            }

            this.editPayments = this.editPayments.bind(this);
            this.deletePayments = this.deletePayments.bind(this);
            this.changeinputHandler = this.changeinputHandler.bind(this);

    }

    changeinputHandler= (event) => {
        this.setState({input: event.target.value});
    }

    editPayments(id){

        console.log(id);
        this.props.history.push(`/update-paydetails/${id}`);

    }

    deletePayments(paymentID){

        if(window.confirm('Are you sure, you want to delete the selected Payment?')) {

        console.log(paymentID);
        PaymentService.deletePayment(paymentID).then(res => {
            this.setState({payments: this.state.payments.filter(payments => payments.paymentID !== paymentID)})

        });

        }

    }

    componentDidMount(){

        PaymentService.getPayments().then((res) => {

            this.setState({payments:res.data});

        });

    }

    render() {
        return (
            <div  style={{marginTop: 100, marginBottom:100}}>
                
                <h2 className="text-center">Payment Management</h2> <br />
                <div className = "containert">

                <div class="search_wrap search_wrap_4">
                    <div class="search_box">

                        <input type="text" className="input" placeholder="Search..." 
                        onChange={this.changeinputHandler} />
                    </div>
			    </div>


                    <table className = "table table-striped table-bordered">

                        <thead>
                            <tr>
                                <th>Payment ID</th>
                                <th>Promo ID</th>
                                <th>Customer ID</th>
                                <th>Customer Name</th>
                                <th>Payment Date</th>
                                <th>Payment Method</th>
                                <th>Payment Status</th>
                                <th>Description</th>
                                <th>Amount</th>
                                <th>Action</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.payments.filter(val=>{
                                    if(this.state.input === ""){
                                        return val;
                                    }else if(
                                
                                        val.customerName.toLowerCase().includes(this.state.input.toLowerCase()) ||
                                        val.customerId.toLowerCase().includes(this.state.input.toLowerCase()) ||
                                        val.paymentMethod.toLowerCase().includes(this.state.input.toLowerCase()) ||
                                        val.status.toLowerCase().includes(this.state.input.toLowerCase())
                                    ){
                                        return val;
                                    }
                                }).map(
                                    Payment =>
                                    <tr key ={Payment.paymentID}>
                                        <td>{Payment.paymentID}</td>
                                        <td>{Payment.promoID}</td>
                                        <td>{Payment.customerId}</td>
                                        <td>{Payment.customerName}</td>
                                        <td>{Payment.paymentDate}</td>
                                        <td>{Payment.paymentMethod}</td>
                                        <td>{Payment.status}</td>
                                        <td>{Payment.description}</td>
                                        <td>{Payment.amount}</td>
                                        <td>
                                            <button onClick = { () => this.editPayments(Payment.paymentID)} style={{border:'0px',backgroundColor: 'transparent'}}> <img style={{width:30,height:30}}src={edit} alt="edit"/> </button>
                                            <button style={{marginLeft: "10px",border:'0px',backgroundColor: 'transparent'}} onClick={ () => this.deletePayments(Payment.paymentID)} ><img style={{width:30,height:30,}}src={delete1} alt="delete"/> </button>
                                        </td>
                                    </tr>
                                )
                            }


                        </tbody>
                    </table>
            </div>
            <br /> <br /><br /> <br /><br /> <br /><br /> <br /><br /> <br /><br /> <br /><br /> <br />
            </div>
        )
    }
}

export default PaymentManagementComponent;