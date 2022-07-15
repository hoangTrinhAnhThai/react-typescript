import { IUser, UserAction, UsersState } from "../../interfaces/redux";
import actionTypes from "./actionTypes";

const initialState: UsersState ={ users:[
  {
  email: "a@a.vn",
  password: "123123",
  }, 
  {
    email: "a@a1.vn",
    password: "123123",
  }
]}

const reducer = (
  state: UsersState = initialState,
  action: UserAction,
): UsersState => {
  switch (action.type) {
    case actionTypes.CREATE_ACCOUNT:
      const newUser: IUser = {
        email: action.user.email,
        password: action.user.password
      }
      return {
        ...state,
        users: state.users.concat(newUser)
      }
    case actionTypes.GET_ACCOUNT:
      return {
        ...state,
        users: state.users
      }
  }
  return state
}

export default reducer
