import React, { Component } from 'react';
import EventPlannerService from '../eventPlannerServices/EventPlannerService';
class viewEventplannerProfile extends Component {

    
    constructor(props){
        super(props)
            
        this.state={
            id: this.props.match.params.id,
            events:{}
        }

    }

      componentDidMount(){

       EventPlannerService.getEventPlannerById(this.state.id).then(res=>{
         this.setState({events:res.data});


       });

      }

    render() {
        return (
            <div>
                 <div className="background1"></div>
               <div className = "card col-md-7  offset-md-2">
                   <h3 className= "text-center">VIEW EVENT PLANNER</h3>
                   <div className="card-body">
  
                   <div className="row">
                    <img className="Ev_pro_pic2 lb" src={this.state.events.img}/>
                </div>


                      <div className="row ml_20">
                    <label> Name: &nbsp;</label>
                    <div>{this.state.events.name }</div>
                    
                </div>

                <div className="row ml_20">
                    <label>Email: &nbsp;</label>
                    <div>{this.state.events.email }</div>
                    
                </div>

                
                <div className="row ml_20">
                    <label>Phone number: &nbsp;</label>
                    <div>{this.state.events.phone_number }</div>
                    
                </div>



                
                <div className="row ml_20">
                    <label>Experience: &nbsp;</label>
                    <div>{this.state.events.experience }</div>
                    
                </div>



              


                
                <div className="row ml_20">
                    <label>Skills: &nbsp;</label>
                    <div>{this.state.events.skills }</div>
                    
                </div>



                
                <div className="row ml_20">
                    <label>Price: &nbsp;</label>
                    <div>{this.state.events.price }</div>
                    
                </div>



        </div>
     </div>
 </div>
        );
    }
}

export default viewEventplannerProfile;