import { IUser } from "../../interfaces/redux";
import actionTypes from "./actionTypes";

export function addUser(user: IUser) {
  console.log('hello');
  
  return {
    type: actionTypes.CREATE_ACCOUNT,
    payload: user,
  }
}
export function getUser(id: number) {
  return {
    type: actionTypes.GET_ACCOUNT,
    payload: id
  }
}
