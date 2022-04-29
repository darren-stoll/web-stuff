import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'

// Importing components
import MainPage from './components/MainPage.js';
import PomodoroClock from './components/PomodoroClock.js';
import MedOfficeTemplate from './components/MedOfficeTemplate.js';
import TwitchClipper from './components/TwitchClipper.js';
import ScrollToTop from './components/ScrollToTop.js';

/* APPLICATION START */
function App() {
  
  // Use react-router-dom to control links to different components
  return (
    <Switch>
      <ScrollToTop>
        <Route exact path="/" component={MainPage} />
        <Route path="/PomodoroClock" component={PomodoroClock} />
        <Route path="/MedOfficeTemplate" component={MedOfficeTemplate} />
        <Route path="/TwitchClipper" component={TwitchClipper} />
      </ScrollToTop>
    </Switch>
  );
}
/* APPLICATION END */

export default App;
