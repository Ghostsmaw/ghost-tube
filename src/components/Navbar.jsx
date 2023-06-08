import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import { SearchBar } from "./";

const Navbar = () => (
  <Stack direction="row" alignItems="center" p={2} sx={{ position:  "sticky", background: '#000', top: 0, justifyContent: "space-between" }}>
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <h2 style={{color: "red", fontSize: "20px"}}>GHOST-<span style={{color: "white", fontSize: "20px"}}>Tube</span></h2>
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
