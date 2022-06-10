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
              <img src={require("./assets/group1.png")} />
            </div>
            <div id="blurb">
              <p>
                hello! i'm natalia, a senior at uc berkeley studying data science and economics.
                <br/><br/> i like python, big data, design, and the beatles. check out some of my technical projects here or reach me at natalia16@gmail.com!
              </p>

              <a href=""><p className="button">resume</p></a>
              <a href=""><p className="button">github</p></a>
              <a href=""><p className="button">linkedin</p></a>
              {/* cartoon aesthetic pic */}
              {/* <img src={require("./assets/cat.png")}/>
              <img src={require("./assets/working.png")}/> */}
            </div>
        </div>
        
      </header>

      <body className="App-body">
        <h3>projects</h3>
        <p>alliance for inclusive AI website: </p>

      </body>
    </div>
  );
}

export default App;
