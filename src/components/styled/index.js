import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

export const ToggleButton = styled(Button)(({ theme }) => ({
  backgroundColor: "transparent",
  color: "black",
  display: "none",
  [theme.breakpoints.down("sm")]: {
    display: "block",
  },
}));
export const NavButton = styled("div")(({ theme, isClick }) =>
  isClick
    ? {
        [theme.breakpoints.down("sm")]: {
          display: "block",
          // flexDirection: "column",
          top: "0px",
          left: 0,
          backgroundColor: "blue",
          width: "100%",
          position: "absolute",
          color: "#fff !important",
        },
      }
    : {
        display: "block",
        [theme.breakpoints.down("sm")]: {
          display: "none",
        },
      }
);
export const LinksButton = styled(Button)(({ theme, isClick }) => ({
  color: "black",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    color: "white !important",
    width: "100%",
  },
}));

export const Logo = styled(Button)(({ theme, isClick }) => ({
  display: "block",
  color: "black",
  [theme.breakpoints.down("sm")]: {
    //   display: "flex",
    //   flexDirection: "column",
    //   backgroundColor: "blue",
    //   width: "100%",
    //   position: "absolute",
    color: "#fff !important",
  },
}));
