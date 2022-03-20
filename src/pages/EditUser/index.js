import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Grid } from "@mui/material";
import { useDispatch } from "react-redux";
import { ADDuser, EditedUser, GetSingleUser } from "../../redux/action";
import { useNavigate } from "react-router";
import { useParams } from "react-router";
import { useEffect } from "react";
import { useSelector } from "react-redux";
export default function EditUser() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.data);
  const [state, setState] = useState({
    id: "",
    name: "",
    username: "",
    email: "",
  });
  const [error, setError] = useState();
  const { name, username, email } = state;
  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  let { id } = useParams();
  useEffect(() => {
    dispatch(GetSingleUser(id));
  }, []);
  useEffect(() => {
    if (user) {
      setState({ ...user });
    }
  }, [user]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !username) {
      setError("please fill out all field ");
    } else {
      dispatch(EditedUser(state, id));
      navigate("/");
      setError("");
    }
  };
  return (
    <>
      <h4 style={{ color: "red" }}> {error}</h4>
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
              // onSubmit={handleSubmit}
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
            <Button onClick={handleSubmit}>Update user</Button>
          </div>
        </Grid>
      </Grid>
    </>
  );
}
