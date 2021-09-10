//import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch}from 'react-router-dom';
import FooterComponent from './bookingComponents/FooterComponent';
import HeaderComponent from './bookingComponents/HeaderComponent';
import ListBookingComponent from './bookingComponents/ListBookingComponent';
import CreateBookingComponent from './bookingComponents/CreateBookingComponent';
import UpdateBookingComponent from './bookingComponents/UpdateBookingComponent';
import ViewBookingComponent from './bookingComponents/ViewBookingComponent';
import SuccessBooking from './bookingComponents/SuccessBooking';
import ListLocationComponent from './bookingComponents/ListLocationComponent';


function App() {
  return (
    <div className="bg-image" 
    style={{backgroundImage: "url('https://thumbs.dreamstime.com/b/wedding-floral-decorative-vintage-background-ecru-bege-wedding-floral-decorative-vintage-background-ecru-bege-pale-wallpaper-119328289.jpg')"}} >

    <Router>
          <HeaderComponent/> 
            <div className="container">
              <Switch>
                <Route path ="/" exact component = {ListBookingComponent} ></Route>
                <Route path ="/bookings" component = {ListBookingComponent} ></Route>
                <Route path ="/add-bookings/:id" component = {CreateBookingComponent}></Route>
                <Route path ="/update-bookings/:id" component = {UpdateBookingComponent}></Route>
                <Route path ="/view-bookings/:id" component = {ViewBookingComponent}></Route>
                <Route path ="/success-booking" component = {SuccessBooking}></Route>
                <Route path ="/locations" component = {ListLocationComponent}></Route>
              </Switch>
            </div>
          <FooterComponent/> 
      </Router>
    </div>
  );
}

export default App;
