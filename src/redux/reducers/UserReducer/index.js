import * as types from "../../actionTypes";
const initialState = {
  users: [],
  user: {},
  loading: true,
};

export const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case types.DELETE_USER:
      return {
        ...state,
        loading: false,
      };
    case types.ADD_USER:
      return {
        ...state,
        loading: false,
      };
    case types.SINGLE_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case types.EDIT_USER:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
