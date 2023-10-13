import './App.css';
import Navbar from './components/navbar';
import Intro from './components/intro';
import Aboutme from './components/aboutme';
import Projects from './components/projects';
import Contactme from './components/contact';
// import Links from './components/links';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro/>
      {/* <Links/> */}
      <Aboutme/>
      <Projects/>
      <Contactme/>
      {/* <Links/> */}
    </div>
  );
}

export default App;
