import axios from 'axios';
import './App.css';
import React, { useState } from 'react';

function App() {

  //const url = 'https://api.openweathermap.org/data/2.5/weather?q=dallas&appid=9d00952ed45038ca36448be57d9e0ab0'



  return (
    /* background image*/
    <div className='app'>
      <img classname="background" src='../images/clouds32-9_bg.jpeg'></img>
      {/* two divs centered */}
      {/* div1 */}
      <div className='top container'>
        <div className='location'>
          <p>dallas</p>
        </div>
        <div className='temp'>
          <p>32</p>
        </div>
        <div className='discription'>
          <p>Clouds</p>
        </div>
      </div>

      {/* div2 */}
      <div className='bottom container'>
        {/* feels like */}
        <div className="feels">
          <p>31</p>
        </div>
        {/* wind speed */}
        <div className='windspeed'>
          <p>21</p>
        </div>
        {/* uv */}

        <div className='UV'>
          <p>8</p>
          <p>8</p>
        </div>
        {/* rain */}
        <p>0.6</p>
      </div>

    </div>
  );
}

export default App;
