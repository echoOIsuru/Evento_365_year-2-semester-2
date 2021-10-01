import React, { Component } from 'react';
import FoodService from '../foodServices/FoodService';

class ViewFoodComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            foodid: this.props.match.params.id,
            food: {}
        }
    }

    componentDidMount(){
        FoodService.getFoodById(this.state.foodid).then( res => {
            this.setState({food: res.data});
        });
    }


    render() {
        return (
            
            <div className="viewback"  style={{marginBottom: "30px" , marginTop: "30px" }}>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center">View Food Details</h3>

                  
                    
                    <div className="viewback1" >
                    <div className = "card-body">
                        <div className = "row">
                            <label> </label>
                            <div> <img style={{width:"100%", height:"100%"}} src={this.state.food.fimage}></img>
                            </div>
                        </div>
                        <div className = "row">
                            <label> food package ID: </label>
                            <div> { this.state.food.foodcategoryid }</div>
                        </div>
                        <div className = "row">
                            <label> food package Name: </label>
                            <div> { this.state.food.foodcategory }</div>
                        </div>
                        <div className = "row">
                            <label> food types: </label>
                            <div> { this.state.food.foodname }</div>
                        </div>
                        <div className = "row">
                            <label> package cost: </label>
                            <div> { this.state.food.cost }</div>
                        </div>
                        <div className = "row">
                            <label> Description: </label>
                            <div> { this.state.food.description }</div>
                        </div>
                       
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewFoodComponent;