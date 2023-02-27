// src/App.js
import './App.css';
import icon1 from "./images/icon1.png"
import icon2 from "./images/icon2.png"
import icon3 from "./images/icon3.png"
import icon4 from "./images/icon4.png"
import logo from "./images/ironhack-logo-xs.png"
import menu from "./images/menu-top-xs.png"

function App() {

  const awesomeStyle = {
    backgroundColor: "white",
    color: "gray",
    width: "150px",
    padding: "10px",
    borderRadius: "5px"

  }

  return (
    <div className="App">

      <div id='nav'>
        <img src={logo} alt="logo"  width="40px"/>
        <img src={menu} alt="menu" height="15px"/>
      </div>
      
      <section id='top'>

        <h1>Say hello to ReactJS</h1>
        <p>You will learn how to use</p>
        <p>the most popular frontend library,</p>
        <p>and became a super Ninja developer</p>
        <div style={awesomeStyle}>Awesome</div>

      </section>

      <section id='bottom'>

        <div>
          <img src={icon1} alt="icon1" width="100px"/>
          <h3>Declarative</h3>
          <p>React makes it lainless to create interactive UIs</p>
        </div>

        <div>
          <img src={icon2} alt="icon2" width="100px"/>
          <h3>Components</h3>
          <p>Build encapsulated component that manage their state</p>  
        </div>

        <div>
          <img src={icon3} alt="icon3" width="100px"/>
          <h3>Single-Way</h3>
          <p>A set of immutable values are passed to their component´s</p>
        </div>

        <div>
          <img src={icon4} alt="icon4" width="100px"/>
          <h3>JSX</h3>
          <p>Statically-typed, desgined to run on modern browsers</p>
        </div>

      </section>

    </div>
  );
}
export default App;
