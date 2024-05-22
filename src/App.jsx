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
  // code here
//  const images=imageData();
//  return (
//    <div>
//      {images.map(image => (
//        <img key={image.id} src={image.img} alt={`Image ${img.id}`} />
//      ))}
//    </div>
//  );

  const images = imageData(); // Get the array of image objects

  return (
    <div>
      <img key={images[0].id} src={images[0].img} alt={`Image ${images[0].id}`} />
      <img key={images[1].id} src={images[1].img} alt={`Image ${images[1].id}`} />
      <img key={images[2].id} src={images[2].img} alt={`Image ${images[2].id}`} />
      <img key={images[3].id} src={images[3].img} alt={`Image ${images[2].id}`} />
    </div>
  );
}

export default App;
