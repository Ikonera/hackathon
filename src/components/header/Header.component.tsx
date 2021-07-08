import React, { FunctionComponent } from "react"
import {AppBar, Toolbar, Grid, Typography, Button} from "@material-ui/core"
import { SentimentSatisfied, ExitToAppRounded } from "@material-ui/icons"


const NavBar: FunctionComponent = () => {
    return (
        <AppBar position="static" style={{ backgroundColor: "#83D357" }}>
            <Toolbar>
                <Typography variant="h6" > Fantine - JVJ </Typography>
                <Button color="inherit"> Formulaire </Button>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar


const Header: FunctionComponent = () =>
{
    return (
        <AppBar position="static" style={{ backgroundColor: "#83D357" }}>
            <Toolbar>
                <Grid container justifyContent="space-around">
                    <Grid item container alignItems="center">
                        <Grid item>
                            <SentimentSatisfied fontSize="medium" style={{ fontSize: "36px" }}/>
                        </Grid>
                        <Grid item style={{ fontSize: "36px" }}>
                            &nbsp;Fantine #JVJ
                        </Grid>
                    </Grid>
                </Grid>
                <Grid>
                    <ExitToAppRounded fontSize="medium" style={{ fontSize: "36px" }} />
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

//export default Header
