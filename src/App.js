import logo from "./logo.svg";
import "./App.css";
import Box from "@mui/material/Box";

import Sidebar from "./Components/Sidebar";
import PrimarySearchAppBar from "./Pages/Alerts";

function App() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Sidebar />
      <PrimarySearchAppBar />
      </Box>
  );
}

export default App;
