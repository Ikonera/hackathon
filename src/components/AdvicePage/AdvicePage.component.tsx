import React, { FunctionComponent } from "react";
import { ExpandMore } from "@material-ui/icons";
import {createUniqueKey, Database} from '../../utils/firebase';
import {Accordion, AccordionDetails, AccordionSummary, CircularProgress, makeStyles, Typography} from "@material-ui/core";


const styles = makeStyles({
  container: {
    maxWidth: '960px',
    padding: '16px',
    margin: 'auto'
  },
  card: {
    marginBottom: '20px'
  },
  heading: {
    fontWeight: 'bold'
  }
});

const AdvicePage: FunctionComponent = () => {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const classes = styles();

  console.log([...Array(6).keys()].map(() => createUniqueKey()));

  React.useEffect(() => {
    Database.ref('advice').once('value', (snapshot) => {
      const value = Object.entries(snapshot.val() || {});
      const data = value.map(([_id, obj]) => ({ _id, ...obj }));

      setData(data);
      setLoading(false);
    });
  }, []);

  return (
    <div className={classes.container}>
      {loading
        ? <CircularProgress color="inherit"/>
        : data.map(({_id, title, advice}) => (
          <Accordion key={_id}>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography className={classes.heading}>{title}</Typography>
            </AccordionSummary>
            {advice.map((description, idx) => (
              <AccordionDetails key={idx}>
                <Typography>{description}</Typography>
              </AccordionDetails>
            ))}
          </Accordion>
        ))
      }
    </div>
  );
}
export default AdvicePage;
