import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import FooterComponent from './bookingComponents/FooterComponent';
import HeaderComponent from './bookingComponents/HeaderComponent';
import ListBookingComponent from './bookingComponents/ListBookingComponent';
import CreateBookingComponent from './bookingComponents/CreateBookingComponent';
import UpdateBookingComponent from './bookingComponents/UpdateBookingComponent';
import ViewBookingComponent from './bookingComponents/ViewBookingComponent';
import SuccessBooking from './bookingComponents/SuccessBooking';
import ListLocationComponent from './bookingComponents/ListLocationComponent';

import ListVehicleComponent from './vehiclemanagementComponents/ListVehicleComponent';
import CreateVehicleComponent from './vehiclemanagementComponents/CreateVehicleComponent';
import UpdateVehicleComponent from './vehiclemanagementComponents/UpdateVehicleComponent';
import ViewVehicleComponent from './vehiclemanagementComponents/ViewVehicleComponent';
import UserListVehicleComponent from './vehiclemanagementComponents/UserListVehicleComponent';
import UserViewVehicleComponent from './vehiclemanagementComponents/UserViewVehicleComponent';
import UserAddRentComponent from './vehiclemanagementComponents/UserAddRentComponent';
import LandingComponent from './vehiclemanagementComponents/LandingComponent';


import ListAdminComponent from './UserProfileComponents/ListAdminComponent';
import CreateAdminComponent from './UserProfileComponents/CreateAdminComponent';
import ViewAdminComponent from './UserProfileComponents/ViewAdminComponent';
import ListCustomerComponent from './UserProfileComponents/ListCustomerComponent';
import CreateCustomerComponent from './UserProfileComponents/CreateCustomerComponent';
import ViewCustomerComponent from './UserProfileComponents/ViewCustomerComponent';
import CustomerProfile from './UserProfileComponents/CustomerProfile';
import AdminLogin from './UserProfileComponents/AdminLogin';
import CustomerLogin from './UserProfileComponents/CustomerLogin';
import CustomerForgetPassword from './UserProfileComponents/CustomerForgetPassword';
import CustomerResetPassword from './UserProfileComponents/CustomerResetPassword';
import EventoHomepage from './UserProfileComponents/EventoHomepage';



function App() {
  return (
    <div >
      <div className="bg-image"
        style={{ backgroundImage: "url('https://thumbs.dreamstime.com/b/wedding-floral-decorative-vintage-background-ecru-bege-wedding-floral-decorative-vintage-background-ecru-bege-pale-wallpaper-119328289.jpg')" }} >
        <Router>

          <HeaderComponent />
          <div className="container">
            <Switch>

              <Route path="/" exact component={ListBookingComponent} ></Route>
              <Route path="/bookings" component={ListBookingComponent} ></Route>
              <Route path="/add-bookings/:id" component={CreateBookingComponent}></Route>
              <Route path="/update-bookings/:id" component={UpdateBookingComponent}></Route>
              <Route path="/view-bookings/:id" component={ViewBookingComponent}></Route>
              <Route path="/success-booking" component={SuccessBooking}></Route>
              <Route path="/locations" component={ListLocationComponent}></Route>
    
    
              <Route path="/vehicle-admin" exact component={LandingComponent}></Route>
              <Route path="/vehicles" component={ListVehicleComponent}></Route>
              <Route path="/add-vehicle" component={CreateVehicleComponent}></Route>
              <Route path="/view-vehicle/:regNo" component={ViewVehicleComponent}></Route>
              <Route path="/update-vehicle/:regNo" component={UpdateVehicleComponent}></Route>
              <Route path="/user-vehicle" component={UserListVehicleComponent}></Route>
              <Route path="/user-view-vehicle/:regNo" component={UserViewVehicleComponent}></Route>
              <Route path="/rent-vehicle/:regNo" component={UserAddRentComponent}></Route>

              
              <Route path="/admin" component={ListAdminComponent}></Route>
              <Route path="/add-admin/:id" component={CreateAdminComponent}></Route>
              <Route path="/view-admin/:id" component={ViewAdminComponent}></Route>
              <Route path="/customer" component={ListCustomerComponent}></Route>
              <Route path="/add-customer/:id" component={CreateCustomerComponent}></Route>
              <Route path="/view-customer/:id" component={ViewCustomerComponent}></Route>
              <Route path="/admin-login" component={AdminLogin}></Route>
              <Route path="/customer-login" component={CustomerLogin}></Route>
              <Route path="/customer-profile" component={CustomerProfile}></Route>
              <Route path="/customer-passchange" component={CustomerForgetPassword}></Route>
              <Route path="/customer-passreset" component={CustomerResetPassword}></Route>
              <Route path="/homepage" component={EventoHomepage}></Route>

            </Switch>
          </div>
          <FooterComponent />
        </Router>
      </div>
    </div>
  );
}

export default App;
