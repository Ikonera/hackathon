import React, { FunctionComponent } from "react"
import { AppBar, Grid } from "@material-ui/core"


const Header: FunctionComponent = () =>
{
    return (
        <AppBar position="static" style={{ backgroundColor: "#83D357" }}>
            <Grid container>
                <Grid item>
                    Fantine #JVJ
                </Grid>
            </Grid>
            <Grid item>
                Icon deco
            </Grid>
        </AppBar>
    )
}

export default Header