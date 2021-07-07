import React, { FunctionComponent } from "react"
import { Grid, Typography } from "@material-ui/core"


const ProfilePage: FunctionComponent = () =>
{
    return (
        <>
            <section>
                <div>
                    <Grid container>
                        <Typography>
                            Rang
                        </Typography>
                    </Grid>
                </div>
                <div>
                    <Grid container>
                        <Typography>
                            Nos conseils
                        </Typography>
                    </Grid>
                </div>
            </section>
        </>
    )
}

export default ProfilePage