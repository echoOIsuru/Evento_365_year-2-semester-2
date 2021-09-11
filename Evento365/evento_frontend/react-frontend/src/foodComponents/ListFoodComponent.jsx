import React, { Component } from 'react';
import FoodService from '../foodServices/FoodService';

class ListFoodComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

            food: []

        }
       
        this.addFood = this.addFood.bind(this);
        this.editFood = this.editFood.bind(this);
        this.deleteFood = this.deleteFood.bind(this);
    }


    deleteFood(foodid){
        
        FoodService.deleteFood(foodid).then( res => {

            this.setState({food: this.state.food.filter(food => food.foodid !== foodid)});

        });
    }

  

    viewFood(foodid){
        this.props.history.push(`/view-food/${foodid}`);
    }


    editFood(foodid){
        this.props.history.push(`/update-food/${foodid}`);

    }

    componentDidMount(){
        FoodService.getFood().then((res) => {

            this.setState({ food: res.data});


        });
    }


    addFood(){
        this.props.history.push('/add-food');
    }



    render() {
        return (
         
           // <div className="bg">
                
            <div className="text-center">

                <div style={{ "float": "right" }}>
                    <div className="input-group btn-group-sm ">
                        <input type="text" style={{ border: 0 }} className="form-control" placeholder="Search here..." name="search" value={this.state.search} onChange={this.searchChange} />

                            <div className="input-group-append btn-group-sm">
                                    <button className="btn btn-outline-success" onClick={this.searchData}>search</button>
                            </div>
                    </div>
                </div>


                <h2 style={{marginBottom: "30px" , marginTop: "10px" }} className="test-center">EVENTO356 FOOD SERVICE</h2>

               {/*
                <div >
                <img style={{width:"100%" , height:"250px"}} className="image01" src="../images/im11.jpg" alt="food package"/>
                </div> 
            */}

                <div className = "row">
                    <button style={{ marginBottom: "10px" , marginTop: "10px"}} className="btn btn-primary" onClick={this.addFood}> Add Food</button>


                </div>
                <div className = "row">
                    <table className = "table table-striped table-bordered">
                        <thead>
                            <tr className="customerTR">
                                <th style={{ width:"10%"}}>Food package ID</th>
                                <th style={{ width:"10%"}}>Food package Name</th>
                                <th style={{ width:"10%"}}>Food package Types </th>
                                <th style={{ width:"18%"}}>Description</th>
                                <th style={{ width:"8%"}}>Cost</th>
                                <th style={{ width:"20%"}}>Image</th>
                                <th style={{ width:"25%"}}>Actions</th>
                            </tr>
                        </thead>

                        <tbody className="customerTbody">
                            {
                                this.state.food.map(
                                    food =>
                                   <tr key ={food.foodid}>
                                       <td> {food.foodcategoryid} </td>
                                       <td> {food.foodcategory} </td>
                                       <td> {food.foodname} </td>
                                       <td> {food.description} </td>
                                       <td> {food.cost} </td>
                                       <td> <img style={{width:"100%", height:"100%"}} src={food.fimage}></img> </td>
                                       <td>
                                           <button onClick = { () => this.editFood(food.foodid)} className="btn btn-info">Update </button>
                           


                                           <button style={{marginLeft: "10px"}} className="btn btn-danger" onClick={() => {
                                                                    const confirmBox = window.confirm(
                                                                      "Are ypu sure want to delete this?"
                                                                    )
                                                                    if (confirmBox === true) {
                                                                        this.deleteFood(food.foodid)
                                                                    }
                                                                  }}>
                                                                        Delete</button>


                                         <button style={{marginLeft: "10px"}} onClick = { () => this.viewFood(food.foodid)} className="btn btn-info">View </button>
                                       </td>
                                   </tr> 
                                )
                            }
                        </tbody>

                    </table>

                    </div>

            </div>
           // </div>
        );
    }
}

export default ListFoodComponent;