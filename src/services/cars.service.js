import {axiosService} from "./axios.service";
import {urls} from "../configs";

export const carsService = {
    getAll: () => axiosService.get(urls.cars).then(value => value.data),
    deleteById: (id) => axiosService.delete(`${urls.cars}/${id}`),
    updateById: (id, car) => axiosService.patch(`${urls.cars}/${id}`, car).then(value => value.data),
    addCar: (data) => axiosService.post(urls.cars, data).then(value => value.data)
}