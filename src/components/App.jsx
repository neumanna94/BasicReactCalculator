import React from 'react';
import Landing from './Landing';
import CalculationHistory from './History/CalculationHistory';
import Header from './Header';
import Footer from './Footer';
import { Switch, Route } from 'react-router-dom';

function App(){
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/History' component={CalculationHistory} />
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
