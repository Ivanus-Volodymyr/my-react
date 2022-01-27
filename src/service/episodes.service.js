import axiosService from "./axios.service";
import {url} from "../config/urls";

export const episodesService = {
    getAll: () => axiosService.get(url.episode).then(value => value.data),
    getById: (id) => axiosService.get(`${url.episode}?page=${id}`).then(value => value.data)
}