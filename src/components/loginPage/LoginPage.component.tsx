import React, { FunctionComponent, useState } from "react"
import { Link } from "react-router-dom"
import {
    Grid,
    FormControl,
    FormLabel,
    TextField,
    Typography,
    Button,
    makeStyles,
} from "@material-ui/core"
import "./loginPage.scss"
import { Facebook, Twitter, Instagram, YouTube, LinkedIn } from "@material-ui/icons"
import Firebase from "../../utils/firebase"

const styles = makeStyles({
    root: {
        width: "70%",
        margin: "4% auto 3%",
        boxShadow: "0 0 5px 2px grey",
        borderRadius: "15px"
    },
    div_70: {
        width: "70%",
        padding: "4% 10%",
        color: "white",
        borderTopLeftRadius: "15px",
        borderBottomLeftRadius: "15px",
    },
    div_30: {
        width: "30%",
        padding: "3% 2%",
        backgroundColor: "white",
        borderTopRightRadius: "15px",
        borderBottomRightRadius: "15px",
    },
    socials: {
        width: "50%",
        marginTop: "8%"
    },
    labels: {
        fontWeight: "bold",
        color: "black",
    },
    entries: {
        width: "100%",
        fontSize: "16px",
    },
    ctrl: {
        marginTop: "6%",
    }
})

const LoginPage: FunctionComponent = () =>
{

    const classes = styles(),
        [username, setUsername] = useState<string>(''),
        [userpassword, setUserpassword] = useState<string>(''),
        handleConnexionSubmit = () =>
        {
            Firebase.auth().createUserWithEmailAndPassword(username, userpassword)
                .then((userCredential: any) => {
                    var user = userCredential.user;
                    alert("form send")
                })
                .catch((error: any) => {
                    console.log(error)
                });
        }

    return (
        <section id="login-section">
            <Grid container className={ classes.root }>
                <Grid item container className={ classes.div_70 } id="div_70">
                    <Grid item>
                        <Typography style={{ fontSize: "46px", marginBottom: "5%" }}>
                            Bienvenue
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography style={{ fontSize: "18px", lineHeight: "220%" }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, magnam totam? Praesentium numquam magni, id rerum magnam nihil autem maiores placeat recusandae odio molestiae velit qui iste, nam quod adipisci.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptatum fugiat error possimus velit. Quo quas natus ducimus corrupti quaerat itaque consectetur, vel eaque iusto accusantium impedit veniam qui. Amet!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum temporibus esse minus ut debitis consectetur nemo eligendi dicta sint laboriosam libero quas eius ipsam cumque ea, laudantium fugiat voluptates tempore.
                        </Typography>
                    </Grid>
                    <Grid item container justifyContent="space-around" className={ classes.socials }>
                        <Grid item>
                            <Facebook fontSize="medium" style={{ fontSize: "40px" }}/>
                        </Grid>
                        <Grid item>
                            <Twitter fontSize="medium" style={{ fontSize: "40px" }}/>
                        </Grid>
                        <Grid item>
                            <Instagram fontSize="medium" style={{ fontSize: "40px" }}/>
                        </Grid>
                        <Grid item>
                            <YouTube fontSize="medium" style={{ fontSize: "40px" }}/>
                        </Grid>
                        <Grid item>
                            <LinkedIn fontSize="medium" style={{ fontSize: "40px" }}/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item container direction="column" className={classes.div_30} alignContent="center">
                    <FormControl className={ classes.ctrl }>
                        <FormLabel htmlFor="user-mail" className={ classes.labels }>
                            Identifiant
                        </FormLabel>
                        <TextField id="user-mail" className={ classes.entries } autoFocus variant="outlined" autoSave="false" onChange={event => setUsername(event.target.value)} required />
                    </FormControl>
                    <FormControl className={classes.ctrl}>
                        <FormLabel htmlFor="user-password" className={ classes.labels }>
                            Mot de passe
                        </FormLabel>
                        <TextField id="user-password" className={ classes.entries } variant="outlined" type="password" onChange={event => setUserpassword(event.target.value)} required/>
                    </FormControl>
                    <FormControl className={classes.ctrl}>
                        <Button onClick={event => handleConnexionSubmit()}>
                            CONNEXION
                        </Button>
                    </FormControl>
                    <Link to='#'>
                        Lost your password ?
                    </Link>
                </Grid>
            </Grid>
        </section>
    )
}

export default LoginPage