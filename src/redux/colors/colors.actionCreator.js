import { store } from "../../app/store";
import {
  createColorsSuccessAction,
  deleteColorsSuccessAction,
} from "./colors.actions";

export const createColorsActionCreator = (payload) =>
  store.dispatch(createColorsSuccessAction(payload));

export const deleteColorsActionCreator = (payload) =>
  store.dispatch(deleteColorsSuccessAction(payload));
