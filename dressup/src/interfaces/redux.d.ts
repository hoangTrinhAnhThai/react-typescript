import types from "../redux/user/actionTypes";

interface IUser {
  email: string,
  password: string,
}

type UsersState = {
  users: IUser[]
}

type UserAction = {
  type: types,
  user: IUser,
  message: any
}

type DispatchType = (args: UserAction) => UserAction
