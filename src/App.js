import './App.css';

function App() {  
  
 
  return (
      /* background image*/
      <div className='background'>
      {/* two divs centered */}
      {/* div1 */}
      <div className='div1 container'>
              {/* Location selecter */}
              <p>Perth</p>
              <p>sunny</p>
      </div>

      {/* div2 */}
      <div className='div2 container'>
        {/* temp */}
        <p>32</p>
      {/* wind speed */}
        <p>21</p>
      {/* uv */}
        <p>8</p>
      {/* rain */}
        <p>0.6</p>
      </div>
      
    </div>
  );
}

export default App;
