import React, { Component } from 'react';
import StoreService from '../StoreServices/StoreService';
import Grid from '@material-ui/core/Grid';




class ListStoreComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            all_stores: []
        }
        this.addStore = this.addStore.bind(this);
        this.editStore = this.editStore.bind(this);
        this.deleteStore = this.deleteStore.bind(this);
        this.searchbuttonhandle = this.searchbuttonhandle.bind(this);
        this.search = this.search.bind(this);
        this.keywordhandle = this.keywordhandle.bind(this);

    }

    deleteStore(item_id) {
        //rest api
        StoreService.deleteStore(item_id).then(res => {
            this.setState({ all_stores: this.state.all_stores.filter(store => store.item_id !== item_id) });
        });
    }

    viewStore(item_id) {
        this.props.history.push(`/view-store/${item_id}`);
    }

    editStore(item_id) {
        this.props.history.push(`/update-store/${item_id}`);
    }

    componentDidMount() {
        StoreService.getStores().then((res) => {
            this.setState({ all_stores: res.data });
        });
    }

    addStore() {
        this.props.history.push('/add-store');
    }


    search(val) {
        StoreService.searchStores(val).then((res) => {
            this.setState({ all_stores: res.data });

        });
        if (this.keyword == "") {
            this.componentDidMount();
        } else if (this.keyword == undefined) {
            this.componentDidMount();
        }

    }


    searchbuttonhandle(event) {
        this.search(this.keyword);

    }

    keywordhandle(event) {
        this.keyword = event.target.value;

    }


    td = () => {
        return {
            width: "100%",
            marginLeft: "10%",
        };
    };
    th = () => {
        return {
            width: "100%",
            marginLeft: "10%",
        };
    };


    render() {

        return (


            <div style={{ margin: "50px" }}>
                <div>
                    {/*   <div className="box" style={{background: `linear-gradient(${color1}, ${color2})`}} /> */}
                    <div style={{ "float": "right" }}>
                        <div className="input-group btn-group-sm ">
                            <input type="text" style={{ border: 0,backgroundColor:"white",borderRadius:"5px",marginRight:"15px",width:"300px" }} className="form-control" placeholder="Search here..." name="search" onChange={this.keywordhandle} 
                           ></input>
                                <input type="submit" style={{ marginRight: "0px",padding:"10px",height:"40px" }} class="btn light-blue lighten-2" onClick={this.searchbuttonhandle} value="search" />
                       

                        </div>
                    </div>


                    {/* <div class="col-sm-3 col-md-3 pull-right">
    <form class="navbar-form" role="search">
        <div class="input-group">
            <input type="text" class="form-control" placeholder="Search"
                                                    name="srch-term" id="srch-term"/>
            <div class="input-group-btn">
                <button class="btn btn-default" type="submit">
                    <i class="glyphicon glyphicon-search"></i>
                </button>
            </div>
        </div>
    </form>
</div> */}
                    <br></br><br></br>
                <b>    <h4 className="text-center" style={{fontStyle:"Bebas Neue"}}>ITEM LIST</h4></b>
                   
                    <div>
                        <button class="btn light-blue lighten-2" onClick={this.addStore}>Add Item</button>
                    </div>
                    <br></br>
                    <div className="row">
                        {/* <Grid container spacing={2} justify="center">
                <div className="customersearchArea" style={{width:'200px'}}> 
                <input type="text" name="searchBox"  style={{marginLeft:'280px'}} className="searchBox"/>
                <button  className="searchButtonAdmin userButtons" style={{width:'100px',height:'30px'}}>Search</button> 
                </div>
                </Grid> */}


                        <br />
                        <br />
                        {/* onClick={this.searchbuttonhandle.bind(this)} onChange={this.keywordhandle.bind(this)}*/}
                        <table className="table table-striped table-bordered">
                            <thead class="table-danger">
                                <tr>

                                    <th>Item Title</th>
                                    <th>Description</th>
                                    <th>Item Category</th>
                                    <th>Colour</th>

                                    <th>Additional</th>
                                    <th>Price</th>
                                    <th>Availability</th>

                                    <th style={{ width: "10%" }}>Image</th>
                                    <th style={{ width: "50%" }}>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.all_stores.map(
                                        stores =>
                                            <tr class="table-info" style={{ height: "5%" }} key={stores.item_id}>
                                                <td>{stores.item_title}</td>
                                                <td style={{ width: "10%" }}>{stores.description}</td>
                                                <td style={{ width: "5%" }}>{stores.itemcategory}</td>
                                                <td>{stores.colour}</td>

                                                <td style={{ width: "10%" }}>{stores.additional}</td>
                                                <td>{stores.price}</td>
                                                <td>{stores.availability}</td>
                                                <td>
                                                <img className="store_pic" src={stores.img_url} />
                                                </td>
                                                <td ><div class="btn-group" role="group" >

                                                    <button onClick={() => this.editStore(stores.item_id)} class="deep-purple lighten-2 btn" style={{ width: "80px" }}>Update</button>

                                                    <button class="waves-effect waves-light btn pink darken-1" style={{ width: "80px", marginLeft: "10px" }}
                                                        onClick={() => {
                                                            const confirmBox = window.confirm(
                                                                "Do you really want to delete this record?"
                                                            )
                                                            if (confirmBox === true) {
                                                                this.deleteStore(stores.item_id)
                                                            }
                                                        }}>Delete</button>

                                                    <button onClick={() => this.viewStore(stores.item_id)} class="deep-purple lighten-2 btn" style={{ width: "80px",marginLeft: "10px" }}>View</button>

                                                </div></td>

                                            </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        );
    }
}

export default ListStoreComponent;

{/* <div class="btn-group" role="group" >

<button onClick={() => this.editStore(stores.item_id)}  class="deep-purple lighten-2 btn" style={{ width: "80px" }}>Update</button>

<button class="waves-effect waves-light btn pink darken-1" style={{ width: "80px",marginLeft: "10px" }}
    onClick={() => {
        const confirmBox = window.confirm(
            "Do you really want to delete this record?"
        )
        if (confirmBox === true) {
            this.deleteStore(stores.item_id)
        }
    }}>Delete</button>

<button onClick={() => this.viewStore(stores.item_id)} class="deep-purple lighten-2 btn" style={{width:"80px"}}>View</button>

</div> */}












