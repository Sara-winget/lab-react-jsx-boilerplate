import { Component } from "react";
import "./App.css"
import elephant from "./images/elephant.jpeg";

export default class AppClass extends Component{
  
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
    return data;
  }
  
  render(){
    const images=this.imageData();
    return (
      <div className='app'>
      <h1 className='kalvium'>Kalvium Gallery</h1>
     
        <div className='img'>

<div className='img1'>
        <img key={images[0].id} src={images[0].img} height={500} />
        <img key={images[1].id} src={images[1].img} height={500} />
        </div>
        <div className='img2'>
          <img key={images[2].id} src={images[2].img} height={500} />
         <img key={images[3].id} src={images[3].img}  height={500} />
      </div>
    </div>
      </div>
    );
  }
  
}
