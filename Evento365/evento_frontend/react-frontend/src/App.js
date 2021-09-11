//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FooterComponent from './bookingComponents/FooterComponent';
import HeaderComponent from './bookingComponents/HeaderComponent';
import ListBookingComponent from './bookingComponents/ListBookingComponent';
import CreateBookingComponent from './bookingComponents/CreateBookingComponent';
import UpdateBookingComponent from './bookingComponents/UpdateBookingComponent';
import ViewBookingComponent from './bookingComponents/ViewBookingComponent';
import SuccessBooking from './bookingComponents/SuccessBooking';
import ListLocationComponent from './bookingComponents/ListLocationComponent';



import ListHireComponent from './eventPlannerComponents/ListHireComponent';
import CreateHirecomponents from './eventPlannerComponents/CreateHirecomponents';
import UpdateHiringComponent from './eventPlannerComponents/UpdateHiringComponent';
import ListEventPlannerComponent from './eventPlannerComponents/ListEventPlannerComponent';
import CreateEventPlannerComponent from './eventPlannerComponents/CreateEventPlannerComponent';
import UpdateEventPlannerComponent from './eventPlannerComponents/UpdateEventPlannerComponent';
import UserInterface1 from './eventPlannerComponents/UserInterface1';
import viewEventplannerProfile from './eventPlannerComponents/viewEventplannerProfile';
import HiredEventPlannersList from './eventPlannerComponents/HiredEventPlannersList';
import FeedBackList from './eventPlannerComponents/FeedBackList';
import CreateFeedback from './eventPlannerComponents/CreateFeedback';
import UpdateFeedback from './eventPlannerComponents/UpdateFeedback';

import ListHireComponent from './eventPlannerComponents/ListHireComponent';
import CreateHirecomponents from './eventPlannerComponents/CreateHirecomponents';
import UpdateHiringComponent from './eventPlannerComponents/UpdateHiringComponent';
import ListEventPlannerComponent from './eventPlannerComponents/ListEventPlannerComponent';
import CreateEventPlannerComponent from './eventPlannerComponents/CreateEventPlannerComponent';
import UpdateEventPlannerComponent from './eventPlannerComponents/UpdateEventPlannerComponent';
import UserInterface1 from './eventPlannerComponents/UserInterface1';
import viewEventplannerProfile from './eventPlannerComponents/viewEventplannerProfile';
import HiredEventPlannersList from './eventPlannerComponents/HiredEventPlannersList';
import FeedBackList from './eventPlannerComponents/FeedBackList';
import CreateFeedback from './eventPlannerComponents/CreateFeedback';
import UpdateFeedback from './eventPlannerComponents/UpdateFeedback';


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


	
                  <Route path = "/payments" component = {ListPayDetailComponent}></Route>
                  <Route path = "/addpaydetails" component = {MakePaymentComponent}></Route>
                  <Route path = "/paymanagement" component = {PaymentManagementComponent}></Route>  
                  <Route path = "/update-paydetails/:id" component = {UpdatePaymentComponent}></Route>
                  <Route path = "/promomanage" component = {PromoCodeComponent}></Route>
                  <Route path = "/addpromo" component = {AddPromoComponent}></Route>
                  <Route path = "/update-promo/:id" component = {UpdatePromoCodeComponent}></Route>
                  <Route path = "/card" component = {CreditCardComponent}></Route>
                  <Route path = "/complete" component = {PaymentComplete}></Route>
				  
				  <Route path="/hiring" component ={ListHireComponent}></Route>

            <Route path="/add-hire" component ={CreateHirecomponents}></Route>
            <Route path="/update-hire/:id" component ={UpdateHiringComponent}></Route>
            <Route path="/eventplanner" component ={ ListEventPlannerComponent}></Route>
            <Route path="/add-eventplanner" component ={ CreateEventPlannerComponent}></Route>
            <Route path="/Update-eventplanner/:id" component ={ UpdateEventPlannerComponent}></Route>
            <Route path="/ui" component ={ UserInterface1}></Route>
            <Route path="/eventplannerprofile/:id" component ={ viewEventplannerProfile}></Route>
            <Route path="/hiredlist" component ={ HiredEventPlannersList}></Route>
            <Route path="/feedback" component ={ FeedBackList}></Route>
            <Route path="/create_feedback" component ={ CreateFeedback}></Route>
            <Route path="/update_feedback/:id" component ={UpdateFeedback}></Route>

            </Switch>
          </div>
          <FooterComponent />
        </Router>
      </div>
    </div>
  );
}

export default App;
