import React, { Component } from 'react';
import FoodService from '../foodServices/FoodService';




class bookingFoodComponent extends Component {
    constructor(props){
        super(props)

        this.state ={
            foodid: this.props.match.params.id,
            foodcategoryid: '',
            foodcategory: '',
            foodname: '',
            cost: '',
            description: ''
        }

        this.confirmFood = this.confirmFood.bind(this);

    }

    componentDidMount(){
        FoodService.getFoodById(this.state.foodid).then( (res) => {
            let food = res.data;
            this.setState({foodcategoryid: food.foodcategoryid,
                foodcategory: food.foodcategory,
                foodname: food.foodname,
                cost: food.cost,
                description: food.description
            });
        });

    }


   

    confirmFood =(e) => {
        e.preventDefault();

        let bookFood = { cost: this.state.cost, food_package_id: this.state.foodcategoryid, food_package_name: this.state.foodcategory};
        console.log('bookFood => ' + JSON.stringify(bookFood));

        FoodService.createBookFood(bookFood).then(res => {
           // this.props.history.push('/add-bookings');
            
        });    

    }



    cancel() {
        this.props.history.push('/custom');
    }


    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center"> ORDERED FOOD PACKAGE </h3>
                                 
                                 
                                   
                                

                                <img src="../images/12.jpg" alt="food package"/>

                                <div className="viewback2">
                            <div className="card-body">
                                <form>
                                    <div className="from-group">
                                        <label> Food package ID</label>
                                        <input placeholder="foodcategory id" name ="foodcategoryid" className="form-control"
                                            value={this.state.foodcategoryid} />
                                    </div>
                                    <div className="from-group">
                                        <label> Food package Name</label>
                                        <input placeholder="food category" name ="foodcategory" className="form-control"
                                            value={this.state.foodcategory} />
                                    </div>
                                    <div className="from-group">
                                        <label> Food Types</label>
                                        <input placeholder="food name" name ="foodname" className="form-control"
                                            value={this.state.foodname} />
                                    </div>
                                    <div className="from-group">
                                        <label> package Cost</label>
                                        <input placeholder="food cost" name ="cost" className="form-control"
                                            value={this.state.cost} />
                                    </div>
                                    <div className="from-group">
                                        <label> package Description</label>
                                        <input placeholder="food description" name ="description" className="form-control"
                                            value={this.state.description} />
                                    </div>
                                    <div style={{marginTop: "10px"}}>
                                    <button className="btn btn-success" onClick={this.confirmFood}>Confirm</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}> Cancel </button>
                                    </div>
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

export default bookingFoodComponent;