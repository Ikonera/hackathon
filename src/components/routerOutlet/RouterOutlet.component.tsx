import React, { FunctionComponent } from "react"
import { Switch, Route } from "react-router-dom"
import ProfilePage from "../profilePage/ProfilePage.component"
import forms from "../forms/forms";


const RouterOutlet: FunctionComponent = () =>
{
    return (
        <Switch>
            <Route exact path="/profile" component={ProfilePage} />
            <Route exact path="/forms" component={forms} />
        </Switch>
    )
}

export default RouterOutlet
