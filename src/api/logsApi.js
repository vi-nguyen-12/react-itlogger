import axiosClient from "./axiosClient";
export const logsApi = {
  getAll: params => {
    return axiosClient.get("/logs", { params });
  },
  post: newLog => {
    const url = "/logs";
    return axiosClient.post(url, newLog);
  },
  put: (id, newLog) => {
    const url = `/logs/${id}`;
    return axiosClient.put(url, newLog);
  },
  delete: id => {
    const url = `/logs/${id}`;
    return axiosClient.delete(url);
  }
};
