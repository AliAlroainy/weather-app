import React from 'react';



function App() {
  return (
    <div className="app">
     <main>
       
     <div className="search-box">
          <input 
            type="text"
            className="search-bar"
            placeholder="Search..."
          />
        </div> 
     
        <div className="location-box">
            <div className="location">YEMEN , Taiz</div>
            <div className="date">16-sep 2020</div>
          </div>
          <div className="icon">   
                    
            </div>
          <div className="weather-box">
            <div className="temp">
              26 °c
            </div>
            
            <div className="weather"> cloudy </div>
          </div>
      
     </main>
    </div>
  );
}


export default App ;
