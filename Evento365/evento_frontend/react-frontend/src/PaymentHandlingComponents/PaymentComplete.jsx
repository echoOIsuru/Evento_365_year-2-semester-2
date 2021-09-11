import React, { Component } from 'react';
import complete from "../Images/complete.png";
import "../PaymentHandlingStyles/CreditCardComponent.css";


class PaymentComplete extends Component {

    constructor(props){
        super(props)
            this.state={
                Promo_Code: [],
                input:''
            }

            this.paymenthistory = this.paymenthistory.bind(this);

            

    }

    paymenthistory(){

        this.props.history.push('/payments');

    }
    

    render() {
        return (
            <div>
                <h2 style={{marginTop: 100,marginLeft: 30}}>Your Order is Complete!</h2>
                <h4>Thank you for your order at Evento365</h4><br /><br /><br />

                <img  style={{width:200,height:200,marginLeft: 100}}src={complete} alt="fireSpot"/> <br /><br /><br />
                

                <button className="edidelbtn" onClick={this.paymenthistory} style={{marginLeft: 100, marginBottom:20, width:"40%"}}> Payment History</button>
                <div style={{fontStyle:'italic',marginLeft:"20px"}}>(Your payment will be confirmed soon, stay with us)</div>
                <br /> <br />
            </div>
        );
    }
}

export default PaymentComplete;