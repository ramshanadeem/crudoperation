/* eslint-disable no-implied-eval */
import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Grid } from "@mui/material";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { ADDuser } from "../../redux/action";
import { useNavigate } from "react-router";
import AnimatedButton from "../../components/animatedButton";

export default function AddUser() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [state, setState] = useState({
    id: "",
    name: "",
    username: "",
    email: "",
  });
  const [error, setError] = useState();

  const { id, name, username, email } = state;
  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !username) {
      setError("please fill out all field ");
    } else {
      dispatch(ADDuser(state));
      navigate("/");
      setError("");
    }
  };

  return (
    <>
      <motion.div
        style={{
          position: "absolute",

          zIndex: 2,
          maxHeight: 40,
          height: 40,
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0px 10px",
        }}
      >
        {" "}
        <AnimatedButton iconPosition="right" animateHover />
      </motion.div>

      <h4 style={{ color: "red" }}> {error}</h4>
      <Grid container spacing={2} direction="column">
        <Grid item xs={12} alignSelf="center">
          {/* <Grid item xs={4}></Grid> */}
          <Grid
            item
            xs={12}
            style={{
              boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
              width: "fit-content",
            }}
          >
            <div
            // style={{
            //   width: "fit-content",
            //   padding: "10px",
            //   boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
            // }}
            >
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "25ch" },
                }}
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
              >
                <TextField
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                  value={name}
                  name="name"
                  onChange={handleInputChange}
                />
                <br />
                <TextField
                  id="outlined-basic"
                  label="username"
                  variant="outlined"
                  value={username}
                  name="username"
                  onChange={handleInputChange}
                />
                <br />
                <TextField
                  id="outlined-basic"
                  label="email"
                  variant="outlined"
                  value={email}
                  name="email"
                  onChange={handleInputChange}
                />
              </Box>
              <Button onClick={handleSubmit}>Add user</Button>
            </div>
          </Grid>
          {/* <Grid item xs={4} /> */}
        </Grid>
      </Grid>
    </>
  );
}
