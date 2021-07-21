import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Parcours from './components/Parcours';
import Competences from './components/Competences';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/Parcours.jsx' component={Parcours} />
          <Route path='/Competences.jsx' component={Competences} />
          <Route path='/Portfolio.jsx' component={Portfolio} />
          <Route path='/Contact.jsx' component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
