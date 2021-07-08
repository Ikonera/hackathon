import React, { FunctionComponent, useEffect } from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import Footer from "./components/footer/Footer.component"
import Header from "./components/header/Header.component"
import RouterOutlet from "./components/routerOutlet/RouterOutlet.component"
import { CssBaseline } from "@material-ui/core"
import { Auth, UserContext } from "./utils/firebase"


const App: FunctionComponent = () => {

  const [user, setUser] = React.useState(null);
  const [initialized, setInitialized] = React.useState(false);

  const userContext = {
    user, isAuthenticated: () => {
      return Boolean(user?.uid);
    }
  };

  useEffect(() => {
    Auth.onAuthStateChanged(user => {
      setUser(user);
      setInitialized(true);
    });
  }, []);

  return (
    <UserContext.Provider value={userContext}>
      <CssBaseline />
      <Header />
      <RouterOutlet />
      <Footer />
    </UserContext.Provider>
  )
}

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.querySelector("#root")
);
