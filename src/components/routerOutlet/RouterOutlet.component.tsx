import React, { FunctionComponent } from "react"
import { Switch, Route } from "react-router-dom"
import ProfilePage from "../profilePage/ProfilePage.component"
import AdvicePage from "../AdvicePage/AdvicePage.component";


const RouterOutlet: FunctionComponent = () => (
  <Switch>
    <Route exact path="/profile" component={ProfilePage} />
    <Route exact path="/advice" component={AdvicePage} />
  </Switch>
)

export default RouterOutlet;
