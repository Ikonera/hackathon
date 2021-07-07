import React, { FunctionComponent } from "react"
import { Switch, Route } from "react-router-dom"
import LoginPage from "../loginPage/LoginPage.component"
import ProfilePage from "../profilePage/ProfilePage.component"


const RouterOutlet: FunctionComponent = () =>
{
    return (
        <Switch>
            <Route exact path="/profile" component={ProfilePage} />
            <Route exact path="/login" component={LoginPage} />
        </Switch>
    )
}

export default RouterOutlet