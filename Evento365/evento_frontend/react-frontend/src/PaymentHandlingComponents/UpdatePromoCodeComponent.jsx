import React, { Component } from 'react';
import PromoService from '../PaymentHandlingServices/PromoService';

class UpdatePromoCodeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            code: '',
            amount: '',
            count: '',
            retrivedcode:''
        }
        this.changeCodeHandler = this.changeCodeHandler.bind(this);
        this.changeAmountHandler = this.changeAmountHandler.bind(this);
        this.updatePromo = this.updatePromo.bind(this);
    }

    componentDidMount(){
        PromoService.getPromocodeById(this.state.id).then( (res) =>{
            let Promo_Code = res.data;
            this.setState({code: Promo_Code.code,
                retrivedcode: Promo_Code.code,
                amount: Promo_Code.amount,
                count : Promo_Code.count
            });
        });
    }

    updatePromo = (e) => {
        e.preventDefault();

        PromoService.getPromocodes().then((res) => {

            let Promocheck = res.data;
            console.log(Promocheck, "promos from database");
            var len = Promocheck.length;
            var flag=1;
        

        //for loop to check duplicate records
                
        for (var i = 0; i < len; i++) {
            if(Promocheck[i].code == this.state.code && Promocheck[i].code != this.state.retrivedcode){
                
                alert("Value you have entered is already exists, Try Again!!")
                flag=0;
                
            }    
        } 

      

       if (flag==1){
        let Promo_Code = {code: this.state.code, amount: this.state.amount, count: this.state.count};
        console.log('Promo_Code => ' + JSON.stringify(Promo_Code));
        console.log('id => ' + JSON.stringify(this.state.id));
         PromoService.updatePromocode(Promo_Code, this.state.id).then( res => {
            this.props.history.push('/promomanage');

        });
    }
    });
    }
    
    changeCodeHandler= (event) => {
        this.setState({code: event.target.value});
    }

    changeAmountHandler= (event) => {
        this.setState({amount: event.target.value});
    }

    changeCountHandler= (event) => {
        this.setState({count: event.target.value});
    }

    cancel(){
        this.props.history.push('/promomanage');
    }

    render() {
        return (
            <div  style={{marginTop: 100, marginBottom:250}}>
                <br></br>
                   <div className = "form">
                        <div className = "row">
                        <div className = "formDiv">
                                <h2 className="text-center">Update Promo Code</h2>
                                <div className = "card-body">
                                    <form id="form1" onSubmit = {this.updatePromo}>
                                    <br />
                                        <div className = "form-group">
                                            <label> Promo ID: </label>
                                            <input placeholder="id" name="promoid" className="form-control" 
                                                value={this.state.id} disabled/>
                                        </div>

                                    <br />
                                        <div className = "form-group">
                                            <label> Promo Code: </label>
                                            <input placeholder="Code Name" name="code" className="form-control" 
                                                value={this.state.code} onChange={this.changeCodeHandler}/>
                                        </div>
                                        <br />
                                        <div className = "form-group">
                                            <label> Reduced Amount: </label>
                                            <input placeholder="500" name="amount" className="form-control" 
                                                value={this.state.amount} onChange={this.changeAmountHandler} pattern="[0-9]{0,7}" title="The Count should consist of numerical values only."required = {true}/>
                                        </div>
                                        <br />
                                        <div className = "form-group">
                                            <label> Count: </label>
                                            <input placeholder="10" name="count" className="form-control" 
                                                value={this.state.count} onChange={this.changeCountHandler} pattern="[0-9]{0,6}" title="The Amount should consist of numerical values with maximum 6 digits only."required = {true}/>
                                        </div>
                                        <br />
                                       
                                        <button className="edidelbtn">Update</button>
                                        <button className="edidelbtn" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
                   <br /> <br /><br /> <br /><br /> <br />
            </div>
        )
    }
}
export default UpdatePromoCodeComponent;