import React, { Component } from 'react';
import CustomerService from '../UserServices/CustomerService';
import Grid from '@material-ui/core/Grid';


class CustomerLogin extends Component {

    constructor(props) {
        super(props)

        this.state = {
            login: [],
            admin: [],
            validate: '',
            username: '',
            password: '',
            id: ''
        }
    }



    validateLoginInfo = (l) => {
        l.preventDefault();
        let login = { username: this.username, password: this.password };
        //console.log('login =>'+ JSON.stringify(login));


        CustomerService.validateLogin(login).then((res) => {

            this.state.id = res.data.id;

            if (res.data.username !== null) {
                this.props.history.push(`/homepage/` + this.state.id);
            } else {
                alert("Username or Password Incorrect. Please try again.");
            }
        });



    }
    usernamehandle(event) {
        this.username = event.target.value;
        console.log(this.username);
    }

    passwordhandle(event) {
        this.password = event.target.value;
    }


    render() {
        return (
            <Grid container spacing={2} justify="center">
                <div style={{ width: '450px' }}>

                    <fieldset className="blackborder transformDiv">
                        <form id="customer_login">
                            <h3>Customer Login</h3>
                            <br />

                            <div className="form-group">
                                <label>Username</label>
                                <input type="email" className="form-control" placeholder="Enter Username" onChange={this.usernamehandle.bind(this)} />
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" placeholder="Enter password" onChange={this.passwordhandle.bind(this)} />
                            </div>

                            <br />

                            <button type="submit" onClick={this.validateLoginInfo} className="userButtons">LOGIN</button>
                            <p className="forgot-password text-right">
                                <a href="/customer-passchange">Forgot password?</a>
                            </p>
                            <p className="forgot-password text-left">
                                <a href="/add-customer/_addcus">JOIN EVENTO 365 NOW</a>
                            </p>
                        </form>
                    </fieldset>
                    <br /><br /><br />
                </div>
            </Grid>

        );
    }
}



export default CustomerLogin;