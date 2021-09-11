import React, { Component } from 'react';
import RentalItemService from '../rentingServices/RentalItemService';



class ItemDetailComponent extends Component {
    constructor(props){
        super(props)
            this.state = {
                rentalitemid : this.props.match.params.rentalitemid,
                name:'',
                quantity:'',
                bookingid:'2',
                image:'',
                price:'',
                description: '',
                totalunits:100,
                rentalperday:'',
                availableunits: '',
            }

           this.changeQuantityHandler =  this.changeQuantityHandler.bind(this);
           this.addItem = this.addItem.bind(this);
    }

    changeQuantityHandler = (event) => {
        this.setState({quantity: event.target.value});
    }

    addItem= (e) => {   
        e.preventDefault();
        let temporaryitem = {quantity: this.state.quantity,name:this.state.name,
            price:(this.state.quantity*this.state.rentalperday),
            bookingid: this.state.bookingid};
        console.log('tempraryitem => ' + JSON.stringify(temporaryitem));

        if (this.state.availableunits < this.state.quantity){

            window.alert("We have only " + this.state.availableunits + " items");
        }
        else {
            RentalItemService.createTemporaryItemCart(temporaryitem).then(res => {
                //this.props.history.push('/temporaryitems');
                this.props.history.push('/order-detail');
            })
        
            let rentalitem =   {name:this.state.name,
                description:this.state.description,
                rentalperday:this.state.rentalperday,
                image: this.state.image,
                totalunits:this.state.totalunits,
                availableunits: this.state.availableunits - this.state.quantity,
            };
           
            RentalItemService.updateAvailable(rentalitem, this.state.rentalitemid).then(res => {
                
            }); 

        }  
    }

    componentDidMount(){
        RentalItemService.getItemsById(this.state.rentalitemid).then((res) => {
            let rentalitem = res.data;
            this.setState({name: rentalitem.name,
                description: rentalitem.description,
                rentalperday: rentalitem.rentalperday,
                description: rentalitem.description,
                image: rentalitem.image,
                availableunits: rentalitem.availableunits,
                totalunits: rentalitem.totalunits,
            });
        });

    }


    render() {
 
        return (
            
        <div>
            <div className="row" style={{paddingTop:"170px", paddingBottom:"170px"}}>

            {/* <center> */}

            <div class="formDiv" >
                <main class="mt-5 pt-4">
                    <div class="container dark-grey-text mt-5">
                        <div class="row wow fadeIn">

                            <div class="col-md-6 mb-4"> 
                            <div>
                            <center>
                                <img style={{width:"500px", height:"500px"}} src={this.state.image}></img> 
                            </center>
                            </div>
                            </div>

                            <div class="col-md-6 mb-4">  

                                <div class="p-4">
                                    <p class="lead font-weight-bold"> {this.state.name} </p>
                                    <p class="lead"> Rs.{this.state.rentalperday} Per day </p>     
                                    <p class="lead"> Available units : {this.state.availableunits}</p> 
                                    <p class="lead"> {this.state.description} </p> 
                                    

                                    <form onSubmit={this.addItem} class="d-flex justify-content-left">
                                        <div className="form-group">
                                            <label> Quantity </label>
                                            <input placeholder="Quantity" name="quantity" className="form-control" 
                                            value={this.state.quantity} onChange={this.changeQuantityHandler} required/>
                                            <input style={{width:"150px", height:"40px",marginTop:"20px"}} className="btn btn-success" type="submit" value="Add to booking"></input>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>

            {/* </center> */}
</div>
        </div>
        );
    }
}

export default ItemDetailComponent;