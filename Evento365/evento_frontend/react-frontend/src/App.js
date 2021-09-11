//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FooterComponent from './bookingComponents/FooterComponent';
//import HeaderComponent from './bookingComponents/HeaderComponent';
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




import ListVehicleComponent from './vehiclemanagementComponents/ListVehicleComponent';
import CreateVehicleComponent from './vehiclemanagementComponents/CreateVehicleComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
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

import MakePaymentComponent from './PaymentHandlingComponents/MakePaymentComponent';
import PaymentManagementComponent from './PaymentHandlingComponents/PaymentManagementComponent';
import UpdatePaymentComponent from './PaymentHandlingComponents/UpdatePaymentComponent';
import PromoCodeComponent from './PaymentHandlingComponents/PromoCodeComponent';
import UpdatePromoCodeComponent from './PaymentHandlingComponents/UpdatePromoCodeComponent';
import AddPromoComponent from './PaymentHandlingComponents/AddPromoComponent';
import CreditCardComponent from './PaymentHandlingComponents/CreditCardComponent';
import PaymentComplete from './PaymentHandlingComponents/PaymentComplete';
import ListPayDetailComponent from './PaymentHandlingComponents/ListPayDetailComponent';
import ListStoreComponent from './StoreComponents/ListStoreComponent';


import CreateStoreComponent from './StoreComponents/CreateStoreComponent';
import UpdateStoreComponent from './StoreComponents/UpdateStoreComponent';
import ViewStoreComponent from './StoreComponents/ViewStoreComponent';
import ViewStoreItem from './StoreComponents/ViewStoreItem';
import CartCheckout from './StoreComponents/CartCheckout';
import OnlineStore from './StoreComponents/OnlineStore';
import Navbar from "./StoreComponents/Navbar";
import Checkout from './StoreComponents/Checkout';
import ListOrderComponent from './StoreComponents/ListOrderComponent';
//import "materialize-css/dist/css/materialize.min.css";
import HeaderComponent from './StoreComponents/HeaderComponent';



import ListFoodComponent from './foodComponents/ListFoodComponent';
import CreateFoodComponent from './foodComponents/CreateFoodComponent';
import UpdateFoodComponent from './foodComponents/UpdateFoodComponent';
import ViewFoodComponent from './foodComponents/ViewFoodComponent';
import customerFoodList from './foodComponents/customerFoodList';
import bookingFoodComponent from './foodComponents/bookingFoodComponent';
import customerviewcomponent from './foodComponents/customerviewcomponent';
import chinesefoodComponent from './foodComponents/chinesefoodComponent';





import ListEmployeeComponent from './rentingComponent/ListEmployeeComponent';
import test from './rentingComponent/test';
import RentalItemComponent from './rentingComponent/RentalItemComponent';
import CreateItemComponent from './rentingComponent/CreateItemComponent';
import UpdateItemComponent from './rentingComponent/UpdateItemComponent';
import RentingServiceHomeComponent from './rentingComponent/RentingServiceHomeComponent';
import ItemDetailComponent from './rentingComponent/ItemDetailComponent';
import OrderDetailComponent from './rentingComponent/OrderDetailComponent';


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




                 <Route path ="/onlinestore"  component = {OnlineStore} ></Route>  
                 <Route path="/orders" exact component={CartCheckout} /> 
                <Route path ="/stores" exact component = {ListStoreComponent} ></Route>
                <Route path ="/add-store" component = {CreateStoreComponent}></Route>
                <Route path = "/view-store/:id" component = {ViewStoreComponent}></Route>
                <Route path = "/view-storeitem/:id" component = {ViewStoreItem}></Route>
                <Route path = "/update-store/:id" component = {UpdateStoreComponent}></Route>
                <Route path ="/orderlist" exact component = {ListOrderComponent} ></Route>
                <Route path = "/Checkout" component = {Checkout}></Route>



                  <Route path="/" exact component = {ListFoodComponent}></Route>
                    <Route path="/food"  component = {ListFoodComponent}></Route>  
                    <Route path="/add-food" component = {CreateFoodComponent}></Route>
                    <Route path="/update-food/:id" component = {UpdateFoodComponent}></Route>
                    <Route path="/view-food/:id" component = {ViewFoodComponent}></Route>
                    <Route path="/custom"  component = {customerFoodList}></Route>
                    <Route path="/cus-book-food/:id"  component = {bookingFoodComponent}></Route>
                    <Route path="/cusview"  component = {customerviewcomponent}></Route>           
                    <Route path="/chinese/:id"  component = {chinesefoodComponent}></Route>

                    <Route path="/" exact component = {RentalItemComponent}></Route>
                    <Route path="/rentalitems" component = {RentalItemComponent}></Route>
                    <Route path="/add-rentalitem" component = {CreateItemComponent}></Route>
                    <Route path="/update-rentalitem/:rentalitemid" component = {UpdateItemComponent}></Route>
                    <Route path="/test123" component = {RentingServiceHomeComponent}></Route>
                    <Route path="/item-detail/:rentalitemid" component = {ItemDetailComponent}></Route>
                    <Route path="/order-detail" component = {OrderDetailComponent}></Route>
                    <Route path="/test" component = {test}></Route>




            </Switch>
          </div>
          <FooterComponent />
        </Router>
      </div>
                   

    </div>

  );
}

export default App;
