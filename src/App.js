import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import HomePage from './component/HomePage';
import ProjectPage from './component/ProjectPage';
import AboutMe from './component/AboutMe';
import Contact from './component/Contact';
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage/>}/>
        </Routes>
        <Routes>
          <Route exact path="/about" element={<AboutMe/>}/>
        </Routes>
        <Routes>
          <Route exact path="/project" element={<ProjectPage/>}/>
        </Routes>
        <Routes>
          <Route exact path="/references" element={<Contact/>}/>
        </Routes>
    </Router>
    </div>
  );
}

export default App;
