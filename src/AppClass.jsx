import { Component } from "react";
import "./App.css"
import elephant from "./images/elephant.jpeg";

export default class AppClass extends Component{
  render(){
  imageData = ()=>{
    let data = [
      {
        id:1,
        img:elephant
      },
      {
        id:2,
        img:elephant
      },
      {
        id:3,
        img:elephant
      },
      {
        id:4,
        img:elephant
      }
    ]
    return (
      <div>
        <img key={images[0].id} src={images[0].image} alt={`Image ${images[0].id}`} />
        <img key={images[1].id} src={images[1].image} alt={`Image ${images[1].id}`} />
         <img key={images[2].id} src={images[2].image} alt={`Image ${images[2].id}`} />
         <img key={images[3].id} src={images[3].image} alt={`Image ${images[3].id}`} />
      </div>
    );
  }
  }
  
}
