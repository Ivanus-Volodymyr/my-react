import axiosService from "./axios.service";
import {url} from "../config/urls";

export const carsService = {
    create: (car) => axiosService.post(url.cars, car).then(value => value.data),
    getAll: () => axiosService.get(url.cars).then(value => value.data),
    updateById: (id, car) => axiosService.patch(`${url.cars}/${id}`, car).then(value => value.data),
    deleteById: (id) => axiosService.delete(`${url.cars}/${id}`)
}