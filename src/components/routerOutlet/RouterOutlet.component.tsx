import React, { FunctionComponent } from "react"
import { Switch, Route } from "react-router-dom"
import ContactPage from "../ContactPage/ContactPage.component"
import InformationPage from "../informationsPage/InformationsPage.component"
import LoginPage from "../loginPage/LoginPage.component"
import ProfilePage from "../profilePage/ProfilePage.component"
import forms from "../forms/forms";


const RouterOutlet: FunctionComponent = () =>
{
    return (
        <Switch>
            <Route exact path="/profile" component={ProfilePage} />
            <Route exact path="/forms" component={forms} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/infos" component={InformationPage} />
            <Route exact path="/contact" component={ContactPage} />
        </Switch>
    )
}

export default RouterOutlet
