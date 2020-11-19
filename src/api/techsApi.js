import axiosClient from "./axiosClient";
export const techsApi = {
  getAll: () => {
    return axiosClient.get("/techs");
  },
  post: newTech => {
    const url = "/techs";
    return axiosClient.post(url, newTech);
  },
  put: (id, newTech) => {
    const url = `/techs/${id}`;
    return axiosClient.put(url, newTech);
  },
  delete: id => {
    const url = `/techs/${id}`;
    return axiosClient.delete(url);
  }
};
