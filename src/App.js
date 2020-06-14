import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Index from "./components/index.js";
import Delivery from "./components/delivery.js";
import Pickup from "./components/picup.js";

class App extends React.Component {


  render(){
    return(
      <div>
      <Router>
        <Route exact path = {'/'} component = {Index}/>
        <Route exact path = {'/delivery/:adress'} component = {Delivery}/>
        <Route exact path = {'/pickup/:latitudelongitude'} component = {Pickup}/>
      </Router>

      </div>
      
     
    )
  }
};

export default App;