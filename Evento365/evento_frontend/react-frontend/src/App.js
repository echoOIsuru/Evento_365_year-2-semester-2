//import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch}from 'react-router-dom';
import FooterComponent from './bookingComponents/FooterComponent';
//import HeaderComponent from './bookingComponents/HeaderComponent';
import ListBookingComponent from './bookingComponents/ListBookingComponent';
import CreateBookingComponent from './bookingComponents/CreateBookingComponent';
import UpdateBookingComponent from './bookingComponents/UpdateBookingComponent';
import ViewBookingComponent from './bookingComponents/ViewBookingComponent';
import SuccessBooking from './bookingComponents/SuccessBooking';
import ListLocationComponent from './bookingComponents/ListLocationComponent';
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



function App() {
  return (
 

    <Router>
        
         <HeaderComponent/> 
              <Switch>    
                <Route path ="/onlinestore"  component = {OnlineStore} ></Route>  
                 <Route path="/orders" exact component={CartCheckout} /> 
                <Route path ="/" exact component = {ListBookingComponent} ></Route>
                <Route path ="/bookings" component = {ListBookingComponent} ></Route>
                <Route path ="/add-bookings/:id" component = {CreateBookingComponent}></Route>
                <Route path ="/update-bookings/:id" component = {UpdateBookingComponent}></Route>
                <Route path ="/view-bookings/:id" component = {ViewBookingComponent}></Route>
                <Route path ="/success-booking" component = {SuccessBooking}></Route>
                <Route path ="/locations" component = {ListLocationComponent}></Route>
                <Route path ="/stores" exact component = {ListStoreComponent} ></Route>
                <Route path ="/add-store" component = {CreateStoreComponent}></Route>
                <Route path = "/view-store/:id" component = {ViewStoreComponent}></Route>
                <Route path = "/view-storeitem/:id" component = {ViewStoreItem}></Route>
                <Route path = "/update-store/:id" component = {UpdateStoreComponent}></Route>
               
                <Route path ="/orderlist" exact component = {ListOrderComponent} ></Route>
                <Route path = "/Checkout" component = {Checkout}></Route>
           
      
              </Switch>
           
          <FooterComponent/> 
      </Router>
   
  );
}

export default App;
