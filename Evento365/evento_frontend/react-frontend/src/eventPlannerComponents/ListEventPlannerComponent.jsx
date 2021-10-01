import React, { Component } from 'react';
import EventPlannerService from '../eventPlannerServices/EventPlannerService';

class ListEventPlannerComponent extends Component {


    constructor(props){
        super(props)
            
        this.state={
            events:[]
        }

        this.addevents=this.addevents.bind(this);
        this.editEventPlanner=this.editEventPlanner.bind(this);
        this.deleteEventPlanner=this.deleteEventPlanner.bind(this);

    }  

    deleteEventPlanner(id){if(window.confirm('Are you sure, want to delete the selected item?')) {
    
  
           EventPlannerService.deleteEvent_planner(id).then(res=>{
            this.setState({events:this.state.events.filter(events=>events.event_planner_id !==id)});
           });
    }
    }



    editEventPlanner(id){

      this.props.history.push(`/Update-eventplanner/${id}`);

    }




    componentDidMount(){

    EventPlannerService.getEvevent_planner().then((res) => {
        let events = res.data;
        this.setState({events:res.data})
        
        console.log('events =>' + JSON.stringify(events)); 
    });


    }

   addevents(){
     this.props.history.push('/add-eventplanner');


   }

    render() {
        return (
            <div>
                  <br />  <br />  <br />  
               <h2 className="text-center"> EVENT PLANNERS DETAILS</h2>
               <div className="row">
                   <button className="btn btn-primary" onClick={this.addevents}>ADD NEW EVENT PlANNER</button>
               </div>
               <div className="row" >
                   <div className = "background1">
                    <table className = "table table-hover table-striped table-bordered">

                       <thead>

                            <tr>
                                
                            <th>    Name  </th>
                            <th>    Phone Number    </th>
                            <th>    Email   </th>
                            <th>    Skills  </th>
                            <th>    Experience  </th>
                            <th>    Price  </th>
                            <th>   Photo  </th>
                            <th>    Action  </th>

                            </tr>

                       </thead>

                      <tbody>

                                {

                                    this.state.events.map(
                                        events =>
                                       <tr key = { events.event_planner_id}>
                                            
                                       <td> { events.name}</td>
                                       <td> { events.phone_number}</td>
                                       <td> { events.email}</td>
                                       <td> { events.skills}</td>
                                       <td> { events.experience}</td>
                                       <td>  { events.price}</td>
                                       <td>
                                           <img className="Ev_pro_pic" src={ events.img}/>
                                       </td>
                                        <td>
                                          <button onClick ={()=> this.editEventPlanner(events.event_planner_id)} className = "btn btn-info">Update</button>
                                          <button style= {{marginLeft: "10px"}} onClick ={()=> this.deleteEventPlanner(events.event_planner_id)} className = "btn btn-danger ">Delete</button>

                                        </td>

                                       </tr>

                                    )


                                }



                      </tbody>
                    </table>

                    </div>
               </div>
            </div>
        );
    }
}


export default ListEventPlannerComponent;