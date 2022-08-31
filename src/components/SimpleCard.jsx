import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
// import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
// import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard({ banco }) {
  const classes = useStyles();
  //   const bull = <span className={classes.bullet}>•</span>;
  //   new_amount: 0.97, new_currency: 'EUR', old_currency: 'USD', old_amount: 1}
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Le Resultat est:
        </Typography>
        <Typography variant="h5" component="h2">
          {banco.old_amount} {banco.old_currency} est:
        </Typography>
        <Typography variant="h5" component="h2">
          {banco.new_amount} {banco.new_currency}
        </Typography>
      </CardContent>
    </Card>
  );
}
