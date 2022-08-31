import "./App.css";

import BasicButtonGroup from "./components/BasicButtonGroup";
import { Box } from "@mui/material";
import Button from "@material-ui/core/Button";
import MaForm from "./components/MaForm";
import MediaCard from "./components/MediaCard";
import MonComposant from "./components/MonComposant";
import { MyVideo } from "./MyVideo";
import React from "react";
import SelectTextFields from "./components/SelectTextField";

const App = () => {
    

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
          <MonComposant text="Kale Academy" />

          {/* <div>
        <Counter init={5} />
      </div> */}

          <MaForm />
          <SelectTextFields />
          <MediaCard />
        </div>
      </Box>
      <div>
        <BasicButtonGroup />
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <div>
          <MyVideo />
        </div>
      </div>
    </div>
  );
};
export default App;
