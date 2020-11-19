import {
  GET_TECHS,
  ADD_TECH,
  DELETE_TECH,
  SET_LOADING,
  TECHS_ERROR
} from "./types";
import { techsApi } from "../api/techsApi";
export const getTechs = () => async dispatch => {
  try {
    setLoading();
    const data = await techsApi.getAll();
    console.log(data);
    dispatch({ type: GET_TECHS, payload: data });
  } catch (err) {
    dispatch({ type: TECHS_ERROR, payload: err });
  }
};
export const setLoading = () => {
  return { SET_LOADING };
};
export const deleteTech = id => async dispatch => {
  try {
    setLoading();
    await techsApi.delete(id);
    dispatch({ type: DELETE_TECH, payload: id });
  } catch (err) {
    dispatch({ type: TECHS_ERROR, payload: err });
  }
};
export const addTech = tech => async dispatch => {
  try {
    setLoading();
    const data = await techsApi.post(tech);
    dispatch({ type: ADD_TECH, payload: data });
  } catch (err) {
    dispatch({ type: TECHS_ERROR, payload: err });
  }
};
