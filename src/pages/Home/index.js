import axios from "axios";
import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { DeleteUser, loadUser } from "../../redux/action";
const Home = () => {
  // yh data root-reducer s aya hay
  const { users } = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(loadUser());
  }, []);
  const DeletedUser = (id) => {
    if (window.confirm("sure??")) {
      dispatch(DeleteUser(id));
    }
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>id</TableCell>
              <TableCell>name</TableCell>
              <TableCell>Username</TableCell>
              <TableCell>email</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow
                key={user.id}
                // sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {user.id}
                </TableCell>
                <TableCell component="th" scope="row">
                  {user.name}
                </TableCell>
                <TableCell component="th" scope="row">
                  {user.username}
                </TableCell>
                <TableCell component="th" scope="row">
                  {user.email}
                </TableCell>
                <TableCell component="th" scope="row">
                  <NavLink to="/view">
                    <Button>View</Button>
                  </NavLink>

                  <Button onClick={() => navigate(`/editUser/${user.id}`)}>
                    edit
                  </Button>

                  <Button onClick={() => DeletedUser(user.id)}>delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Home;
