import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Title of page */}
        <br/><br/>
       <h1>✨ Natalia Ramirez ✨</h1>

        <div className="row">
           {/* picture of self */}
            <div>
              <img src={require("./assets/group1.png")} />
            </div>
            <div id="blurb">
              <p>
                <br/><br/>
                Hello! I'm natalia, a senior at UC Berkeley studying data science and economics.
                <br/><br/> Some of my favorite things ever include design, Python, my cat, and The Beatles. Scroll to learn about some of my technical projects, and feel free to contact me at natalia16@berkeley.edu!

                <br/><br/> (I designed this website in figma and implemented it using ReactJS)
              
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
          <img className="proj-pic" src={require("./assets/E4specs.png")} />

          </div>

        {/* game */}
        <div className="row">
          <div>
          <a target="_blank" href="//https://connectedlearning.uci.edu/person/stephen-schueller/">
            <p className="button">
            👾2D World Generator</p> 
            </a>
            <p>I used Java to implement this psuedo-random world generator for game design. To do this, 
              I used doubly linked lists and hash maps, as well as Dijkstra's algorithm. The game is fully playable and I also designed the visuals from scratch! 

            </p>
          </div>
          <img className="proj-pic" src={require("./assets/cs61bee.png")} />

          </div>

      </body>
    </div>
  );
}

export default App;
