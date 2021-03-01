import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { homeObjOne, homeObjTwo, homeObjThree } from './components/InfoSection/data';
import InfoSection from './components/InfoSection'
import Navbar from './components/Navbar'
function App() {
  return (
    <Router>
      <Navbar/>
      <InfoSection {...homeObjOne} />

    </Router>
  );
}

export default App;
