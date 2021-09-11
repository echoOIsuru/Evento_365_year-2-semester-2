import React, { Component, useState } from 'react';
import BookingService from '../bookingServices/BookingService';
import LocationService from '../bookingServices/LocationService';
//import DatePicker from 'react-datepicker';
//import 'react-datepicker/dist/react-datepicker.css';
import 'react-day-picker/lib/style.css';
import DayPickerInput from 'react-day-picker/DayPickerInput';



class CreateBookingComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            eventType: '',
            CustomerID: '',
            bookingDate: '',
            locationID: '',
            gustsCount: '',
            total: '',
            toDay: new Date(),

            location: [],
            booking: [],

            year: [],
            month: [],
            date: [],

            allDate: [],
            datePattern: 'gg'
        }


        this.changeEventTypeHandler = this.changeEventTypeHandler.bind(this);
        this.changeBookingDateHandler = this.changeBookingDateHandler.bind(this);
        this.changeGustsHandler = this.changeGustsHandler.bind(this);
        this.changeLocationHandler = this.changeLocationHandler.bind(this);
        this.saveOrUpdateBooking = this.saveOrUpdateBooking.bind(this);
        this.changeTotalPriceHandler = this.changeTotalPriceHandler.bind(this);
        this.disableCustomDt = this.disableCustomDt.bind(this);

    }




    //get data to the json
    saveOrUpdateBooking = (e) => {
        e.preventDefault();

        //console.log('booking =>' +JSON.stringify(booking));

        if (this.state.id === "_add") {
            let booking = { event_type: this.state.eventType, booking_date: this.state.bookingDate, gusts: this.state.gustsCount, location_id: this.state.locationID, date: this.state.toDay, status: "pending" };
            if (this.state.bookingDate == this.state.datePattern && this.state.gustsCount <= 500) {

                BookingService.createBooking(booking).then(res => {
                    //console.log(res,"asdasd");
                    var data = res.data.booking_id;
                    //console.log(data,"dasdasdasdada");
                    this.props.history.push(`/view-bookings/${data}`);
                });
            } else {
                if (this.state.gustsCount > 500) {
                    const confirmBox = window.alert(
                        "Maximum guests count is 500 only!"
                    )
                } else {

                    const confirmBox = window.alert(
                        "Enter valid date!"
                    )
                }
            }


        } else {
            let booking = { event_type: this.state.eventType, booking_date: this.state.bookingDate, gusts: this.state.gustsCount, location_id: this.state.locationID, status: "pending" };

            if (this.state.bookingDate == this.state.datePattern && this.state.gustsCount <= 500) {
                BookingService.updateBooking(booking, this.state.id).then(res => {


                    var data = res.data.booking_id;
                    this.props.history.push(`/view-bookings/${data}`);
                });
            } else {


                if (this.state.gustsCount > 500) {
                    const confirmBox = window.alert(
                        "Maximum guests count is 500 only!"
                    )
                } else {

                    const confirmBox = window.alert(
                        "Enter valid date!"
                    )
                }
            }
        }

    }


    componentDidMount() {

        if (this.state.id === "_add") {
            LocationService.getLocations().then((res) => {
                this.setState({
                    location: res.data
                });
            });
            this.changeTotalPriceHandler();

            BookingService.getBookings().then((res) => {
                this.setState({
                    booking: res.data
                });
            });

        } else {

            BookingService.getBookingById(this.state.id).then((res) => {
                let booking = res.data;
                this.changeTotalPriceHandler();

                this.setState({
                    eventType: booking.event_type,
                    CustomerID: booking.customer_id,
                    bookingDate: booking.booking_date,
                    locationID: booking.location_id,
                    gustsCount: booking.gusts,
                    total: booking.total
                });


                BookingService.getBookings().then((res) => {
                    this.setState({
                        booking: res.data
                    });
                });


                LocationService.getLocations().then((res) => {
                    this.setState({
                        location: res.data
                    });
                });
            });

        }
    }

    changeTotalPriceHandler = (event) => {

        var temp = 0;

        this.state.location.forEach(loc => {
            if (loc.location_id == this.state.locationID)
                temp = loc.locationPrice;
        });

        //this.setState({total: temp});  

        //pass Location Name
        var loName;
        var link;

        this.state.location.forEach(location => {
            if (this.state.locationID == location.location_id) {
                loName = location.locationName;
                link = location.picture;
            }
        });

        //make session
        let obj = { name: loName, link: link };
        sessionStorage.setItem('locationName', JSON.stringify(obj));



        return <div className="form-group" style={{ paddingTop: "20px" }}>
            <lable>Total Price</lable>
            <input name="total" className="form-control formDivgg"
                value={temp} required />
        </div>


    }


    changeEventTypeHandler = (event) => {
        this.setState({ eventType: event.target.value });
    }
    changeBookingDateHandler = (event) => {
        try {
            var day = '';
            var month = '';
            day = event.getDate();
            month = event.getMonth() + 1;
            if (day < 10) {
                day = '0' + day;
            }
            if (month < 10) {
                month = '0' + month;
            }

            //create booking date formated object
            var date = event.getFullYear() + "-" + month + "-" + day;


            this.setState({ bookingDate: date, datePattern: date });
        } catch (error) {

        }


    }
    changeGustsHandler = (event) => {
        this.setState({ gustsCount: event.target.value });
    }

    changeLocationHandler = (event) => {
        this.setState({ locationID: event.target.value });
        this.changeTotalPriceHandler();

    }




    //redirect to the booking page
    cancel() {
        this.props.history.push('/bookings');
    }


    chageTite() {
        if (this.state.id === "_add") {
            return <h3 className="text-center" >Add Your Booking</h3>
        } else {
            return <h3 className="text-center" >Update Your Booking</h3>
        }
    }


    disableCustomDt() {
        var temp;
        var myArr;
        var i = 0;
        this.state.booking.forEach(book => {
            temp = book.booking_date;
            myArr = temp.split("-");
            //console.log(myArr[0]);
            this.state.year[i] = myArr[0];
            this.state.month[i] = myArr[1] - 1;
            this.state.date[i] = myArr[2];
            i++;


        });

        //console.log(myArr);
        console.log(this.state.year);
        console.log(this.state.month);
        console.log(this.state.date);

        var j = 0;
        const len = this.state.date.length;
        console.log(len);
        while (j < len) {
            this.state.allDate[j] = new Date(this.state.year[j], this.state.month[j], this.state.date[j]);
            j++;
        }

        //console.log(this.state.allDate);
        var placeholder = '';
        var tempReq = false;

        if (this.state.id === "_add") {
            placeholder = 'DD-MM-YYYY';
            tempReq = true;
        } else {
            placeholder = this.state.bookingDate;
            this.state.datePattern = placeholder;
        }


        return (
            <div>
                <DayPickerInput inputProps={{ className: 'form-control', required: tempReq }} onDayChange={this.changeBookingDateHandler}
                    placeholder={placeholder}
                    format="DD/MM/YYYY"
                    dayPickerProps={{
                        modifiers: {

                            disabled: this.state.allDate.concat({ before: new Date() })

                        }
                    }}

                />
            </div>
        )

    }

    testSession() {
        let data = sessionStorage.getItem('testCase');
        console.log(data, "SESSIONNNNNNNNNNNNNNNNNNN");
    }



    render() {
        return (
            <div >
                <header class="section background-white" >

                    <div class="line text-center">
                        <h2 class="text-dark text-s-size-30 text-m-size-40 text-l-size-60 text-thin text-line-height-1">Welcome to Booking Section</h2>
                        <br></br>
                        {this.testSession()}
                    </div>

                    <section class="full-width background-white" >

                        <div className="container formDivgg"
                            style={{ backgroundImage: "url('https://www.bricoflor.co.uk/media/catalog/product/cache/7/image/1250x1250/9df78eab33525d08d6e5fb8d27136e95/3/0/305451_8.jpg')" }} >
                            <div className="row ">
                                <div className="" style={{ marginTop: "20px" }}>
                                    <br></br>
                                    <div className="card-body">
                                        <div className="card col-md-6 offset-md-3 offset-md-3 formDivgg">
                                            {this.chageTite()}
                                        </div>

                                        <div className="card col-md-6 offset-md-3 offset-md-3 formDivgg">
                                            <form onSubmit={this.saveOrUpdateBooking.bind(this)}>
                                                <div className="form-group">
                                                    <lable >Event type</lable>
                                                    <select name="evenType" className="form-control " onChange={this.changeEventTypeHandler} value={this.state.eventType} required>
                                                        <option value="" disabled={true} style={{ textAlign: "center" }}>------------Select Event Type------------</option>
                                                        <option value="Marriage">Marriage</option>
                                                        <option value="Family function">Family Function</option>
                                                        <option value="Birthday">Birthday Party</option>
                                                        <option value="Anniversary">Anniversary Party</option>
                                                        <option value="Farewell party">Farewell Party</option>
                                                        <option value="College events">College Event</option>
                                                    </select>
                                                </div>
                                                <br></br>

                                                <div className="form-group col-md-6 ">
                                                    <lable>Booking date</lable>
                                                    {this.disableCustomDt()}
                                                </div>
                                                <br></br>

                                                <div className="form-group">
                                                    <lable>Number of Guests</lable>
                                                    <input type="number" placeholder="No of Guest" name="GustsCount" className="form-control" min="1" max="500"
                                                        onChange={this.changeGustsHandler} value={this.state.gustsCount} required />

                                                </div>
                                                <br></br>

                                                <div className="form-group col-md-6">
                                                    <lable>Location</lable>

                                                    <select style={{ width: "300px" }} name="locationID" className="form-control" onChange={this.changeLocationHandler} value={this.state.locationID} placeholder="select one" required>
                                                        <option value="" disabled={true} style={{ textAlign: "center" }}>-------Select Location-------</option>
                                                        {
                                                            this.state.location.map(
                                                                location =>

                                                                    <option value={location.location_id} selected> {location.locationName}</option>

                                                            )
                                                        }

                                                    </select>
                                                </div>

                                                <br></br>
                                                <div class="row ">
                                                    <div class="col-sm-4 ">
                                                        <div class="card " >
                                                            <div class="card-body formDivgg">
                                                                <img src="https://lh3.googleusercontent.com/proxy/jHEZjdw9IL6zXr-AY5HRbs8SX0i2tpJOkfUTie7EDGYSNI-H8DpP-ulPrlbTQ2aVLapInm8GeNfUBGno0zWeyp_rY7hGMewnQUtP0aW3TQTSFrJ2Mxlxr_eRIVX8pgwoyrD8paUG646c"></img>
                                                                <h5 class="card-title">GG WP</h5>
                                                                {/* <p class="card-text">what the hell.</p> */}
                                                                <a href="#" class="btn btn-dark">Go somewhere</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-4">
                                                        <div class="card">
                                                            <div class="card-body formDivgg">
                                                                <img src="https://i.pinimg.com/550x/de/86/ff/de86ff4993d4a4a76c539124b3b09ab4.jpg"></img>
                                                                <h5 class="card-title">GG WP</h5>
                                                                {/* <p class="card-text">what the hell.</p> */}
                                                                <a href="#" class="btn btn-dark">Go somewhere</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-4">
                                                        <div class="card">
                                                            <div class="card-body formDivgg">
                                                                <img src="https://images.squarespace-cdn.com/content/v1/5c35f6b696e76f1526f6a93a/1578108805668-YBYW3HWY42BBA2SM3977/ke17ZwdGBToddI8pDm48kNgFyjlEyNHlSWEjE-QCU1p7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UdLKTLgsLX9_T7LnpaostY9WYLb0IFNaX6bgMhY2dUNBWIB-7cQgYKo_bDpR6cEVkg/PHOTO-2020-01-04-11-27-43.jpg?format=500w"></img>
                                                                <h5 class="card-title">GG WP</h5>
                                                                {/* <p class="card-text">what the hell.</p> */}
                                                                <a href="#" class="btn btn-dark">Go somewhere</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>




                                                {
                                                    this.changeTotalPriceHandler()
                                                }


                                                <div class="d-grid gap-2 col-6 mx-auto" style={{ marginTop: "20px" }}>
                                                    <input type="submit" className="btn btn-success formDivgg" style={{ marginTop: "20px" }} value="Make Booking"></input>
                                                    <button className="btn btn-danger formDivgg" onClick={this.cancel.bind(this)}>Cancel</button>
                                                </div>

                                                <br></br>
                                                <br></br>

                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br></br>
                        </div>
                    </section>
                </header>
            </div>
        );
    }
}

export default CreateBookingComponent;