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
                hello n welcome to my portfolio! i'm natalia, a senior at uc berkeley studying data science and economics.
                <br/><br/> i like python, big data, design, and the beatles. check out some of my technical projects here or reach me at natalia16@gmail.com!

                <br/><br/> this website was designed in figma and implemented w/ react js
              
              </p>

              <a target="_blank" href=""><p className="button">resume</p></a>
              <a target="_blank" href="https://github.com/natalia1600"><p className="button">github</p></a>
              <a target="_blank" href="https://linkedin.com/in/natalia16"><p className="button">linkedin</p></a>
              {/* cartoon aesthetic pic */}
              {/* <img src={require("./assets/cat.png")}/>
              <img src={require("./assets/working.png")}/> */}
            </div>
        </div>
        
      </header>

      <body className="App-body">
        <h2>projects</h2>
        {/* aiai website proj */}
          <div className="row">
          <div>
          <a target="_blank" href="https://aiai.berkeley.edu">
            <p className="button">
            🍥 Alliance for Inclusive AI Website</p> 
            </a>
            <p>I designed and maintained this website for Berkeley HAAS Alliance for Inclusive AI,
              which is visited by hundreds of people every month! This process included prototyping 
              on Adobe InDesign, deploying via Wordpress, and studying web design principles. </p>
          </div>
          <img className="proj-pic" src={require("./assets/aiai.png")} />

          </div>

        {/* empatica */}
        <div className="row">
          <div>
          <a target="_blank" href="//https://connectedlearning.uci.edu/person/stephen-schueller/">
            <p className="button">
            🩺 iOS App: Wearable Medical Device</p> 
            </a>
            <p>My first time doing iOS development using Swift! I used the <a href="https://developer.empatica.com/">Empatica API</a> to
             establish a bluetooth connection, and created a questionnaire component of the app. I learned about modal components, 
            Core Data, and incorporating API into projects.</p>
          </div>
          <img className="proj-pic" src={require("./assets/aiai.png")} />

          </div>

        {/* game */}
        <div className="row">
          <div>
          <a target="_blank" href="//https://connectedlearning.uci.edu/person/stephen-schueller/">
            <p className="button">
            👾2D World Generator</p> 
            </a>
            <p>I used Java to implement this psuedo-random world generator for game design. To do this, 
              I used __ data structures and ___ algorithms. The game is fully playable and I also designed the visuals from scratch! 

            </p>
          </div>
          <img className="proj-pic" src={require("./assets/aiai.png")} />

          </div>

      </body>
    </div>
  );
}

export default App;
