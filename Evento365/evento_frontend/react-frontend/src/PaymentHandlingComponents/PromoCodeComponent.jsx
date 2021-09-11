import React, { Component } from 'react';
import PromoService from '../PaymentHandlingServices/PromoService';
import edit from "../Images/edit.png";
import delete1 from "../Images/delete.png";
import plus from "../Images/22.jpg";
import "../PaymentHandlingStyles/searchbar.css";

class PromoCodeComponent extends Component {
    constructor(props){
        super(props)
            this.state={
                Promo_Code: [],
                input:''
            }

            this.addpromo = this.addpromo.bind(this);
            this.editPromo = this.editPromo.bind(this);
            this.deletePromo = this.deletePromo.bind(this);
            this.changeinputHandler = this.changeinputHandler.bind(this);

    }

    changeinputHandler= (event) => {
        this.setState({input: event.target.value});
    }

    addpromo(){

        this.props.history.push('/addpromo');

    }

    editPromo(id){

        console.log(id);
        this.props.history.push(`/update-promo/${id}`);

    }

    deletePromo(promo_ID){

    if(window.confirm('Are you sure, you want to delete the selected promo code?')) {

        console.log(promo_ID);
        PromoService.deletePromocode(promo_ID).then(res => {
            this.setState({Promo_Code: this.state.Promo_Code.filter(Promo_Code => Promo_Code.promo_ID !== promo_ID)})

        });
    }

    }

    componentDidMount(){

        PromoService.getPromocodes().then((res) => {

            this.setState({Promo_Code:res.data});

        });

    }

    render() {
        return (
            <div  style={{marginTop: 100, marginBottom:400}}>
                
                <h2 className="text-center">Promo Code Management</h2> <br />

                <div class="search_wrap search_wrap_4">
                    <div class="search_box">

                        <input type="text" className="input" placeholder="Search..." 
                        onChange={this.changeinputHandler} />
                    </div>
			    </div>

                <div className = "row" >
                    <button className="my-button"  onClick={this.addpromo} style={{marginLeft: 10, marginBottom:20, width:"16%",  color:'black',borderRadius:9}}><img style={{width:30,height:25}}src={plus} alt="edit"/> <div style={{marginLeft: 10, color:'white'}}>Add Promo Code</div></button>
                 </div>

                 <br></br>
                <div className = "containert">

                    <table className = "table table-striped table-bordered">

                        <thead>
                            <tr>
                                <th>Promo ID</th>
                                <th>Code</th>
                                <th>Amount</th>
                                <th>Count</th>
                                <th>Action</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.Promo_Code.filter(val=>{
                                    if(this.state.input === ""){
                                        return val;
                                    }else if(
                                
                                        val.code.toLowerCase().includes(this.state.input.toLowerCase()) 
                                    ){
                                        return val;
                                    }
                                }).map(
                                    Promo_Code =>
                                    <tr key ={Promo_Code.promo_ID}>
                                        <td>{Promo_Code.promo_ID}</td>
                                        <td>{Promo_Code.code}</td>
                                        <td>{Promo_Code.amount}</td>
                                        <td>{Promo_Code.count}</td>
                                        <td>
                                            <button onClick = { () => this.editPromo(Promo_Code.promo_ID) } style={{border:"0px",backgroundColor: 'transparent'}}><img style={{width:30,height:30,}}src={edit} alt="edit"/></button>
                                            <button style={{marginLeft: '10px',border:'0px',backgroundColor: 'transparent'}} onClick={ () => this.deletePromo(Promo_Code.promo_ID) } ><img style={{width:30,height:30,}}src={delete1} alt="delete"/> </button>
                                        </td>
                                    </tr>
                                )
                            }


                        </tbody>
                    </table>
                    
            </div>



            </div>
        )
        
    }
}

export default PromoCodeComponent;