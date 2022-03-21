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
      <Grid container rowSpacing={1}>
        <Grid item xs={5}></Grid>
        <Grid item xs={7}>
          <div
            style={{
              backgroundColor: "#ffff",
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              width: "fit-content",
              padding: "10px",
              marginLeft: "-46px",
              marginTop: "112px",
            }}
          >
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <Controller
                control={control}
                name="name"
                render={({ field }) => (
                  <TextField
                    id="outlined-basic"
                    label="Name"
                    variant="outlined"
                    // value={name}

                    // onChange={handleInputChange}
                    {...field}
                  />
                )}
              />
              <br />
              <Controller
                control={control}
                name="username"
                render={({ field }) => (
                  <TextField
                    id="outlined-basic"
                    label="username"
                    variant="outlined"
                    // value={username}
                    {...field}
                    // onChange={handleInputChange}
                  />
                )}
              />
              <br />
              <Controller
                control={control}
                name="email"
                render={({ field }) => (
                  <TextField
                    id="outlined-basic"
                    label="email"
                    variant="outlined"
                    // value={email}
                    {...field}
                    // onChange={handleInputChange}
                  />
                )}
              />
            </Box>
          </div>
        </Grid>
      </Grid>
    </>
  );
}
