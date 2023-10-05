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

function App() {
  const theme = createTheme();

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
                <Sidebar />
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
        </CssBaseline>
      </ThemeProvider>
    </>
  );
}

export default App;
