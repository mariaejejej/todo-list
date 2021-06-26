import { NEW_COLORS,DELETE_COLOR } from "./colors.actionTypes";


export const createColorsSuccessAction = payload => ({
    type: NEW_COLORS,
    payload
  });
  
  export const deleteColorsSuccessAction = payload => ({
    type: DELETE_COLOR,
    payload
  });
  