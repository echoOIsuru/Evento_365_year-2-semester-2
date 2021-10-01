import React, { Component } from 'react';
import StoreService from '../StoreServices/StoreService'
import Grid from '@material-ui/core/Grid';

const myStyle = {
    /*color: "#000080,*/
    background: "linear-gradient(to bottom, white, #E6E6FA)",
    backgroundRepeat: "no-repeat"

};

class ViewStoreComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            store: {}

        }
    }


    componentDidMount() {
        StoreService.getStoresById(this.state.id).then(res => {
            this.setState({ store: res.data });
        })
    }


    render() {
        return (
            <div style={{
                backgroundImage: `url("https://thumbs.dreamstime.com/b/pastel-watercolor-background-abstract-as-144488478.jpg")`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }}>

                <div>
                    <br></br>
                    <Grid container spacing={2} justify="center">
                        <div className="card col-md-20 offset-md-10" >
                            <h4 className="text-center"> {this.state.store.item_title}</h4>
                            <div className="card-body">
                                <table>
                                    <th></th>
                                    <th></th>
                                    <tr><th style={{ width: "30%" }}> Item Title:</th>
                                        <td style={{ color: "#000080" }}>{this.state.store.item_title}</td></tr> <br></br>


                                    <tr><th style={{ width: "30%" }}> Description:</th>
                                        <td style={{ color: "#000080" }}>{this.state.store.description}</td></tr> <br></br>


                                    <tr><th style={{ width: "30%" }}> Item Category :</th>
                                        <td style={{ color: "#000080" }}>{this.state.store.itemcategory}</td></tr> <br></br>

                                    <tr><th style={{ width: "30%" }}>  Colour:</th>
                                        <td style={{ color: "#000080" }}>{this.state.store.colour}</td></tr> <br></br>



                                    <tr><th style={{ width: "30%" }}> Price:</th>
                                        <td style={{ color: "#000080" }}><p>Rs.{this.state.store.price}</p></td></tr> <br></br>

                                    <tr><th style={{ width: "30%" }}>  Availabilty: </th>
                                        <td style={{ color: "#000080" }}>{this.state.store.availability}</td></tr> <br></br>



                                    <tr><th style={{ width: "30%" }}>Image:</th>
                                        <td style={{ color: "#000080" }}>
                                            <div className="from-group">

                                                <img className="store_pic" src={this.state.store.img_url} />

                                            </div>
                                        </td></tr> <br></br>



                                </table>


                            </div>

                        </div>
                    </Grid>   </div>
            </div>
        )
    }
}


export default ViewStoreComponent;