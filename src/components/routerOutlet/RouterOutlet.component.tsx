import React, { FunctionComponent } from "react"
import { Switch, Route } from "react-router-dom"
import ProfilePage from "../profilePage/ProfilePage.component"


const RouterOutlet: FunctionComponent = () =>
{
    return (
        <Switch>
            <Route exact path="/profile" component={ProfilePage} />
        </Switch>
    )
}

export default RouterOutlet