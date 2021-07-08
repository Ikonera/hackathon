import React, { FunctionComponent, useContext, useEffect } from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import Footer from "./components/footer/Footer.component"
import NavBar from "./components/header/Header.component"
import RouterOutlet from "./components/routerOutlet/RouterOutlet.component"
import { CssBaseline } from "@material-ui/core"
import { Auth, UserContext } from "./utils/firebase"


const App: FunctionComponent = () =>
{

    const user = UserContext


    useEffect(() =>
    {
        Auth.onAuthStateChanged(user => {
            return {
                user, isAuthenticated: () => {
                    return Boolean(user?.uid)
                }
            }
        })
    }, [])

    let userCtxt = useContext(UserContext)

    return (
        <UserContext.Provider value={userCtxt}>
            <CssBaseline />
            <NavBar />
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
)
