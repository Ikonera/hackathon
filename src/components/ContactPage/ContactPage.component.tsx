import React, { FunctionComponent } from "react"
import { Grid, Typography } from "@material-ui/core"


const ContactPage: FunctionComponent = () => {
    return (
        <>
            <section>
                <div>
                    <Grid container>
                        <Typography>
                            Comment nous contacter?
                        </Typography>
                    </Grid>
                    <Grid container>
                        <Typography>
                            Nous sommes joignables par telephone au + 456 789 0123 ou par mail au : contact@miserable.com
                        </Typography>
                    </Grid>
                </div>
            </section>
        </>
    )
}

export default ContactPage