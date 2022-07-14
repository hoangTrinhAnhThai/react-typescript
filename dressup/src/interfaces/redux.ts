import types from "../redux/user/types";

export interface Action<T> {
  type: types,
  payload: T,
  message: any
}
