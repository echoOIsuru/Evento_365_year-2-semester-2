import React, { Component } from 'react';
import BookingService from '../bookingServices/BookingService';
import LocationService from '../bookingServices/LocationService';

class ViewBookingComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            booking: {},
            time: {},
            seconds: 10,
            items:[],
            approvedFlag:0,

        }

        this.timer = 0;
        this.startTimer = this.startTimer.bind(this);
        this.countDown = this.countDown.bind(this);
        this.editBooking = this.editBooking.bind(this);
        this.deleteBooking = this.deleteBooking.bind(this);
        this.chechZero = this.chechZero.bind(this);
    }

    chechZero() {
        if (this.state.time.h == 0 && this.state.time.m == 0 && this.state.time.s == 0) {
            console.log(this.state.booking.status, "DONE");

            if (this.state.booking.status == 'pending') {
                BookingService.deleteBooking(this.state.id).then(res => {
                    this.props.history.push(`/add-bookings/_add`);
                });
            }


        }
    }

    secondsToTime(secs) {
        let hours = Math.floor(secs / (60 * 60));

        let divisor_for_minutes = secs % (60 * 60);
        let minutes = Math.floor(divisor_for_minutes / 60);

        let divisor_for_seconds = divisor_for_minutes % 60;
        let seconds = Math.ceil(divisor_for_seconds);

        let obj = {
            "h": hours,
            "m": minutes,
            "s": seconds
        };
        return obj;
    }

    countDown() {
        // Remove one second, set state so a re-render happens.
        let seconds = this.state.seconds - 1;
        this.setState({
            time: this.secondsToTime(seconds),
            seconds: seconds,
        });

        // Check if we're at zero.
        if (seconds == 0) {
            clearInterval(this.timer);

        }
    }



    componentDidMount() {

        // this.state.items =sessionStorage.getItem('locationName');
        // this.state.items =JSON.parse(this.state.items);
        //console.log(this.state.items,"LOCAAAAAAA");

        var dbDate;
        BookingService.getBookingById(this.state.id).then(res => {
            this.setState({ booking: res.data });

        LocationService.getLocationById(res.data.location_id).then(res=>{
                this.setState({
                    items: res.data
                });
            });


            dbDate = new Date(res.data.date);

            //console.log(dbDate,"DATEEEEEEEEEEEE");


            var date = new Date();
            var date2 = dbDate.getTime() + (24 * 60 * 60 * 1000) + 10000;

            var diffTime = (date2 - date);
            if(diffTime < 0 || this.state.approvedFlag==1)
                diffTime=0;
            this.state.seconds = diffTime / 1000;

            this.startTimer();

            let timeLeftVar = this.secondsToTime(this.state.seconds);
            this.setState({ time: timeLeftVar });
        });





    }


    startTimer() {
        if (this.timer == 0 && this.state.seconds > 0) {
            this.timer = setInterval(this.countDown, 1000);
        }
    }


    editBooking(id) {
        this.props.history.push(`/add-bookings/${id}`);

    }

    deleteBooking(id) {
        BookingService.deleteBooking(id).then(res => {
            this.props.history.push(`/add-bookings/_add`);
        });
    }

    status(){
        if(this.state.booking.status=='pending'){
            var date =new Date(this.state.booking.date)
            var nextDay = date.getTime() + (24 * 60 * 60 * 1000) + 8000;
            nextDay = new Date(nextDay);
            
            return( <div> Your Booking is pending.... pay before 
                {" "+nextDay.getFullYear()+"/"+(nextDay.getMonth()+1)+"/"+nextDay.getDate()
                    
                }  
            </div>);
        
        
        }else if(this.state.booking.status=='approved'){
            this.state.approvedFlag=1;
            return( <div> Your Booking is approved... </div>); 
        }else{
            return( <div> Your Booking is approved... </div>); 
        }
    }


    render() {
            
        return (
            <div>
                <header class="section background-white">

                    <div class="line text-center">
                        <h2 class="text-dark text-s-size-30 text-m-size-40 text-l-size-40 text-thin text-line-height-1">{this.status()}</h2>
                        <br></br>
                    </div>

                    <section class="full-width background-white ">

                        <div>

                            <center>
                                <lable onChange={this.chechZero()}>
                                Time remaining
                                    <ul >
                                        <li className="formDivgg"><span style={{ paddingLeft: "20px" }}>{this.state.time.h<10?"0"+this.state.time.h:this.state.time.h} :</span> Hours</li>
                                        <li className="formDivgg"><span style={{ paddingLeft: "30px" }}>{this.state.time.m<10?"0"+this.state.time.m:this.state.time.m} :</span> Minutes</li>
                                        <li className="formDivgg"><span style={{ paddingLeft: "30px",paddingRight:"20px" }}>{this.state.time.s<10?"0"+this.state.time.s:this.state.time.s==60?"00":this.state.time.s} </span> Seconds</li>

                                    </ul>

                                </lable>
                                    
                            </center>
                        </div>

                        <br></br>
                        <div className="container shadow-custom bg-image formDivgg"
                            style={{ backgroundImage: "url('https://www.bricoflor.co.uk/media/catalog/product/cache/7/image/1250x1250/9df78eab33525d08d6e5fb8d27136e95/3/0/305451_8.jpg')" }} >
                         <br/>  
                        <div className=" formDivgg shadow-custom">
                        <br/> 
                           
                            <h3 className="text-center formDivgg card col-md-6 offset-md-3">Booking Details</h3>
                            <div className="card-body formDivgg card col-md-6 offset-md-3" >
                            <center>
                                <div className="row">
                                    <label> <b>Booking ID</b> : {this.state.booking.booking_id} </label>
                                </div>
                                <br/>
                                <div className="row">
                                    <label> <b>Booking Date</b> : 
                                     {" "+this.state.booking.booking_date} </label>
                                </div>
                                <br/>
                                <div className="row">
                                    <label> <b>Event Type</b> 
                                     {" : "+this.state.booking.event_type} </label>
                                </div>
                                <br/>
                                <div align="center">
                                    
                                    <label> <b>Location</b> </label>
                                    <div> {this.state.items.locationName}</div>
                                    <img style={{ height: "200px", width: "300px"}} src={this.state.items.picture} className="img-thumbnail formDivgg" />
                                    
                                </div>
                                <br/>
                                <div className="row">
                                    <label> <b>No of guests</b> </label>
                                    <div> {this.state.booking.gusts} </div>
                                </div>
                                <br/>
                                <div className="row">
                                    <label><b>Total Amount</b> </label>
                                    <div> {this.state.booking.total} </div>
                                </div>
                                <br/>
                                <div>
                                    <button onClick={() => this.editBooking(this.state.booking.booking_id)} disabled={this.state.approvedFlag==1?true:false} className="btn btn-info formDivgg">Update My Booking</button>
                                    <button style={{ marginLeft: "10px" }} disabled={this.state.approvedFlag==1?true:false}
                                        onClick={() => {
                                            const confirmBox = window.confirm(
                                                "Do you really want to cancel your booking?"
                                            )
                                            if (confirmBox === true) {
                                                this.deleteBooking(this.state.booking.booking_id)
                                            }
                                        }}
                                        className="btn btn-danger formDivgg">Cancel My Booking</button>
                                </div>
                                </center>
                            </div>
                            <br/>  
                        </div>
                        <br/>  
                        </div>
                         
                    </section>
                    
                </header>

            </div>
        );
    }
}

export default ViewBookingComponent;