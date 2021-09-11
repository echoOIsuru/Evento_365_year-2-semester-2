import React, { Component } from 'react';
import CustomerService from '../UserServices/CustomerService';
import Grid from '@material-ui/core/Grid';

class ListCustomerComponent extends Component {
    constructor(props){
        super(props)

        this.state={
            customer :[]
        }
        this.addCustomer = this.addCustomer.bind(this);
        this.editCustomer = this.editCustomer.bind(this);
        this.deleteCustomer = this.deleteCustomer.bind(this);
    }

    deleteCustomer(id){
       CustomerService.deleteCustomer(id).then(res => {
            this.setState({customer: this.state.customer.filter(customer => customer.id !== id)});
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

    componentDidMount(){
        CustomerService.getCustomers().then((res)=>{
            this.setState({customer:res.data});
        });
    }

    addCustomer(){
        this.props.history.push('/add-customer/_addcus');
    }

    search(val) {
        CustomerService.searchCustomer(val).then((res) => {
            this.setState({ customer: res.data });
            
        });
        if(this.keyword == ""){
            this.componentDidMount();
         }else if(this.keyword == undefined){
             this.componentDidMount();
         }
         
    }

    keywordhandle(event){
        this.keyword=event.target.value;
        
    }

    searchbuttonhandle(event){
        this.search(this.keyword);
        
    }

   

    render() {
        return (
            <div>
                <br/><br/><br/><br/><br/><br/>
                <h2 className="text-center">Customer List</h2>
                <br/>
                <br/>
                <br/>
                <Grid container spacing={2} justify="center">
                <div className="row">
                    <button className = "userButtons" style={{width:'1200px'}} onClick ={this.addCustomer}>Add Customer</button>
                </div>
                </Grid>
                <br/>
                <br/>
                
                <Grid container spacing={2} justify="center">
                <div className="customersearchArea" style={{width:'1200px'}}>
                <input type="text" name="searchBox" onChange={this.keywordhandle.bind(this)} style={{marginLeft:'280px'}} className="searchBox"/>
                <button onClick={this.searchbuttonhandle.bind(this)} className="searchButtonAdmin userButtons" style={{width:'100px',height:'30px'}}>Search</button> 
                </div>
                </Grid>
                <br/>
                <br/>

                <Grid container spacing={2} justify="center">
                <div className="row" >
                    <table className="table-striped table-bordered admin_table_main" style={{width:'1200px'}}>

                        <thead>
                            <tr className="admin_table_row" style={{ backgroundColor:'rgb(100, 149, 237)'}}>
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
                            {
                                this.state.customer.map(
                                    customer =>
                                    <tr key = {customer.Id} className="admin_table_row" style={{ backgroundColor:'rgb(100, 149, 237,0.3)' , height:'80px'}} >
                                        <td>{customer.name}</td>
                                        <td>{customer.email}</td>
                                        <td>{customer.address}</td>
                                        <td>{customer.nic}</td>
                                        <td>{customer.birthday}</td>
                                        <td>{customer.mobile}</td>
                                        <td>{customer.gender}</td>
                                        <td>
                                            <button onClick={() => this.editCustomer(customer.id)} className="userButtons" style={{width:'80px',height:'35px',marginRight:'5px'}}>Update</button>
                                            <button onClick={() => this.viewCustomer(customer.id)} className="userButtons" style={{ width:'80px',height:'35px'}}>View</button>
                                            <button onClick={() => this.confirmation(customer.id)} className="userButtons" style={{ width:'80px',height:'35px',marginLeft:'5px'}}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>

                    </table>
                </div>
                </Grid>
              
<br/><br/><br/>
            </div>
        );
    }
}

export default ListCustomerComponent;