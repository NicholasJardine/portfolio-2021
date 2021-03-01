// import logo from './logo.svg';
// import './App.css';
// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
// import { homeObjOne, homeObjTwo, homeObjThree } from './components/InfoSection/data';
// import InfoSection from './components/InfoSection'
// import Navbar from './components/Navbar'
// function App() {
//   return (
//     <Router>
//       <Navbar/>
//       <InfoSection {...homeObjOne} />

//     </Router>
//   );
// }

// export default App;


import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './pages'
// import SigninPage from './pages/signin';
function App() {
  return (
    <Router >
      <Switch>
      <Route path="/" component={Home} exact />
      {/* <Route path="/signin" component={SigninPage} exact /> */}
      </Switch>
    </Router>
  );
}

export default App;
