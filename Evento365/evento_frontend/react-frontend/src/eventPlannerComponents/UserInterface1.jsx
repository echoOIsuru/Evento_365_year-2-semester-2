import React, { Component } from 'react';
import EventPlannerService from '../eventPlannerServices/EventPlannerService';
class UserInterface1 extends Component {
    
    constructor(props){
        super(props)
            
        this.state={
            events:[]
        }
        this.HireEventPlanner=this.HireEventPlanner.bind(this);
        this.viewEventPlanner=this.viewEventPlanner.bind(this);
        this.HireList=this.HireList.bind(this);
        this.FeedbackList=this.FeedbackList.bind(this);
    }  

    viewEventPlanner(id){

        this.props.history.push(`/eventplannerprofile/${id}`);


    }


    HireList(id){

        this.props.history.push('/hiring');


    }


    FeedbackList(id){

        this.props.history.push('/feedback');


    }

  
    HireEventPlanner(id){
       

        
        

        this.props.history.push('/hiredlist');


    }



    componentDidMount(){

    EventPlannerService.getEvevent_planner().then((res) => {
        this.setState({events:res.data})
            
    });


    }

 

    render() {
        return (
           
           
            <div>
                <div className="background"></div>
               <h2 className="text-center"> EVENT PLANNERS DETAILS</h2>
               <div className="row">
              
               </div>
               <div className="row">
                    <table className = "table table-striped table-bordered">

                       <thead>
                            <tr> 
                            <th>    ID </th>
                            <th>    Skill    </th>
                            <th>    Name  </th>
                             <th>   Photo  </th>
                            <th>    Action  </th>
                            </tr>

                       </thead>

                      <tbody>
                  
                            
            

                                {

                                    this.state.events.map(
                                        events =>
                                       <tr key = { events.event_planner_id}>
                                          <td> { events.event_planner_id}</td>  
                                          <td> { events.skills}</td>
                                        <td> { events.name}</td>
                                        <td>  <img className="Ev_pro_pic" src={ events.img}/>
                                        </td>
                                        <td>
                                        <button  className = "btn btn-success" onClick={() =>this.viewEventPlanner(events.event_planner_id)}>View</button>
                                                                                 
                                        </td>

                                       </tr>

                                    )


                                }

        

                      </tbody>
                    </table>
                    
                    <button style= {{marginLeft: "350px"}} className = "btn btn-success" onClick={this.HireList.bind(this)}>MAKE HIRE</button>
                    <button style= {{marginLeft: "50px"}} className = "btn btn-success" onClick={this.FeedbackList.bind(this)}>SEND FEEDBACK</button>
  
               </div>
            </div>
           
        );
    }
}


export default UserInterface1;