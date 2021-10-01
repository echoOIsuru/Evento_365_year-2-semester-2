import React, { Component } from "react";
import Card from "./Card";

import StoreService from '../StoreServices/StoreService';
import "materialize-css/dist/css/materialize.min.css";
//import "../Styles/Store.css";




class BirthdayCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
        all_stores: []
    };
  }

   
      componentDidMount(){
     StoreService. getItempackages("birthday").then((res) =>{
         this.setState({all_stores: res.data});
     });
    
    }



    // componentDidMount(){
        // StoreService.getStores().then((res) =>{
            //  this.setState({all_stores: res.data});
        //  });
    //  }
 

  render() {
    return (
      <div style={{ 
        backgroundImage: `url("https://www.solidbackgrounds.com/images/1920x1080/1920x1080-pale-pink-solid-color-background.jpg")` 
      }}>
      <div>
    
        <h4 className="center-align"><br></br>
          <span className="teal-text">Birthday</span> 
        </h4>
        <div className="container">
          <div className="row">
          <table> <th></th><th></th><th></th><th></th><tr><td>
            {this.state.all_stores.map((stores) => {
              return (
                <Card
               
                  item_id={stores.item_id}
                  item_title={stores.item_title}
                  description={stores.description}
                  itemcategory={stores.itemcategory}
                  colour={stores.colour}
                  brand={stores.brand}
                 additional={stores.additional}
                 price={stores.price}
                 img_url={stores.img_url}
                />
                

                
              );
            })}</td></tr></table>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default BirthdayCategory;
