import "./App.css";
import MonComposant from "./components/MonComposant";
// import MaForm from "./components/MaForm";
import { MyVideo } from "./MyVideo";
import MediaCard from "./components/MediaCard";
import Button from "@material-ui/core/Button";
import BasicButtonGroup from "./components/BasicButtonGroup";
import { Box } from "@mui/material";
import React from "react";
import MaForm from "./components/MaForm";
import { useState, useEffect } from "react";
import axios from "axios";
// import { RoomPreferencesSharp, WatchRounded } from "@mui/icons-material";
// import Card from "@material-ui/core/Card";
import SimpleCard from "./components/SimpleCard";
// import MaForm from "./components/MaForm";
// import Counter from "./components/Counter";
// import Movie from "./videos/movie.mp4";
// import { KaleVideoPlayer } from "./KaleVideoPlayer";
const App = () => {
  const [data, setData] = useState({ have: "USD", want: "EUR", amount: "700" });

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://currency-converter-by-api-ninjas.p.rapidapi.com/v1/convertcurrency",
      params: { have: data.have, want: data.want, amount: data.amount },
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
        "X-RapidAPI-Host": "currency-converter-by-api-ninjas.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        // console.log(response.data);
        setData(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [data.have, data.want, data.amount]);

  return (
    <div className="App">
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          p: 1,
          m: 1,
          bgcolor: "background.paper",
          borderRadius: 1,
        }}
      >
        <div className="flex-container">
          <MonComposant text="Kale Academy" id="2" />

          {/* <div>
        <Counter init={5} />
      </div> */}

          <MaForm />

          <SimpleCard banco={data} />

          <MediaCard />
        </div>
      </Box>
      <div>
        <BasicButtonGroup />
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <div>
          <MyVideo />
        </div>
      </div>
      <div>
        <h1>The rotateX() Method</h1>

        <p>
          The rotateX() method rotates an element around its X-axis at a given
          degree.
        </p>

        <div>This a normal div element.</div>

        <div id="myDiv">This div element is rotated 150 degrees.</div>
      </div>
    </div>
  );
};
export default App;
