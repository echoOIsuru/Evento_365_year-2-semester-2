import React, { Component } from 'react';
import EventPlannerService from '../eventPlannerServices/EventPlannerService';

class UpdateEventPlannerComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            name: '',
            phone_number: '',
            email: '',
            skills: '',
            experience: '',
            price: '',
            img: ''
        }

        this.changenameHandler = this.changenameHandler.bind(this);
        this.changePhoneHandler = this.changePhoneHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeSkillHandler = this.changeSkillHandler.bind(this);
        this.changeExperienceHandler = this.changeExperienceHandler.bind(this);
        this.changepriceHandler = this.changepriceHandler.bind(this);
        this.changeimgHandler = this.changeimgHandler.bind(this);
        this.UpdateEventPlanner = this.UpdateEventPlanner.bind(this);


    }


    componentDidMount() {

        EventPlannerService.getEventPlannerById(this.state.id).then((res) => {
            let events = res.data;
            this.setState({
                name: events.name,
                phone_number: events.phone_number,
                email: events.email,
                skills: events.skills,
                experience: events.experience,
                price: events.price,
                img: events.img
            });

        });
    }





    cancel() {

        this.props.history.push('/eventplanner');
    }

    UpdateEventPlanner = (e) => {
        e.preventDefault();
        let events = { name: this.state.name, phone_number: this.state.phone_number, email: this.state.email, skills: this.state.skills, experience: this.state.experience, price: this.state.price, img: this.state.img };
        console.log('events=>' + JSON.stringify(events));

        EventPlannerService.updateEventPlanner(events, this.state.id).then(res => {

            this.props.history.push('/eventplanner');

        });
    }


    changenameHandler = (event) => {
        this.setState({ name: event.target.value });


    }

    changePhoneHandler = (event) => {

        this.setState({ phone_number: event.target.value });


    }

    changeEmailHandler = (event) => {

        this.setState({ email: event.target.value });


    }

    changeSkillHandler = (event) => {

        this.setState({ skills: event.target.value });

    }



    changeExperienceHandler = (event) => {

        this.setState({ experience: event.target.value });

    }




    changepriceHandler = (event) => {
        this.setState({ price: event.target.value });

    }

    changeimgHandler = (event) => {
        this.setState({ img: event.target.value });

    }






    render() {
        return (
            <div className="container">
                <br />  <br />  <br />
                <div className="background1" ></div>
                <div style={{marginTop:'140px',marginBottom:'100px'}}>
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3 form-background-color">
                            <h3 className="text-center"> UPDATE EVENT PLANNERS DETAILS </h3>
                            <div className="card-body">
                                <form onSubmit={this.UpdateEventPlanner}>
                                    <div className="from-group">
                                        <img className="Ev_pro_pic" src={this.state.img} />
                                    </div>
                                    <div className="from-group">
                                        <label>Event planner name:</label>
                                        <input placeholder="Event planner name" name=" name" className="form-control"
                                            value={this.state.name} onChange={this.changenameHandler} />
                                    </div>
                                    <div className="from-group">
                                        <label> Event Planner Phone Number:</label>
                                        <input placeholder="Event Planner Phone Number" name="phone_number" className="form-control"
                                            value={this.state.phone_number} onChange={this.changePhoneHandler} pattern="[0-9]{10}" title="The phone number should consist of ten digits and numerical values only." required={true} />
                                    </div>

                                    <div className="from-group">
                                        <label> Email:</label>
                                        <input placeholder="Email" name="email" className="form-control"
                                            value={this.state.email} onChange={this.changeEmailHandler} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" title="e-mail type" required={true} required={true} />
                                    </div>

                                    <div className="from-group">
                                        <label> Skills:</label>
                                        <input placeholder="Skills" name="skills" className="form-control"
                                            value={this.state.skills} onChange={this.changeSkillHandler} required={true} />
                                    </div>

                                    <div className="from-group">
                                        <label> Experience:</label>
                                        <input placeholder="Experience" name="experience" className="form-control"
                                            value={this.state.experience} onChange={this.changeExperienceHandler} required={true} />
                                    </div>

                                    <div className="from-group">
                                        <label> Price:</label>
                                        <input placeholder="Price" name="price" className="form-control"
                                            value={this.state.price} onChange={this.changepriceHandler} required={true} />
                                    </div>

                                    <div className="from-group" style={{marginBottom:'20px'}}>
                                        <label> Image:</label>
                                        <input placeholder="Image" name="img" className="form-control"
                                            value={this.state.img} onChange={this.changeimgHandler} required={true} />
                                    </div>


                                    <input type="submit" className="btn btn-success" value="Update" />

                                    <button className="btn btn-danger " onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel </button>

                                </form>

                            </div>

                        </div>
                    </div>
                </div>

            </div>
        );
    }
}


export default UpdateEventPlannerComponent;