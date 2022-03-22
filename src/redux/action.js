import axios from "axios";
import * as types from "./actionTypes";
const getUsers = (users) => ({
  type: types.GET_USERS,
  payload: users,
});
const singleUser = (user) => ({
  type: types.SINGLE_USER,
  payload: user,
});
const deleteUser = () => ({
  type: types.DELETE_USER,
});
const editUser = () => ({
  type: types.EDIT_USER,
});
const AddUser = () => ({
  type: types.ADD_USER,
});
const AddMulltiuser = () => ({
  type: types.MULTI_USER,
});
export const loadUser = () => {
  return function (dispatch) {
    axios
      .get("http://localhost:3003/user")
      .then((res) => {
        console.log("res", res);
        dispatch(getUsers(res.data));
      })
      .catch((error) => {
        console.log(error, "eror ====");
      });
  };
};

export const DeleteUser = (id) => {
  return function (dispatch) {
    axios
      .delete(`http://localhost:3003/user/${id}`)
      .then((res) => {
        console.log(res, "ress");
        dispatch(deleteUser());
        // once you dispatch delete user then get the loaded data where deleted user not present
        dispatch(loadUser(res.data));
      })
      .catch((error) => {
        console.log(error, "error");
      });
  };
};

export const GetSingleUser = (id) => {
  return function (dispatch) {
    axios
      .get(`http://localhost:3003/user/${id}`)
      .then((res) => {
        console.log("Ress", res);
        dispatch(singleUser(res.data));
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
};

export const EditedUser = (user, id) => {
  return function (dispatch) {
    axios
      .put(`http://localhost:3003/user/${id}`, user)
      .then((res) => {
        console.log("Ress", res);
        dispatch(editUser());
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
};

export const ADDuser = (user) => {
  return function (dispatch) {
    axios
      .post("http://localhost:3003/user", user)
      .then((res) => {
        console.log(res, "res");
        dispatch(AddUser());
        dispatch(loadUser());
      })
      .catch((error) => {
        console.log(error, "error");
      });
  };
};
export const AddMultiUser = (multiUser) => {
  return async (dispatch) => {
    await axios
      .post("http://localhost:3003/user", multiUser)
      .then((res) => {
        dispatch(AddMulltiuser());
        // dispatch(loadUser(res.data.users[0].control));
        // console.log(res.data.users[0].control, "res.data.users[0].control");
      })
      .catch((error) => {
        console.log(error, "error");
      });
  };
};
