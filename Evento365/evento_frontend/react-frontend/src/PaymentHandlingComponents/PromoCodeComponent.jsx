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
                keyword: ''
            }

            this.addpromo = this.addpromo.bind(this);
            this.editPromo = this.editPromo.bind(this);
            this.deletePromo = this.deletePromo.bind(this);
            this.deleted = this.deleted.bind(this);

    }

    search(val) {
        PromoService.searchPromos(val).then((res) => {
            this.setState({ Promo_Code: res.data });
            
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

    deleted(){

        this.props.history.push('/delpromo');

    }

    render() {
        return (

            <div className="container">
            <div  style={{marginTop: 120, marginBottom:600}}>

            <div class="container">
            <div style={{marginTop: 120, marginBottom:500}}>

                
                <h2 className="text-center">Promo Code Management</h2> <br />

                <div >
                        <input type="text" name="searchBox" onChange={this.keywordhandle.bind(this)} className="searchBox" style={{marginLeft:'985px'}}/>
                        <button onClick={this.searchbuttonhandle.bind(this)} className="userButtons" style={{ marginLeft: '5px', width: '100px', height: '30px'}} >Search</button>
                    </div>
                    <br />
                    <br />
                 <br />

                <div >
                <div className = "row" >
                    <button className="my-button"  onClick={this.addpromo} style={{marginLeft: 10, marginBottom:20, width:"16%",  color:'white', borderRadius:9}}><img style={{width:30,height:25}}src={plus} alt="edit"/> <div style={{marginLeft: 10, color:'white'}}>Add Promo Code</div></button>
                 </div>

                 <div>
                    <button className="my-button"  style={{width:"11%", color:'white'}}onClick={this.deleted}>Deleted Records</button>
                </div>
                </div>
                    <br />

                 <br></br>
                <div className = "containert">

                    <table className = "table table-striped table-bordered" style={{backgroundColor:'white'}}>

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
                        { this.state.Promo_Code.length === 0?<tr>
                                <td colSpan = "5">No entries Available.</td>
                            </tr>:
                                this.state.Promo_Code.map(
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


            </div>
            </div>
        )
        
    }
}

export default PromoCodeComponent;