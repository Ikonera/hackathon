import React, { FunctionComponent } from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import consoRank from "../../assets/images/conso-rank.png";
import { InsertEmoticon } from "@material-ui/icons";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


const styles = makeStyles({
  blockTitle: {
    fontWeight: "bold",
    marginBottom: "2%",
  },
  container: {
    maxWidth: '960px',
    padding: '16px',
    margin: 'auto'
  },
  card: {
    marginBottom: '20px'
  }
});

const ProfilePage: FunctionComponent = () =>
{
  const classes = styles();

  return (
    <>
      <section>
        <div className={classes.container}>
          <Card className={classes.card}>
            <CardContent>
              <Grid container alignItems="center" direction="column">
                <Grid item>
                  <Typography variant="h4" className={classes.blockTitle}>
                    Votre consommation
                  </Typography>
                </Grid>
                <Grid item container direction="column" alignItems="center" style={{ marginBottom: "2%" }}>
                  <Grid item>
                    <Typography variant="h5" className={classes.blockTitle}>
                      Platine
                    </Typography>
                  </Grid>
                  <Grid item>
                    <img src={consoRank} alt="Logo rang" />
                  </Grid>
                </Grid>
                <Grid item container justifyContent="center" alignItems="center">
                  <Grid item>
                    <InsertEmoticon fontSize="large" style={{ color: "#eee63d" }} />
                  </Grid>
                  <Grid item>
                    <Typography style={{ fontWeight: "bold", fontSize: "36px", marginLeft: "20px" }}>
                      169 kWh
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nihil sequi quod sunt perspiciatis ea dolore tempora quas quam atque odio numquam, obcaecati, natus dolores, repellat porro! Consequuntur, debitis maiores!
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <Card className={classes.card}>
            <CardContent>
              <Grid container alignContent="center" direction="column">
                <Grid item>
                  <Typography variant="h4" className={classes.blockTitle}>
                    Nos conseils
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography><li>Premier conseil</li></Typography>
                  <Typography><li>Deuxième conseil</li></Typography>
                  <Typography><li>Troisième conseil</li></Typography>
                  <Typography><li>Quatrième conseil</li></Typography>
                  <Typography><li>Premier conseil</li></Typography>
                  <Typography><li>Deuxième conseil</li></Typography>
                  <Typography><li>Troisième conseil</li></Typography>
                  <Typography><li>Quatrième conseil</li></Typography>
                  <Typography><li>Premier conseil</li></Typography>
                  <Typography><li>Deuxième conseil</li></Typography>
                  <Typography><li>Troisième conseil</li></Typography>
                  <Typography><li>Quatrième conseil</li></Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  )
}

export default ProfilePage
