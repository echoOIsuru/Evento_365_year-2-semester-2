import React, { Component } from 'react';
import FoodService from '../foodServices/FoodService';
import Slider from './Slider';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


class customerFoodList extends Component {

    constructor (props){
        super(props)

        this.state = {
            food: [],
            search: ''
        }

        this.addtobookingfood = this.addtobookingfood.bind(this);
        
    }

    componentDidMount(){
        FoodService.getFood().then((res) => {
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
                <h2 style={{marginBottom: "10px" , marginTop: "10px" }} className="test-center" >EVENTO365 FOOD SERVICE</h2>
            
                <div style={{ "float": "right" }}>
                    <div className="input-group btn-group-sm ">
                        <input type="text" style={{ border: 0 }} className="form-control" placeholder="Search here..." name="search" value={this.state.search} onChange={this.searchChange} />

                            <div className="input-group-append btn-group-sm">
                                    <button className="btn btn-outline-success" onClick={this.searchData}>search</button>
                            </div>
                    </div>
                </div>
            

                {/*<img  style={{width:"100%" , height:"250px",marginBottom: "10px" , marginTop: "10px" }} className="image01" src="../images/im11.jpg" alt="food package"/> */}
                
                <div className="viewback4">
                <div className="card-body">
                <Slider/>
                </div>
                </div>
                
              
                
                {/*
                <div className = "row">
                    <table className = "table table-striped table-bordered">
                        <thead>
                            <tr className="customerTR">
                                <th style={{ width:"10%"}}>Food package Name </th>
                                <th style={{ width:"10%"}}>Food package Types </th>
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
                        </div> */}







                    <center>
                        <Grid container >
                            {
                                this.state.food.map(
                                    food =>(
                                        <Grid item key ={food.foodid} xs={12} md={6} lg={3}>
                                            <Paper style={{width: 300 , height:350}}>
                                                <div className="vmCard" >
                                                    <div className="imgCard" >

                                                        <img style={{width: 300 , height:150}} src={food.fimage} alt="" />
                                                    </div>

                                                    <div className="vmCard-content">

                                                        <div className="vmCard-title">
                                                            <h3> {food.foodcategory}</h3>
                                                        </div>
                                                        <div className="vmCard-content">
                                                        <div className="vmCard-body">
                                                            <p> {food.cost} .Rs </p>
                                                        </div>
                                                        </div>
                                                    </div>

                                                    <div className="vmBtn" >
                                                    <button  onClick = { () => this.viewFood(food.foodid)} style={{marginLeft: "10px" , marginBottom: "10px"}} className="btn btn-info">View </button>
                                                    <button style={{marginLeft: "10px" , marginBottom: "10px"}} className="btn btn-success" onClick = { () => this.addtobookingfood(food.foodid)} > Add to booking</button>
                                                    </div>
                                                </div>
                                                </Paper>
                                                <br/>
                                            </Grid>                                            
                                    )      
                                )

                            }
                            </Grid>
                            <br/>
                        </center>











                </div>

            </div>
        );
    }
}

export default customerFoodList;


