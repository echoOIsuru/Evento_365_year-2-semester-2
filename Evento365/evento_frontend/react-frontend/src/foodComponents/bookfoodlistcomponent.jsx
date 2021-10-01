import React, { Component } from 'react'
import FoodService from '../foodServices/FoodService';

export default class bookfoodlistcomponent extends Component {
    constructor (props){
        super(props)

        this.state = {
            
            fid: this.props.match.params.id,
            bookfood:[],
            food_package_name:'',
            food_package_id:'',
            count:'',
            cost:'',
            total:'',
            bookingid:'',
            Alltotal:0
        }

       
        this.addtobooking = this.addtobooking.bind(this);
        
    }

    addFood(){
        this.props.history.push('/cusview');
    }

    deleteFood(order_food_id){
        
        FoodService.deletebookfood(order_food_id).then( res => {

            this.setState({bookfood: this.state.bookfood.filter(bookfood => bookfood.order_food_id !== order_food_id)});

        });
    }


    addtobooking =(e) => {
        e.preventDefault();

        let confirmFood = { cost: this.state.cost,
             booking_id: this.state.bookingid ,
              food_package_id: this.state.food_package_id, 
              food_package_name: this.state.food_package_name , 
              count:this.state.count , total:this.state.Alltotal};

        console.log('bookFood => ' + JSON.stringify(confirmFood));

        // if (this.state.count > 500){
        //     window.alert("no of plates count doesnt grater than 500");
        // }

        FoodService.createconfirmfood(confirmFood).then(res => {

       
                //  this.props.history.push(`/confirm/${3}`);
            
            
        });    

    }


    calculatetot(data){
        var total =0;
        data.forEach(tp => {
             total+=tp.price;
        })
            this.state.Alltotal =total;
    }


    componentDidMount(){
         FoodService.getConfirmFoodpackages(this.state.fid).then((res) => {
            this.setState({ bookfood: res.data});  
            this.calculatetot(res.data);
        });

    }


    render() {
        
        return (
            // <div className="container formDivgg"
            //         style={{ backgroundImage: "url('https://cdn.wallpapersafari.com/22/18/riY3Ba.jpg')" }} >
                
            <div>
                <br></br><br></br><br></br><br></br><br></br>
                
                <div className="text-center">
                <h2 style={{marginBottom: "30px" , marginTop: "10px" }} className="test-center">FOOD PACKAGES</h2>
                </div>
                <div className = "row">
                <div className="foodtable">
                    <table style={{ backgroundColor: "rgba(255, 237, 213, 0.8)" }} className = "table table-striped table-bordered">
                        <thead>
                            <tr className="customerTR">
                                <th style={{textAlign:"center", fontSize:"20px",width:"10%"}}>Food package Name </th>
                                <th style={{textAlign:"center",fontSize:"20px", width:"10%"}}>Food Types </th>
                                <th style={{textAlign:"center",fontSize:"20px", width:"20%"}}>Count</th>
                                <th style={{textAlign:"center",fontSize:"20px", width:"10%"}}>Total price</th>
                                <th style={{textAlign:"center",fontSize:"20px", width:"10%"}}>Actions</th>
                            </tr>
                        </thead>

                        <tbody className="customerTbody">
                            {
                                this.state.bookfood.map(
                                    bookfood =>
                                   <tr  key ={bookfood.order_food_id}>
                                       <td style={{textAlign:"center",fontSize:"17px"}}> {bookfood.food_package_name} </td>
                                       <td style={{textAlign:"center",fontSize:"17px"}}> {bookfood.food_package_id} </td>
                                       <td style={{textAlign:"center",fontSize:"17px"}}> {bookfood.count} </td>
                                       <td style={{textAlign:"center",fontSize:"17px"}}> {bookfood.total} </td>
                                       <td style={{textAlign:"center",fontSize:"17px"}}>
                                       <button  className="btn btn-danger" 
                                           //Delete validation
                                                    onClick={() => {  const confirmBox = window.confirm(
                                                                      "Are ypu sure want to delete this?"
                                                                    )
                                                                    if (confirmBox === true) {
                                                                        this.deleteFood(bookfood.order_food_id)
                                                                    }
                                                                  }}>
                                                                        Delete Booking</button>
                                       </td>
                                   </tr> 
                                )
                            }
                        </tbody>

                    </table>

                    <div className = "row">
                    <button style={{ marginBottom: "10px" , marginTop: "10px" , width: "200px"}} className="btn btn-primary" onClick={this.addFood}> Add Food</button>
                    <button style={{ marginBottom: "10px" , marginTop: "-50px" , width: "200px", marginLeft: "1300px"}} className="btn btn-primary" onClick={this.addtobooking}>Add to booking</button>

                    </div>


                    </div>
                </div>
            </div>
            // </div>
        )
    }
}
