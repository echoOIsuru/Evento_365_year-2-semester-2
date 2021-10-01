import React, { Component } from 'react';
import PaymentService from '../PaymentHandlingServices/PaymentService';
import edit from "../Images/edit.png";
import delete1 from "../Images/delete.png";
import "../PaymentHandlingStyles/searchbar.css";
import "../PaymentHandlingStyles/Payment.css";

class PaymentManagementComponent extends Component {
    constructor(props){
        super(props)
            this.state={
                payments: [],
                keyword: ''
            }

            this.editPayments = this.editPayments.bind(this);
            this.deletePayments = this.deletePayments.bind(this);
            this.report = this.report.bind(this);

    }



    search(val) {
        PaymentService.searchPayment(val).then((res) => {
            this.setState({ payments: res.data });
            
        });
        if(this.keyword == ""){
            this.componentDidMount();
         }else if(this.keyword == undefined){
             this.componentDidMount();
         }
         
    }

    keywordhandle(event){
        this.keyword=event.target.value;
        
    }

    searchbuttonhandle(event){
        this.search(this.keyword);
        
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

    report(){

        this.props.history.push('/payreport');

    }

    render() {
        return (
            <div  style={{marginTop: 120, marginBottom:460}}>
                
                <h2 className="text-center">Payment Management</h2> <br />
                <div className = "containert">

                <div >
                        <input type="text" name="searchBox" onChange={this.keywordhandle.bind(this)} className="searchBox" style={{marginLeft:'985px'}}/>
                        <button onClick={this.searchbuttonhandle.bind(this)} className="userButtons" style={{ marginLeft: '5px', width: '100px', height: '30px' }} >Search</button>
               </div>
               <br />
               <br />
                <div >
                    <button className="my-button"  style={{width: 70, color:'white'}}onClick={this.report}>Report</button>
                </div>
                    <br />
                    <br />


                    <table className = "table table-striped table-bordered" style={{backgroundColor:'white'}}>

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
                            { this.state.payments.length === 0?<tr>
                                <td colSpan = "10">No entries Available.</td>
                            </tr>:
                                this.state.payments.map( 
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