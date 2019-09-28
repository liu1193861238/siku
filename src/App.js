import React,{Component,Fragment} from 'react';
import renderRoute from "@utils/renderRoute"
import {baseConfigRoutes} from "@router"
import {Switch,Redirect} from "react-router-dom"
class App extends Component{
  render(){
    return(
      <Fragment>
     <Switch>
     {
       renderRoute(baseConfigRoutes)
     }
     <Redirect from="/" to="/homePage"/>
     </Switch>
      </Fragment>
    )
  }
}


export default App;
