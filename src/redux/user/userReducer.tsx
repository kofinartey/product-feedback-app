import data from "../../data.json";
import { UserInterface } from "../../types";

type ActionType = { type: string; payload: string };
export const userReducer = (
  state: UserInterface = data.currentUser,
  action: ActionType
) => {
  return state;
};
