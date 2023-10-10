import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';


import { Main} from './pages'


import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

import './components/Experience/Experience.css'
import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'

import './App.css'
import './components/Landing/Landing.css'
import './components/Landing/neon.css'

function App() {

 
  // console.log = console.warn = console.error = () => {};

  return (
  <div className="app">
  <Router>
    <Switch>
      <Route path="/" exact component={Main} />

      <Redirect to="/" />
    </Switch>
  </Router>
</div>
  );
}

export default App;
