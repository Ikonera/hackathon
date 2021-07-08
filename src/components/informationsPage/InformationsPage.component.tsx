import React, { FunctionComponent } from "react"
import { Grid, Typography } from "@material-ui/core"


const InformationPage: FunctionComponent = () => {
    return (
        <>
            <section>
                <div>
                    <Grid container>
                        <Typography>
                            Qui sommes nous?
                        </Typography>
                    </Grid>
                    <Grid container>
                        <Typography>
                            Nous sommes un groupe d'étudiants en informatiques, scolarisés a l'estiam.
                            Dans le cadre d'un projet d'étude, on nous a demandé de répondre a une problematique : Faire un outil de gamification au service d'enjeux de société.
                            Suite a quelques heures de débats autour des problèmes de société qui nous touchent tous personnellement, nous sommes tombées en accord sur le fait que la gestion de nos ressources energetique etait un enjeu d'envergure et qu'on pouvait agir autour de cette problematique.
                        </Typography>
                    </Grid>
                    <Grid container>
                        <Typography>
                            Quelle solution pouvions nous apporter a cette question qui nous prenait dès lors, comment optimiser notre economie d'energie aupres de particulier sans changer radicalement leur train de vie de façon abrupte?
                            A partir d'idée et de constats basique sur notre mode de vie en general, nous avons réaliser qu'une application permettant de nous rappeler de gestes simple tel que debrancher nos appareils non essenciels a une utilisation permanante durant la nuit par exemple, mais aussi des conseils de renovations suivant les dernieres normes eéologiques et étant finançable par des emprunts avantageux.
                        </Typography>
                    </Grid>
                </div>
            </section>
        </>
    )
}

export default InformationPage