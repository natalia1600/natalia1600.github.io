import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Title of page */}
       <h1>✨ natalia ramirez ✨</h1>

        <div className="row">
           {/* picture of self */}
            <div>
              <img src={require("./assets/me.png")} height="500"/>
            </div>
            <div id="blurb">
              <p>
                hello! i'm natalia, a senior at uc berkeley studying data science and economics. i like python, big data, design, and the beatles. check out some of my technical projects here or reach me at natalia16@gmail.com!
              </p>
              {/* cartoon aesthetic pic */}
              <img src={require("./assets/working.png")} height="300"/>
            </div>
        </div>
          
            

        
        
        
      </header>
    </div>
  );
}

export default App;
