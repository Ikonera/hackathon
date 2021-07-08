import React, { FunctionComponent } from "react";
import {
    Button,
    Card,
    CardContent,
    Checkbox,
    Container,
    FormControlLabel,
    makeStyles,
    MenuItem,
    TextField
} from "@material-ui/core";

import reducer from "../../reducers/reducer";
import {initialState} from "../../reducers/reducer";

const styles = makeStyles({
    container: {
        maxWidth: '960px',
        padding: '16px',
        margin: 'auto'
    },
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

const forms = () => {
    const classes = styles()

    const [state, dispatch] = React.useReducer(reducer, initialState)

    const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: "NBPEOPLE",
            value: event.target.value
        })
    }

    const handleHomeEnergyChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: "ENERGYCLASSMENT",
            value: event.target.value
        })
    }

    const handleHomeConsommationChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: "ENERGYCONSUMPTIONLABEL",
            value: event.target.value
        })
    }

    const submitButton = (event) => {
        event.preventDefault();
        alert("Soumission")
    }

    const handleCheckCHChange = (event) => {
        console.log(event);
        dispatch({
            type:"ENERGYCONSUMPTIONCHECK",
            value: event.target.checked
        })
    }

    return (
        <Container className={classes.container}>
            <Card className={classes.root}>
                <CardContent>
                    <form onSubmit={submitButton}>
                    <div>
                        <center><h3>Entrez vos informations</h3></center>
                    </div>
                    <div>
                        <p>Combien de personne habite dans votre foyer ?</p>
                        <TextField select label="Select" value={state.numberPeople} onChange={handleChange}>
                            {[...Array(9).keys()].map(x => (
                                <MenuItem key={x+1} value={x+1}>{x+1} personne(s)</MenuItem>
                            ))}
                        </TextField>
                    </div>
                    <div>
                        <p>Quel est le classement energétique de votre logement ?</p>
                        <TextField select label="Select" value={state.homeEnergyClassment} onChange={handleHomeEnergyChange}>
                            {["A","B","C","D","E","F","G"].map(x => (
                                <MenuItem key={x} value={x}>{x}</MenuItem>
                            ))}
                        </TextField>
                    </div>
                    <div>
                        <p>Quelle est la consommation energétique de votre foyer en kWh par an ? </p>
                        <TextField id="standard-basic"   onChange ={handleHomeConsommationChange} />
                        <p>kWh/an</p>

                        <br/>
                        <FormControlLabel control={<Checkbox checked={state.checkBoxConsumption} onChange={handleCheckCHChange}/> }
                                          label="Je ne sais pas"
                        />
                    </div>
                    <div>
                        <Button type="submit" variant="contained" color="primary" >Submit</Button>
                    </div>
                    </form>
                </CardContent>
            </Card>
        </Container>
    )
}

export default forms;
