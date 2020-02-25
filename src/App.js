import React from "react";
import Box from "@material-ui/core/box";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

const App = props => {
  //return starts..
  return (
    <React.Fragment>
      <Container maxWidth="100%">
        <Typography
          component="div"
          style={{ backgroundColor: "#cfe8fc", height: "100vh" }}
        >
          <Box>Some Compo</Box>
          <Box>Some Compo</Box>
        </Typography>
      </Container>
    </React.Fragment>
  );
  //return ends....
}; //................

export default App;
