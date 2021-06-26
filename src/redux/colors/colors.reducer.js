import { NEW_COLORS, DELETE_COLOR } from "./colors.actionTypes";

const initialState = {
  colorsFromApi: [],
};

const colorsReducer = (state = { ...initialState }, { type, payload }) => {
  const newState = { ...state };
  switch (type) {
    case NEW_COLORS:
      const colorsUpdated = [...newState.colorsFromApi];
      colorsUpdated.push(payload);
      newState.colorsFromApi = colorsUpdated;
      return newState;

    case DELETE_COLOR:
      const colorsCopy = [...newState.colorsFromApi];
      const colorIndex = colorsCopy.findIndex((element) => payload ===element);
      colorsCopy.splice(colorIndex, 1);
      newState.colorsFromApi = colorsCopy;
      return newState;

    default:
      return state;
  }
};

export default colorsReducer;
