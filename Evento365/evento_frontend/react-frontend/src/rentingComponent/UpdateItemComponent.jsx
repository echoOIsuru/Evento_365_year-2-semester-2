import React, { Component } from 'react';
import RentalItemService from '../rentingServices/RentalItemService';

class UpdateItemComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            rentalitemid : this.props.match.params.rentalitemid,
            name:'',
            description:'',
            rentalperday:'',
            totalunits:''
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.changeRentalPerDayHandler = this.changeRentalPerDayHandler.bind(this);
        this.changeTotalUnitsHandler = this.changeTotalUnitsHandler.bind(this);
        this.updateItem = this.updateItem.bind(this);
    }

    componentDidMount(){
        RentalItemService.getItemsById(this.state.rentalitemid).then( (res)=>{
            let rentalitem = res.data;
            this.setState({name: rentalitem.name,
                description: rentalitem.description,
                rentalperday: rentalitem.rentalperday,
                totalunits: rentalitem.totalunits
            });
        } );
    }

    updateItem = (e) => {
        e.preventDefault();
        let rentalitem =   {name:this.state.name,
            description:this.state.description,
            rentalperday:this.state.rentalperday,
            totalunits:this.state.totalunits
        };
       
        RentalItemService.updateItem(rentalitem, this.state.rentalitemid).then(res => {
            this.props.history.push('/rentalitems');
        });
    }

    cancel(){
        this.props.history.push('/rentalitems');
    }

    changeNameHandler= (event) => {
        this.setState({name: event.target.value});
    }

    changeDescriptionHandler= (event) => {
        this.setState({description: event.target.value});
    }

    changeRentalPerDayHandler= (event) => {
        this.setState({rentalperday: event.target.value});
    }

    changeTotalUnitsHandler= (event) => {
        this.setState({totalunits: event.target.value});
    }

    render() {
        return (
            <div>
                <div className="row" style={{paddingTop:"170px", paddingBottom:"170px"}}>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center" >Update Item </h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label> Item Name </label>
                                        <input placeholder="Item Name" name="name" className="form-control" 
                                        value={this.state.name} onChange={this.changeNameHandler} />
                                    </div>

                                    <div className="form-group">
                                        <label> Description </label>
                                        <input placeholder="Description" name="description" className="form-control" 
                                        value={this.state.description} onChange={this.changeDescriptionHandler} />
                                    </div>

                                    <div className="form-group">
                                        <label> Rental Per Day </label>
                                        <input placeholder="Rental Per Day" name="rentalperday" className="form-control" 
                                        value={this.state.rentalperday} onChange={this.changeRentalPerDayHandler} />
                                    </div>

                                    <div className="form-group">
                                        <label> Total Units </label>
                                        <input placeholder="Total Units" name="totalunits" className="form-control" 
                                        value={this.state.totalunits} onChange={this.changeTotalUnitsHandler} />
                                    </div>

                                    <button className="btn btn-success" onClick={this.updateItem}> Save </button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style= {{marginLeft: "10px"}}> Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

export default UpdateItemComponent;