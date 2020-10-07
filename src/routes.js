import {Switch, Route, Redirect} from 'react-router-dom'
import React from 'react'
import Auth from './Components/Auth/Auth'
import Landing from './Components/Landing/Landing'
import Cacti from './Components/Cacti/Cacti'
import Succs from './Components/Succs/Succs'
import Cart from './Components/Cart/Cart'

export default (
    <Switch>
        <Route exact path = "/" component ={Landing} />
        <Route path = "/Auth" component ={Auth} />
        <Route path = "/Cacti" component={Cacti} />
        <Route path = "/Succs" component={Succs} />
        <Route path = "/Cart" component={Cart} />

        <Route render={() => <Redirect to= "/" />} />
    </Switch>
)