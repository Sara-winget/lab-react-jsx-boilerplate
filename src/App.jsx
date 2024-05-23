import './App.css';
import elephant from "./images/elephant.jpeg";

const imageData = ()=>{
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

function App() {
 

  const images = imageData(); 

  return (
    <div>
      <h1>Kalvium Gallery</h1>
      <img key={images[0].id} src={images[0].img} alt="" />
      <img key={images[1].id} src={images[1].img} alt="" />
      <img key={images[2].id} src={images[2].img} alt="" />
      <img key={images[3].id} src={images[3].img} alt="" />
    </div>
  );git
}

export default App;
