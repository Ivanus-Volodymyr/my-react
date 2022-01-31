import axiosService from "./axios.service";
import {url} from "../config/urls";

export const charactersService = {
    getById: (id) => axiosService.get(`${url.character}/${id}`).then(value => value.data)
}