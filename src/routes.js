import {Switch, Route, Redirect} from 'react-router-dom'
import React from 'react'
import Auth from './Components/Auth/Auth'
import Landing from './Components/Landing/Landing'

export default (
    <Switch>
        <Route exact path = "/" component ={Auth} />
        <Route path = "/Landing" component ={Landing} />

        <Route render={() => <Redirect to= "/"/>} />
    </Switch>
)