import React, { FunctionComponent } from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import Footer from "./components/footer/Footer.component"
import Header from "./components/header/Header.component"
import RouterOutlet from "./components/routerOutlet/RouterOutlet.component"
import { CssBaseline } from "@material-ui/core"


const App: FunctionComponent = () =>
{
    return (
        <>
            <CssBaseline />
            <Header />
            <RouterOutlet />
            <Footer />
        </>
    )
}


ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.querySelector("#root")
)