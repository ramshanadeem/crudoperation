import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Grid } from "@mui/material";

import { Controller, useFormContext } from "react-hook-form";
export default function FirstForm() {
  const { control } = useFormContext();

  const [error, setError] = useState();

  return (
    <>
      <Grid container spacing={5} direction="column">
        <Grid item xs={12} md={12}></Grid>
        <Grid item xs={12} alignSelf="center">
          <Grid
            item
            mt={10}
            xs={12}
            style={{
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              width: "fit-content",
            }}
          >
            {/* <div
              style={{
                backgroundColor: "#ffff",
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                width: "fit-content",
                padding: "10px",
                marginLeft: "-46px",
                marginTop: "112px",
              }} */}
            {/* > */}
            <Box
              // component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <Controller
                control={control}
                name="name"
                render={({ field }) => {
                  return (
                    <TextField
                      id="outlined-basic"
                      label="Name"
                      variant="outlined"
                      // value={name}

                      // onChange={handleInputChange}
                      {...field}
                    />
                  );
                }}
              />
              <br />
              <Controller
                control={control}
                name="username"
                render={({ field }) => {
                  return (
                    <TextField
                      id="outlined-basic"
                      label="username"
                      variant="outlined"
                      // value={username}
                      {...field}
                      // onChange={handleInputChange}
                    />
                  );
                }}
              />
              <br />
              <Controller
                control={control}
                name="email"
                render={({ field }) => {
                  return (
                    <TextField
                      id="outlined-basic"
                      label="email"
                      variant="outlined"
                      // value={email}
                      {...field}
                      // onChange={handleInputChange}
                    />
                  );
                }}
              />
            </Box>
            {/* </div> */}
          </Grid>
          <Grid item xs={4}></Grid>
        </Grid>
        <Grid item xs={4} md={4}></Grid>
      </Grid>
    </>
  );
}
