
import React, { Component } from "react";
import SliderImage from "./SliderImage";
import M from "materialize-css";

class Slider extends Component {
  componentDidMount() {
    const elems = document.querySelectorAll(".slider");
    M.Slider.init(elems, {
      indicators: false,
      height: 110,
      width:"100%",
    
    });
  }

  render() {
    return (
      <div className="slider test" >
        <ul className="slides" style={{fontStyle:"italic" , fontFamily:"Cursive"}}>
        
          <SliderImage
        
        //image={
        //  "image02.jpg"
          
        //}
           
            title={"FOOD PACKAGES: Chinese , Italian , Sri lankan , Indian , Thai"}
           
            classPosition={"caption right-align"} 
          />
         
          <SliderImage
            //image={
              //"image02.jpg"
              
            //}
           title={"All food packages are available in size up to 500 plates"}
           
            classPosition={"caption center-align"}
            
          />
        
          
          
        </ul>
      </div>
    );
  }
}

export default Slider;

