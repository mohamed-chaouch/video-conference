import {Route, Routes} from "react-router-dom";
import CreateAccount from "./pages/Create-Account";
import { Box } from "@mui/material";
import Home from "./pages/home";

function App() {
  return (
    <Box>
      {/* This is my app De vidéo conference */}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<CreateAccount />} />
      </Routes>
    </Box>
  );
}

export default App;
