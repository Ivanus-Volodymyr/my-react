import {axiosService} from "./axios.service";
import {urls} from "../config/urls";

export const photosService = {
    getAll: () => axiosService(urls.photos).then(value => value.data),
    getByAlbumId: (id) => axiosService(`${urls.albums}/${id}${urls.photos}`).then(value => value.data)

}