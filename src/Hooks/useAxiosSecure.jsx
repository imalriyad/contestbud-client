import axios from "axios";
const axiosSecure = axios.create({
  baseURL: "https://contest-bud-server.vercel.app/api/v1",
});
const useAxiosSecure = () => {
  return axiosSecure;
};

export default useAxiosSecure;
