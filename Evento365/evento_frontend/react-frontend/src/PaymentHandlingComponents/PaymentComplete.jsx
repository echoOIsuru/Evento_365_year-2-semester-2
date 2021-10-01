import React, { Component } from 'react';
import complete from "../Images/complete.png";
import "../PaymentHandlingStyles/CreditCardComponent.css";


class PaymentComplete extends Component {

    constructor(props){
        super(props)
            this.state={
                Promo_Code: [],
                input:'',
                cusid:''
            }

            this.paymenthistory = this.paymenthistory.bind(this);
            this.testSession = this.testSession.bind(this);
            this.passCussId = this.passCussId.bind(this);

    }

    componentDidMount(){

        this.testSession();
        this.passCussId();


    }

    testSession() {
        var data = sessionStorage.getItem('passCID');
        console.log(data, "SESSION Passed Cutomer Id");
        this.state.cusid = data;

    }

    passCussId() {
        
        sessionStorage.setItem('cusid', this.state.cusid);
        
        
    }
    

    paymenthistory(){

        this.props.history.push('/payments');

    }
    

    render() {
        return (
            <div>
                {this.testSession()}
                <h2 style={{marginTop: 130,marginLeft: 10}}>Your Order is Complete!</h2>
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