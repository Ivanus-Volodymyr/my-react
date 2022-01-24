import {axiosService} from "./axios.service";
import {urls} from "../config/urls";

export const postsService = {
    getAll: () => axiosService.get(urls.posts).then(value => value.data),
    getByID: (id) => axiosService.get(`${urls.posts}/${id}`)
}