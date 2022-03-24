import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link, NavLink } from "react-router-dom";
import ClearIcon from "@mui/icons-material/Clear";
import DehazeIcon from "@mui/icons-material/Dehaze";
import { LinksButton, Logo, NavButton, ToggleButton } from "../styled";
export default function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);
  const handleClick = () => {
    setIsMobile(!isMobile);
    setIsDesktop(false);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        style={{
          backgroundColor: "#fff ",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        }}
      >
        <Toolbar
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          {/* <Logo> */}
          <Logo>
            <NavLink exact to="/" style={{ textDecoration: "none" }}>
              logo
            </NavLink>
          </Logo>
          {/* </Logo> */}
          {isDesktop ? (
            <NavButton isClick={false}>
              <LinksButton>
                <NavLink exact to="/" style={{ textDecoration: "none" }}>
                  Home
                </NavLink>
              </LinksButton>
              <LinksButton>
                <NavLink exact to="/addUser" style={{ textDecoration: "none" }}>
                  adduser
                </NavLink>
              </LinksButton>
              <LinksButton>
                <NavLink
                  exact
                  to="/multiInfo"
                  style={{ textDecoration: "none" }}
                >
                  Multi Info
                </NavLink>
              </LinksButton>
            </NavButton>
          ) : (
            <NavButton isClick={true}>
              <LinksButton>
                <NavLink exact to="/" style={{ textDecoration: "none" }}>
                  Home
                </NavLink>
              </LinksButton>
              <LinksButton>
                <NavLink exact to="/addUser" style={{ textDecoration: "none" }}>
                  adduser
                </NavLink>
              </LinksButton>
              <LinksButton>
                <NavLink
                  exact
                  to="/multiInfo"
                  style={{ textDecoration: "none" }}
                >
                  Multi Info
                </NavLink>
              </LinksButton>
            </NavButton>
          )}

          <ToggleButton onClick={handleClick}>
            {isMobile ? <ClearIcon /> : <DehazeIcon />}
          </ToggleButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
