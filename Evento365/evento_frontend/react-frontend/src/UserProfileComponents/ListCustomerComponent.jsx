import React, { Component } from 'react';
import CustomerService from '../UserServices/CustomerService';
import Grid from '@material-ui/core/Grid';

class ListCustomerComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            all_customer: [],
            currentPage: 1,
            usersPerPage: 5,
            search: ''
        }
        
        this.addCustomer = this.addCustomer.bind(this);
        this.editCustomer = this.editCustomer.bind(this);
        this.deleteCustomer = this.deleteCustomer.bind(this);
        this.searchChange = this.searchChange.bind(this);

    }

    changePage = event => {
        //console.log(event,"asdasdwqeqwe")
        this.setState({
            [event.target.name]: parseInt(event.target.value) //without bind
            //currentPage: parseInt(event.target.value)  same
        });
    }

    firstPage = () => {
        if (this.state.currentPage > 1) {
            this.setState({
                currentPage: 1
            });
        }
    };

    prevPage = () => {
        if (this.state.currentPage > 1) {
            this.setState({
                currentPage: this.state.currentPage - 1
            });
        }
    };

    lastPage = () => {
        if (this.state.currentPage < Math.ceil(this.state.all_customer.length / this.state.usersPerPage)) {
            this.setState({
                currentPage: Math.ceil(this.state.all_customer.length / this.state.usersPerPage)
            });
        }
    };

    nextPage = () => {
        if (this.state.currentPage < Math.ceil(this.state.all_customer.length / this.state.usersPerPage)) {
            this.setState({
                currentPage: this.state.currentPage + 1
            });
        }
    };



    componentDidMount() {
        CustomerService.getCustomers().then((res) => {
            this.setState({ all_customer: res.data });
        });

    }

    
    searchChange(event) {
        this.setState({
            search: event.target.value
        });

    }

    cancelSearch = () => {
        this.setState({
            "search": ''
        });

        CustomerService.getCustomers().then((res) => {
            this.setState({
                all_customer: res.data
            });

        });
        this.state.currentPage = 1;

    }

    searchData = () => {
        CustomerService.searchCustomer(this.state.search).then((res) => {
            this.setState({ all_customer: res.data,
                currentPage: 1
            });

        });
    }

    confirmation(id){
        var result = window.confirm("Are you sure to delete?");
        if(result){
            CustomerService.deleteCustomer(id).then(res => {
                this.setState({ customer: this.state.customer.filter(customer => customer.id !== id) });
            });
        }
    }

    viewCustomer(id){
        this.props.history.push(`/view-customer/${id}`);    
    }

    editCustomer(id){
        this.props.history.push(`/add-customer/${id}`);
    }

    addCustomer(){
        this.props.history.push('/add-customer/_addcus');
    }

    deleteCustomer(id){
        CustomerService.deleteCustomer(id).then(res => {
             this.setState({customer: this.state.customer.filter(customer => customer.id !== id)});
         });
     }
 



    render() {
        const { all_customer, currentPage, usersPerPage, search } = this.state;
        const lastIndex = currentPage * usersPerPage;
        const firsIndex = lastIndex - usersPerPage;
        const curretBookings = all_customer.slice(firsIndex, lastIndex);
        const totalPage = Math.ceil(all_customer.length / usersPerPage);

        return (
            <div  style={{marginTop:'60px'}}>

                <main role="main">
                    <header class="section">
                        <article>
                            <div class="line text-center">
                                <h2 class="text-dark   text-thin text-line-height-1">USER MANAGER</h2>
                                <br></br>
                            </div>
                            <Grid container spacing={2} justify="center">
                            <section class="full-width"  style={{width:'1400px'}}>

                                <div className="row" >

                                    <ul class="nav nav-tabs nav-justified mb-3 " id="ex1" role="tablist">
                                        <li class="nav-item " role="presentation">
                                            <a
                                                class="nav-link active"
                                                id="ex3-tab-1"
                                                data-mdb-toggle="pill"
                                                href=""
                                                role="tab"
                                                aria-controls="ex3-pills-1"
                                                aria-selected="true"
                                            >REGISTERED CUSTOMERS</a
                                            >
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <a
                                                class="nav-link"
                                                id="ex3-tab-2"
                                                data-mdb-toggle="pill"
                                                href="/list-admin"
                                                role="tab"
                                                aria-controls="ex3-pills-2"
                                                aria-selected="false"
                                            >ADMINS</a
                                            >
                                        </li>

                                    </ul>

                                </div>
                                <br></br>

                                <div className="row formDivgg">
                                    <div style={{ background: "#F2F2F2" }}>

                                        <div style={{ "float": "left" }}>
                                            <i class="fa fa-list-alt"> EVENTO 365 USER MANAGEMENT</i>
                                        </div>

                                        <div style={{ "float": "right" }}>
                                            <div className="input-group btn-group-sm " style={{marginTop:'5px'}}>
                                                <input type="text" style={{ border: 0 }} className="form-control" placeholder="Search.." name="search"
                                                    value={this.state.search} onChange={this.searchChange} />

                                                <div className="input-group-append btn-group-sm">
                                                    <button className="btn btn-outline-success" style={{width:'35px'}} onClick={this.searchData}>
                                                        <i class="fa fa-search"></i>

                                                    </button>
                                                    <button className="btn btn-outline-danger"  style={{width:'35px'}} onClick={this.cancelSearch}>
                                                        <i class="fa fa-close">🗘</i>

                                                    </button>

                                                </div>
                                            </div>


                                        </div>
                                        <br /><br />
                                    </div>

                                    <table className="table table-striped table-bordered">
                                        <thead>
                                            <tr>
                                                <th> Name</th>
                                                <th> Email</th>
                                                <th> Address</th>
                                                <th> NIC</th>
                                                <th> Birthday</th>
                                                <th> Mobile</th>
                                                <th> Gender</th>
                                                <th> Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {curretBookings.length === 0 ?
                                                <tr align="center">
                                                    <td colSpan="6">No Entries Available</td>
                                                </tr> :
                                                curretBookings.map(
                                                    customer =>
                                                        <tr key={customer.id}>
                                                            <td>{customer.name}</td>
                                                            <td>{customer.email}</td>
                                                            <td>{customer.address}</td>
                                                            <td>{customer.nic}</td>
                                                            <td>{customer.birthday}</td>
                                                            <td>{customer.mobile}</td>
                                                            <td>{customer.gender}</td>
                                                            <td>
                                                                <div class="btn-group" role="group" >
                                                                    <button onClick={() => this.editCustomer(customer.id)} className="userButtons" style={{ width: '80px', height: '35px', marginRight: '5px'  }}>Update</button>
                                                                    <button onClick={() => this.viewCustomer(customer.id)} className="userButtons" style={{ width: '80px', height: '35px' }}>View</button>
                                                                    <button onClick={() => this.confirmation(customer.id)} className="userButtons" style={{ width: '80px', height: '35px', marginLeft: '5px' }}>Delete</button>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                )
                                            }
                                        </tbody>
                                    </table>
                                    <tfoot >
                                        <div style={{ "float": "left" }}>
                                            Showing Page {currentPage} of {totalPage}
                                        </div>
                                        <div style={{ "float": "right" }}>
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend">
                                                    <button className="btn" disabled={currentPage === 1 ? true : false}
                                                        onClick={this.firstPage}>
                                                        <i class="fa fa-backward"> First</i>

                                                    </button>
                                                    <button className="btn" disabled={currentPage === 1 ? true : false}
                                                        onClick={this.prevPage}>
                                                        <i class="fa fa-step-backward"> Prev</i>

                                                    </button>
                                                </div>
                                                <input type="text" name="currentPage" className="form-control" style={{ width: "50px" }} value={currentPage}
                                                    onChange={this.changePage} />

                                                <div className="input-group-append">
                                                    <button className="btn" disabled={currentPage === totalPage ? true : false}
                                                        onClick={this.nextPage}>
                                                        <i class="fa fa-step-forward"> Next</i>

                                                    </button>
                                                    <button className="btn" disabled={currentPage === totalPage ? true : false}
                                                        onClick={this.lastPage}>
                                                        <i class="fa fa-forward"> Last</i>

                                                    </button>

                                                </div>
                                            </div>
                                        </div>
                                    </tfoot>
                                </div>

                            </section>
                            </Grid>

                        </article>
                    </header>
                </main>





            </div>
        );
    }
}

export default ListCustomerComponent;