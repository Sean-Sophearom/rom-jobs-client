import axios from "axios";

const instance = axios.create();

instance.defaults.baseURL = "https://romjobs-server.herokuapp.com/api/";

instance.interceptors.request.use(function (req) {
  let user = localStorage.getItem("user");

  if (user) {
    const { token } = JSON.parse(localStorage.getItem("user"));
    req.headers.authorization = `BEARER ${token}`;
    return req;
  }

  if (!user) {
    user = sessionStorage.getItem("user");
  }

  if (user) {
    const { token } = JSON.parse(sessionStorage.getItem("user"));
    req.headers.authorization = `BEARER ${token}`;
    return req;
  }
  return req;
});

export default instance;
