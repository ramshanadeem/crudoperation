import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Grid } from "@mui/material";
import { useSelector } from "react-redux";

export default function AddUser() {
  const [usersList, setUsersList] = {
    name: "",
    email: "",
    username: "",
  };
  //   const [userList, setUserList] = useSelector((state) => state);
  console.log(usersList);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [username, setUsername] = useState();

  const onSubmit = (e) => {
    e.preventDefault();
  };
  const onInputChange = (e) => {
    setUsersList({ ...usersList, [e.target.name]: e.target.value });
  };
  return (
    <Grid container rowSpacing={1}>
      <Grid item xs={5}></Grid>
      <Grid item xs={7}>
        <div
          style={{
            width: "fit-content",
            padding: "10px",
            boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
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
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              value={name}
              name="name"
              onChange={(e) => onInputChange(e)}
            />
            <br />
            <TextField
              id="outlined-basic"
              label="username"
              variant="outlined"
              value={username}
              name="username"
              onChange={(e) => onInputChange(e)}
            />
            <br />
            <TextField
              id="outlined-basic"
              label="email"
              variant="outlined"
              value={email}
              name="email"
              onChange={(e) => onInputChange(e)}
            />
          </Box>
          <Button onClick={onSubmit}>Add user</Button>
        </div>
      </Grid>
    </Grid>
  );
}
