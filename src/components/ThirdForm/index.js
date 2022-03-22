import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Grid } from "@mui/material";

import { Controller, useFormContext } from "react-hook-form";
export default function ThirdForm() {
  const [error, setError] = useState();

  const { control } = useFormContext();
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
              // scomponent="form"
              sx={{
                "& > :not(style)": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <Controller
                control={control}
                name="PhonenNumber"
                render={({ field }) => {
                  return (
                    <TextField
                      id="outlined-basic"
                      label="Phonen Number"
                      variant="outlined"
                      {...field}
                    />
                  );
                }}
              />
              <br />
              <Controller
                control={control}
                name="website"
                render={({ field }) => {
                  return (
                    <TextField
                      id="outlined-basic"
                      label="website"
                      variant="outlined"
                      {...field}
                    />
                  );
                }}
              />
            </Box>
          </div>
        </Grid>
      </Grid>
    </>
  );
}
