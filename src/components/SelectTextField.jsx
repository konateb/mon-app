import * as React from "react";

import Box from "@mui/material/Box";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import SimpleCard from "./SimpleCard";
import TextField from "@mui/material/TextField";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import { useCallback } from "react";
import { useState } from "react";

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
    fontSize: 25,
  },
  pos: {
    marginBottom: 18,
  },
});
const currencies = [
  {
    value: "USD",
    label: "$(United States Dollar)",
  },
  {
    value: "CAD",
    label: "$(Canadian Dollar)",
  },
  {
    value: "EUR",
    label: "€(Euro)",
  },
  {
    value: "BTC",
    label: "฿(Bitcoin)",
  },
  {
    value: "JPY",
    label: "¥(Japanese Yen)",
  },
  {
    value: "GBP",
    label: "£(British Pound)",
  },
  {
    value: "XOF",
    label: "CFA(West African Franc)",
  },
];
const defaultValues = {
  have: "USD",
  want: "EUR",
  amount: "1",
};
export default function SelectTextFields() {
  const classes = useStyles();
  const [data, setData] = React.useState({});
  const [formData, setFormData] = React.useState(defaultValues);
  const [isError, setIsError] = React.useState(false);
  const [showResult, setShowResult] = useState(false);
  const getData = useCallback(() => {
    const options = {
      method: "GET",
      url: "https://currency-converter-by-api-ninjas.p.rapidapi.com/v1/convertcurrency",
      params: {
        have: formData.have,
        want: formData.want,
        amount: formData.amount,
      },
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
        "X-RapidAPI-Host": "currency-converter-by-api-ninjas.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setData(response.data);
        setShowResult(true);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [formData]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.amount) {
      setIsError(true);
      return;
    }
    getData();
  };
  return (
    <Card className={classes.root}>
      <CardContent>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "10ch" },
          }}
          onSubmit={handleSubmit}
          noValidate
          autoComplete="off"
        >
          <Typography
            className={classes.title}
            color="textPrimary"
            gutterBottom
            variant="h6"
            component="div"
          >
            <Box sx={{ fontWeight: "medium", m: 5 }}>
              Convertisseur de devises
            </Box>
          </Typography>

          <TextField
            id="amount-input"
            name="amount"
            label="Montant"
            type="number"
            error={isError}
            value={formData.amount}
            required
            helperText="*Montant Requis"
            onFocus={() => {
              setIsError(false);
              setShowResult(false);
              setFormData({
                ...formData,
                amount: "",
              });
            }}
            onChange={handleInputChange}
            variant="outlined"
          />

          <TextField
            id="currency-from"
            name="have"
            select
            label="Devises possedées"
            value={formData.have}
            onChange={handleInputChange}
            SelectProps={{
              native: true,
            }}
            helperText="Selectionnez une devises"
          >
            {currencies.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
          <TextField
            id="currency-to"
            name="want"
            select
            label="Devises demandées"
            value={formData.want}
            onChange={handleInputChange}
            SelectProps={{
              native: true,
            }}
            helperText="Selectionnez une devises"
          >
            {currencies.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>

          <Button variant="contained" color="primary" type="submit">
            Convertir
          </Button>
        </Box>
        {showResult && <SimpleCard data={data} />}
      </CardContent>
    </Card>
  );
}
