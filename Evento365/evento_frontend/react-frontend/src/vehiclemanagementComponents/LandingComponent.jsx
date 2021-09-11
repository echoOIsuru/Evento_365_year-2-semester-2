import React, { Component } from 'react';
import VehicleService from '../vehiclemanagementServices/VehicleService';
import './landingPageMod.css';

class LandingComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            vehicles: []
        }
        this.addVehicle = this.addVehicle.bind(this);

    }

    addVehicle() {
        this.props.history.push('/add-vehicle/_add');
    }
    onClick = () => this.props.history.push("/vehicles");

    render() {
        return (
            <div>
                <header class="section ">
                    <section class="full-width ">
                        <div className="row">

                            <br />
                            <h2 className="text-center"> VEHICLE MANAGEMENT</h2>
                            <br />
                            <center>
                                <div className="laddBtn">
                                    <button onClick={this.addVehicle}> Add New Vehicle </button>
                                </div>
                                <div className="lModBtn">
                                    <button onClick={this.onClick}> Modify Vehicle Details </button>
                                </div>
                                <div className="lReportBtn">
                                    <button onClick="#"> Genarate Monthly Report </button>
                                </div>
                            </center>
                        </div>
                    </section>
                </header>

            </div>
        );
    }
}

export default LandingComponent;