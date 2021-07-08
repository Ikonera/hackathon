import React, { FunctionComponent } from "react"
import { Switch, Route } from "react-router-dom"
import ContactPage from "../ContactPage/ContactPage.component"
import InformationPage from "../informationsPage/InformationsPage.component"
import LoginPage from "../loginPage/LoginPage.component"
import ProfilePage from "../profilePage/ProfilePage.component"
import AdvicePage from "../AdvicePage/AdvicePage.component";


const RouterOutlet: FunctionComponent = () => (
    <Switch>
        <Route exact path="/profile" component={ProfilePage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/infos" component={InformationPage} />
        <Route exact path="/contact" component={ContactPage} />
      <Route exact path="/advice" component={AdvicePage} />
    </Switch>
)
export default RouterOutlet;
