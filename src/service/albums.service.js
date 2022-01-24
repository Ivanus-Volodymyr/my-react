import {axiosService} from "./axios.service";
import {urls} from "../config/urls";

export const albumsService = {
    getByUserId: (id) => axiosService(`${urls.users}/${id}${urls.albums}`).then(value => value.data)
}