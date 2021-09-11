import React, { Component } from 'react';
import VehicleService from '../vehiclemanagementServices/VehicleService';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import './vCard.css';
import './vehicleStyles.css';

class ListVehicleComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            vehicles: []

        }

    }

    viewVehicle(regNo) {
        this.props.history.push(`/user-view-vehicle/${regNo}`)
    }

    componentDidMount() {
        VehicleService.getAvailableVehicles().then((res) => {
            this.setState({ vehicles: res.data });

        });
    }


    render() {
        return (
            <div >
                <header class="section ">
                    <section class="full-width ">
                        <div className="row">
                            <br />
                            <div className="headingMods">
                                <h1>Availabe Vehicles</h1>
                            </div>
                            <br /> <br /> <br />
                            <div >


                            <div style={{ "float": "right" }}>
                                            <div className="input-group btn-group-sm ">
                                                <input type="text" style={{ border: 0 }} className="form-control" placeholder="Search.." name="search"
                                                    value={this.state.search} onChange={this.searchChange} />

                                                <div className="input-group-append btn-group-sm">
                                                    <button className="btn btn-outline-success" onClick={this.searchData}>
                                                        <i class="fa fa-search"></i>

                                                    </button>
                                                    <button className="btn btn-outline-danger" onClick={this.cancelSearch}>
                                                        <i class="fa fa-close"></i>

                                                    </button>

                                                </div>
                                            </div>


                                        </div>

                                <center>
                                    <Grid container  >
                                        {
                                            this.state.vehicles.map(
                                                vehicle => (
                                                    <Grid item key={vehicle.regNo} xs={12} md={4} lg={2}> <br />
                                                        <Paper style={{ width: 200 }}>
                                                            <div className="vmCard" >
                                                                <div className="imgCard" >

                                                                    <img src={vehicle.vImage} alt="" />
                                                                </div>

                                                                <div className="vmCard-content">

                                                                    <div className="vmCard-title">
                                                                        {vehicle.vBrand} {vehicle.vName}
                                                                    </div>

                                                                    <div className="vmCard-body">
                                                                        <p> {vehicle.price} /perDay </p>
                                                                    </div>

                                                                </div>

                                                                <div className="vmBtn" >
                                                                    <button style={{ marginTop: 10 }} onClick={() => this.viewVehicle(vehicle.regNo)} > View Details</button>
                                                                </div>
                                                            </div>
                                                        </Paper>
                                                        <br />
                                                    </Grid>
                                                )
                                            )

                                        }
                                    </Grid>
                                    <br />
                                </center>
                            </div>
                        </div>
                    </section>
                </header>
            </div>
        );

    }
}

export default ListVehicleComponent;




