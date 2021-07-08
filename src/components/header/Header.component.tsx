import React, { FunctionComponent } from "react"
import {AppBar, Toolbar, Grid, IconButton} from "@material-ui/core"
import { SentimentSatisfied, ExitToAppRounded } from "@material-ui/icons"
import {Auth, UserContext} from "../../utils/firebase";


const Header: FunctionComponent = () => {

  const userContext = React.useContext(UserContext);
  const { user, isAuthenticated } = userContext;

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
        {isAuthenticated() && (
          <Grid>{user?.email}</Grid>
        )}
        <Grid>
          <IconButton color="inherit" onClick={() => Auth.signOut()} >
            <ExitToAppRounded fontSize="medium" style={{ fontSize: "36px" }} />
          </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default Header
