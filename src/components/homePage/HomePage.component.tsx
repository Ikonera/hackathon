import React, { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'
import { Typography, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import "./homePage.scss"

const styles = makeStyles({
    root: {
        width: "50%",
        margin: "0 auto",
    },
    link: {
        backgroundColor: "#01DB66",
        margin: "2% 4%",
        padding: "2% 4%",
    }
})

const HomePage: FunctionComponent = () =>
{
    const classes = styles()

    return (
        <Grid container className={ classes.root } justifyContent="space-around">
            <Grid item className={ classes.link }>
                <Typography>
                    <Link to="/login">Login</Link>
                </Typography>
            </Grid>
            <Grid item className={ classes.link }>
                <Typography>
                    <Link to="/contact">Contact</Link>
                </Typography>
            </Grid>
            <Grid item className={ classes.link }>
                <Typography>
                    <Link to="/infos">Informations</Link>
                </Typography>
            </Grid>
            <Grid item className={ classes.link }>
                <Typography>
                    <Link to="/profile">Profil</Link>
                </Typography>
            </Grid>
        </Grid>
    )
}

export default HomePage