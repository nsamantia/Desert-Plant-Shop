import {Switch, Route} from 'react-router-dom'
import React from 'react'
import Auth from './Components/Auth/Auth'

export default (
    <Switch>
        <Route exact path = "/" component ={Auth} />
    </Switch>
)