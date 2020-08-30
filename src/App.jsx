import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Service from './Service';

const App=()=>{
    return(
        <>
          <Navbar />
        <Switch>
          
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/service" component={Service} />
            <Route exact path="/contact" component={Contact} />
            <Redirect to="/" />
        </Switch>
        </>
    )
}
export default App;