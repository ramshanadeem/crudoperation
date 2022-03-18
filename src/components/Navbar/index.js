import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Button>
            <NavLink exact to="/" style={{ textDecoration: "none" }}>
              Home
            </NavLink>
          </Button>
          <Button>
            <NavLink exact to="/addUser" style={{ textDecoration: "none" }}>
              adduser
            </NavLink>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
