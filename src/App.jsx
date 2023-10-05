import { useState } from "react";
import {
  Container,
  CssBaseline,
  Grid,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import AddPost from "./components/AddPost";

function App() {
  const [mode, setMode] = useState("light");

  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <Navbar />
          <Container disableGutters maxWidth="xl">
            <Grid container>
              <Grid
                item
                md={3}
                lg={2}
                sx={{
                  display: { xs: "none", md: "block" },
                }}
              >
                <Sidebar mode={mode} setMode={setMode} />
              </Grid>
              <Grid item xs>
                <Feed />
              </Grid>
              <Grid
                item
                xs={5}
                md={3}
                lg={3}
                sx={{
                  display: { xs: "none", sm: "block" },
                }}
              >
                <Rightbar />
              </Grid>
            </Grid>
          </Container>
          <AddPost />
        </CssBaseline>
      </ThemeProvider>
    </>
  );
}

export default App;
