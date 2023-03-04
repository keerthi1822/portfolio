import { BrowserRouter } from 'react-router-dom';

import AboutMe from './components/aboutme/AboutMe';
import LandingPage from './LandingPage';
import Navigation from './components/navigation/Navigation'
import Education from './components/education/Education';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/./contact/Contact';

import './App.css';


function App() {

  const ColoredLine = ({ color }) => (
    <hr
      style={{
        color: color,
        backgroundColor: color,

      }}
    />
  );

  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Navigation />
          <div id="home">
            <LandingPage ColoredLine={ColoredLine} />
          </div>
          <div id="AboutMe">
            <AboutMe />
          </div>
          <div id="Portfolio">
            <Portfolio ColoredLine={ColoredLine} />
          </div>
          <div id="Education">
            <Education />
            <ColoredLine color="gray" />
          </div >
          <div id="Contact">
            <Contact />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}


export default App;
