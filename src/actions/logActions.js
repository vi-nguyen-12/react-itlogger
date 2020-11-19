import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOG,
  DELETE_LOG,
  SET_CURRENT,
  UPDATE_LOG,
  SEARCH_LOGS
} from "./types";
import { logsApi } from "../api/logsApi";

export const getLogs = () => async dispatch => {
  try {
    setLoading();
    const data = await logsApi.getAll();
    dispatch({ type: GET_LOGS, payload: data });
  } catch (err) {
    dispatch({ type: LOGS_ERROR, payload: err });
  }
};
export const setLoading = () => {
  return { type: SET_LOADING };
};
export const addLog = log => async dispatch => {
  try {
    setLoading();
    const data = await logsApi.post(log);
    console.log(log);
    console.log(data);
    dispatch({ type: ADD_LOG, payload: data });
  } catch (err) {
    dispatch({ type: LOGS_ERROR, payload: err });
  }
};
export const deleteLog = id => async dispatch => {
  try {
    setLoading();
    await logsApi.delete(id);
    dispatch({ type: DELETE_LOG, payload: id });
  } catch (err) {
    dispatch({ type: LOGS_ERROR, payload: err });
  }
};
export const updateLog = log => async dispatch => {
  try {
    setLoading();
    const data = await logsApi.put(log.id, log);
    console.log(data);
    dispatch({ type: UPDATE_LOG, payload: data });
  } catch (err) {
    dispatch({ type: LOGS_ERROR, payload: err });
  }
};
export const setCurrent = log => {
  return { type: SET_CURRENT, payload: log };
};
export const searchLogs = input => async dispatch => {
  // try {
  //   setLoading();
  //   const data = await logsApi.getAll();
  //   const logs = data.map(log => log.message).filter(m => m.includes(input));
  //   console.log(logs);
  //   // dispatch({ type: SEARCH_LOGS, payload: logs });
  // } catch (err) {
  //   dispatch({ type: LOGS_ERROR, payload: err });
  // }
};
