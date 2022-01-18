import axios from "axios";

const axiosService = axios.create({
    baseURL: baseUrl
});

export default axiosService;