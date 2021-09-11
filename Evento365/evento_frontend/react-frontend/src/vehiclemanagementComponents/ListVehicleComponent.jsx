import React, { Component } from 'react';
import VehicleService from '../vehiclemanagementServices/VehicleService';
import './vCard.css';

class ListVehicleComponent extends Component {
   constructor(props){
       super(props)

       this.state = {
            vehicles: []
       }
       this.addVehicle = this.addVehicle.bind(this);
       this.editVehicle = this.editVehicle.bind(this);
       this.deleteVehicle = this.deleteVehicle.bind(this);
   }

   deleteVehicle(regNo){
       //rest api call
       if(window.confirm('Are you sure, want to delete the selected vehicle?')) {
       VehicleService.deleteVehicle(regNo).then(res => {
            this.setState({vehicles: this.state.vehicles.filter(vehicle => vehicle.regNo !== regNo)});
            
       });
    }
   }

   viewVehicle(regNo){
       this.props.history.push(`/view-vehicle/${regNo}`)
   }

   editVehicle(regNo){
        this.props.history.push(`/update-vehicle/${regNo}`);
   }

   componentDidMount(){
      VehicleService.getVehicles().then((res) =>{
        this.setState({vehicles: res.data});
      }); 
   }

   addVehicle(){
       this.props.history.push('/add-vehicle/_add');
   }
    render() {
        return (
            <div>
                 <header class="section ">
                <section class="full-width ">
                <div className="row">

                <h2 className="text-center"  style={{marginBottom: "20px",marginTop: "20px"}}>VEHICLE LIST</h2>
                <div className = "row">
                    <button className="btn btn-primary" onClick={this.addVehicle} style={{height: "50px"}}> Add Vehicle </button>
                </div>
                <div className = "row">
                    <table className = "table table-hover table-striped table-bordered">

                        <thead >
                            <tr>
                                <th> Image </th>
                                <th> Vehicle Brand </th>
                                <th> Vehicle Name </th>
                                <th> Vehicle Type </th>
                                <th> No of Seats </th>
                                <th> Price per Day </th>
                                <th> Driver's Name </th>
                                <th> Driver's TP No </th>
                                <th> Features </th>
                                <th> Action </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.vehicles.map(
                                    vehicle =>
                                    <tr key = {vehicle.regNo}>
                                        <td> <img src={vehicle.vImage } style={{width:"200px", height:"130px",objectFit: "cover"}} alt=""/> </td>
                                        <td> {vehicle.vBrand} </td>
                                        <td> {vehicle.vName} </td>
                                        <td> {vehicle.vType} </td>
                                        <td> {vehicle.seat} </td>
                                        <td> {vehicle.price} </td>
                                        <td> {vehicle.driver} </td>
                                        <td> {vehicle.driverTpNo} </td>
                                        <td> {vehicle.features} </td>
                                        <td>
                                        <div className="lmBtnv" >
                                            <button onClick = { () => this.viewVehicle(vehicle.regNo)}  > View</button>
                                        </div>
                                        <div className="lmBtnu" >
                                            <button style={{marginTop: "10px"}} onClick = { () => this.editVehicle(vehicle.regNo)}  > Update</button> <br />
                                        </div>
                                        <div className="lmBtnd" >
                                            <button style={{marginTop: "10px"}} onClick = { () => this.deleteVehicle(vehicle.regNo)}> Delete </button> <br />
                                        </div>
                                        </td>

                                    </tr>
                                )
                            }
                        
                        </tbody>

                    </table>
                </div>
                </div>
                </section>
                </header>
            </div>
        );
    }
}

export default ListVehicleComponent;