import React, { Component } from 'react';
import PaymentService from '../PaymentHandlingServices/PaymentService';

class ListPayDetailComponent extends Component {
    constructor(props){
        super(props)
            this.state={
               // cusID: this.props.match.params.id,
               cusID:'C0011',
               PaymentDetails: []
            }

    }
    componentDidMount(){


        PaymentService.getPaymentsByCus(this.state.cusID).then((res) => {
            
            let PaymentDetails = res.data;
            console.log(PaymentDetails, "got the data");

            this.setState({PaymentDetails:res.data});
            

        });

        /*PaymentService.getPayments().then((res) => {

            this.setState({PaymentDetails:res.data});

        });*/

    }

    render() {
        return (
            <div style={{marginTop: 100, marginBottom:100}}>
                
                <h2 className="text-center">Payment History</h2> <br />
                <div className = "containert">
                    <table className = "table table-striped table-bordered">

                        <thead>
                            <tr>
                                <th>Payment ID</th>
                                <th>Payment Date</th>
                                <th>Payment Method</th>
                                <th>Payment Status</th>
                                <th>Amount</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.PaymentDetails.map(
                                    Payment =>
                                    <tr key ={Payment.paymentID}>
                                        <td>{Payment.paymentID}</td>                                       
                                        <td>{Payment.paymentDate}</td>
                                        <td>{Payment.paymentMethod}</td>
                                        <td>{Payment.status}</td>
                                        <td>{Payment.amount}</td>
                                    </tr>
                                )
                            }


                        </tbody>
                    </table>
            </div>
                                <br /> <br /><br /> <br />
            </div>
        )
    }
}

export default ListPayDetailComponent;