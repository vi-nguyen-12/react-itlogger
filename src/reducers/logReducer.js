import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOG,
  DELETE_LOG,
  SET_CURRENT,
  UPDATE_LOG,
  SEARCH_LOGS
} from "../actions/types";
const initialState = {
  logs: null,
  current: null,
  loading: false,
  error: null
};
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_LOGS:
      return {
        ...state,
        logs: payload,
        loading: false
      };
    case LOGS_ERROR:
      return {
        ...state,
        error: payload
      };
    case ADD_LOG:
      return {
        ...state,
        logs: [...state.logs, payload],
        loading: false
      };
    case DELETE_LOG:
      return {
        ...state,
        logs: [...state.logs.filter(log => log.id !== payload)],
        loading: false
      };
    case SET_CURRENT:
      return {
        ...state,
        current: payload
      };
    case UPDATE_LOG:
      return {
        ...state,
        logs: [
          ...state.logs.map(log => (log.id === payload.id ? payload : log))
        ],
        current: null
      };
    case SEARCH_LOGS:
      return {
        ...state,
        logs: [...payload],
        loading: false
      };
    default:
      return state;
  }
};
