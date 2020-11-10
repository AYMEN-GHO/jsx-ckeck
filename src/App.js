import React from 'react';
import logo from './logo.svg';
import './App.css';
import Desert from './Desert.jpg';
import Hydrangeas from './Hydrangeas.jpg';
import video1 from './earth.mp4';


function App() {
  return (
    <div className="App">
      <div>
        <span className="block-example"></span>
        <h1 className="titlered">Aymen Ghorbel</h1>
        <img src={Desert} alt="imageInSrc" height={200} />
        <img src={Hydrangeas} alt="imageInPublic" height={200}/>
      </div>
      <video src={video1} alt="video" width={320} height={240} controls="controls" autoplay="true" />
      
    </div>
  );
}

export default App;
