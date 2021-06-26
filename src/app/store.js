import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import colorsReducer from '../redux/colors/colors.reducer';

export const store = configureStore({
  reducer: combineReducers({colorsReducer}),
});
