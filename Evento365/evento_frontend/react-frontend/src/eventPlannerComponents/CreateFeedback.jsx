import React, { Component } from 'react';
import Fservice from '../eventPlannerServices/Fservice';


class CreateFeedback extends Component {

       constructor(props) {
        super(props)

        this.state = {
              
               cus_name:'',
               eventplanner_name: '',
               feedback:''


        }
        this.changeCustomerIdHandler = this.changeCustomerIdHandler.bind(this);
        this.changenameHandler = this.changenameHandler.bind(this);
         this.changfeedbackHandler = this.changfeedbackHandler.bind(this);
         this.savefeedback=this.savefeedback.bind(this);
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


 savefeedback=(e)=>{

e.preventDefault();


let feedback = {  cus_name: this.state.cus_name,  eventplanner_name: this.state.eventplanner_name, feedback: this.state.feedback };
console.log('feedback=>' + JSON.stringify(feedback));

    Fservice.createFeedback(feedback).then(res=>{
      this.props.history.push('/feedback')
    });

 }
cancel(){

    this.props.history.push('/feedback')
}

    render() {
        return (
            <div>
                 <div className="background1"></div>
        <div className ="container">
              <div className ="row">
                  <div className = "card col-md-6 offset-md-3 offset-md-3 form-background-color">
                 
                   <h3 className = "text-center"> Feedback </h3>   
                        <div className = "card-body">
                            <form>
                        
                             <div className="from-group">
                                        <label>Custommer ID:</label>
                                        <input placeholder="Custommer ID" name =" cus_name" className="form-control"
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
                               

                                    <button className = "btn btn-success" onClick={this.savefeedback}>Save </button>

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

export default CreateFeedback;