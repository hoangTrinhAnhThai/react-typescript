import types from "./types";

export function addUser(user: User) {
  return {
    type: types.CREATE_ACCOUNT,
    payload: user,
  }
}
export function getUser(id: number) {
  return {
    type: types.GET_ACCOUNT,
    payload: id
  }
}
