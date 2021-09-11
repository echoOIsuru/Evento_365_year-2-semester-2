import React, { Component } from 'react';
import VehicleService from '../vehiclemanagementServices/VehicleService';
import './viewMod.css';

class ViewVehicleComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            regNo: this.props.match.params.regNo,
            vehicle: {}
        }
    }

    componentDidMount() {
        VehicleService.getVehicleById(this.state.regNo).then(res => {
            this.setState({ vehicle: res.data });
        });
    }

    render() {
        return (
            <div>

                <header class="section">
                <section class="full-width ">
                <div className="row">

                <h2 className="text-center" style={{ marginBottom: "10px", marginTop: "10px" }}>ADMIN View of Vehicle Details</h2>
            
                <div class="containerViewADM" >

                    <img src={this.state.vehicle.vImage} alt="img" />

                    <div class="containerViewHeadingADM ">
                        <div class="containerViewH1ADM ">
                            {this.state.vehicle.vBrand} {this.state.vehicle.vName}
                        </div>
                        <div class="containerViewSubHeadADM">
                             Price : {this.state.vehicle.price}  
                        </div>
                        <div class="pViewADM">
                            
                        <div className="view"> 
                            <ul>
                               <li> Vehicle Id :- {this.state.vehicle.regNo} </li> <br/>
                               <li> Vehicle Name :- {this.state.vehicle.vBrand} {this.state.vehicle.vName}</li>  <br/>
                               <li> Vehicle Type :- {this.state.vehicle.vType} </li>  <br/>
                               <li> Number of seats :- {this.state.vehicle.seat} </li>  <br/>
                               <li> Features :- {this.state.vehicle.features} </li>  <br/>
                               <li> Driver's Name :- {this.state.vehicle.driver}</li>  <br/>
                               <li> Driver's TP Number :- {this.state.vehicle.driverTpNo}</li>  <br/>
                            </ul>
                        </div>
                            
                        </div>

                    </div>
                </div>
                </div>
                </section>
                </header>
            </div>
        );
    }
}

export default ViewVehicleComponent;