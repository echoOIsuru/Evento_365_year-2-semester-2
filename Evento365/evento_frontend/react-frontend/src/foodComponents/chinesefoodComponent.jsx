import React, { Component } from 'react'
import FoodService from '../foodServices/FoodService';

 class chinesefoodComponent extends Component {
    constructor (props){
        super(props)

        this.state = {
            
            fid: this.props.match.params.id,
           food:[]
        }

        this.addtobookingfood = this.addtobookingfood.bind(this);
        
    }


    componentDidMount(){
         FoodService.getFoodpackages(this.state.fid).then((res) => {
            this.setState({ food: res.data});
            
        });


    }

    viewFood(foodid){
        this.props.history.push(`/view-food/${foodid}`);
    }
    addtobookingfood(foodid){
        this.props.history.push(`/cus-book-food/${foodid}`);
        
    }

    render() {
        
        return (
            <div>
                <div className="text-center">
                <h2 style={{marginBottom: "30px" , marginTop: "10px" }} className="test-center">FOOD PACKAGES</h2>
                </div>
                <div className = "row">
                    <table className = "table table-striped table-bordered">
                        <thead>
                            <tr className="customerTR">
                                <th style={{ width:"10%"}}>Food package Name </th>
                                <th style={{ width:"10%"}}>Food Types </th>
                                <th style={{ width:"20%"}}>Description</th>
                                <th style={{ width:"10%"}}>Package Cost</th>
                                <th style={{ width:"20%"}}>Image</th>
                                <th style={{ width:"18%"}}>Actions</th>
                            </tr>
                        </thead>

                        <tbody className="customerTbody">
                            {
                                this.state.food.map(
                                    food =>
                                   <tr  key ={food.foodid}>
                                       <td> {food.foodcategory} </td>
                                       <td> {food.foodname} </td>
                                       <td> {food.description} </td>
                                       <td> {food.cost} </td>
                                       <td> <img style={{width:"100%", height:"100%"}} src={food.fimage}></img> </td>
                                       <td>
                                           <button  onClick = { () => this.viewFood(food.foodid)} className="btn btn-info">View </button>
                                           <button style={{marginLeft: "10px"}} className="btn btn-success" onClick = { () => this.addtobookingfood(food.foodid)} > Add to booking</button>
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

export default chinesefoodComponent;