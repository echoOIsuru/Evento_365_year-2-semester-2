import React, { Component } from 'react';
import RentalItemService from '../rentingServices/RentalItemService';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

class RentingServiceHomeComponent extends Component {
  constructor(props){
      super(props)

      this.state = {
          rentalitems: [],
          bookingID: 2,
      }
  }

itemdetail(rentalitemid){
    this.props.history.push(`/item-detail/${rentalitemid}`);
} 

componentDidMount(){
      RentalItemService.getRentalItems().then((res) => {
          this.setState({rentalitems: res.data});
      });
}

  

  render() { 
      return (
          <div>
              <div className="row" style={{paddingTop:"170px", paddingBottom:"170px"}}>

            <div>

            <br/>
                <h1 className="text-center">Renting Items</h1>
            <br/>

            <center>

                <div class="formDiv" >
                    <Grid container >
                        {
                            this.state.rentalitems.map(
                                rentalitem =>(
                                    
                                    <Grid item key ={rentalitem.rentalitemid} xs={12} md={6} lg={3}>
                                        <Paper style={{width: 300,height: 380}} >
                                            <div className="vmCard" >
                                                <div className="imgCard">
                                                    <br/>
                                                    <img style={{width:"150px", height:"150px",radius:"10px",borderRadius:"20px",marginTop:"15px"}} src={rentalitem.image} alt="" />
                                                </div>

                                                <div className="vmCard-content">

                                                    <div className="vmCard-title">
                                                        <h3> {rentalitem.name} </h3>
                                                        <h6> {rentalitem.description} </h6>
                                                    </div>

                                                    <div className="vmCard-body">
                                                        <p> {rentalitem.rentalperday} /perDay </p>
                                                    </div>

                                                </div>

                                                <div className="vmBtn" >
                                                <button style={{marginBottom:"20px"}} onClick= {() => this.itemdetail(rentalitem.rentalitemid)} className="btn btn-dark"> See more </button>
                                                </div>
                                            </div>
                                        </Paper>
                                        <br/>
                                    </Grid>
                                                                                
                                )      
                            )

                        }
                    </Grid>
                </div>
                <br/>
            </center>
            </div>
            </div>
          </div>
      );
  }
}

export default RentingServiceHomeComponent;