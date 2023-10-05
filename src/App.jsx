import { CssBaseline, Grid } from "@mui/material";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";

function App() {
  return (
    <>
      <CssBaseline>
        <Navbar />
        <Grid container>
          <Grid item xs={2}>
            <Sidebar />
          </Grid>
          <Grid item xs>
            <Feed />
          </Grid>
          <Grid item xs={3}>
            <Rightbar />
          </Grid>
        </Grid>
      </CssBaseline>
    </>
  );
}

export default App;
