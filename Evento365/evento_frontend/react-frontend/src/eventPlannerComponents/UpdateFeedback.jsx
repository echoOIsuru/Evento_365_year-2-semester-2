import React, { Component } from 'react';
import Fservice from '../eventPlannerServices/Fservice';
class UpdateFeedback extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
                id:this.props.match.params.id,
               cus_name:'',
               eventplanner_name: '',
               feedback:''


        }
        //this.id=window.location.pathname.replace(/^\D+/g, '');
         

        this.changeCustomerIdHandler = this.changeCustomerIdHandler.bind(this);
        this.changenameHandler = this.changenameHandler.bind(this);
         this.changfeedbackHandler = this.changfeedbackHandler.bind(this);
         this.updatefeedback=this.updatefeedback.bind(this);
 }


componentDidMount(){
    console.log(this.id);

Fservice.getFeedbackById(this.state.id).then((res)=>{
   let feedback=res.data;
   this.setState({cus_name:feedback.cus_name,
    eventplanner_name: feedback.eventplanner_name ,
    feedback: feedback. feedback 
});
});

}




 changenameHandler=(event)=>{


    this.setState({eventplanner_name: event.target.value});


 }



 
 changeCustomerIdHandler=(event)=>{


    this.setState({cus_name: event.target.value});


 }




 
 changfeedbackHandler=(event)=>{


    this.setState({feedback: event.target.value});


 }


 updatefeedback=(e)=>{

e.preventDefault();


let feedback = {  cus_name: this.state.cus_name,  eventplanner_name: this.state.eventplanner_name, feedback: this.state.feedback };
console.log('feedback=>' + JSON.stringify(feedback));

Fservice.updateFeedback(feedback,this.state.id).then(res=>{
    this.props.history.push('/feedback');

});


 }
cancel(){

    this.props.history.push('/feedback')
}

    render() {
        return (
            <div>
                   <br />      <br />      <br />
                 <div className="background1"></div>
        <div className ="container">
              <div className ="row">
                  <div className = "card col-md-6 offset-md-3 offset-md-3 form-background-color">
                 
                   <h3 className = "text-center"> Update Feedback </h3>   
                        <div className = "card-body">
                            <form>
                        
                             <div className="from-group">
                                        <label>Custommer ID:</label>
                                        <input placeholder="Custommer ID" name =" cus_id" className="form-control"
                                            value={this.state.cus_name} onChange={this.changeCustomerIdHandler}/>
                                    </div>
                               


                            <div className="from-group">
                                        <label>Event planner name:</label>
                                        <input placeholder="Event planner name" name =" eventplanner_name" className="form-control"
                                            value={this.state.eventplanner_name} onChange={this.changenameHandler}/>
                                    </div>
                               
                             <div className="from-group">
                                   <label>Feedback:</label>
                                    <input placeholder="Feedback" name ="feedback" className="form-control"
                                     value={this.state.feedback} onChange={this.changfeedbackHandler}/>
                                    </div>
                               

                                    
                                    <button className = "btn btn-success" onClick={this.updatefeedback}>Save </button>
                                    <button className = "btn btn-danger" onClick={this.cancel.bind(this)} style ={{marginLeft: "10px"}}>Cancel </button>
                                 
                            </form>    
                         
                        </div>

                  </div>
             </div>    
        </div>
            </div>
        );
    }
}

export default UpdateFeedback;