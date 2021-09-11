import React, { Component } from 'react';

class FooterComponent extends Component {


    constructor(props){
        super(props)
            
        this.state={
            hire:[]
  
        }
    }  





    render() {
        return (
            <div>
                     <footer className="footer">
                       <span className="text-muted">ALL Right</span>
                          
                     </footer>
            </div>
        );
    }
}

export default FooterComponent;