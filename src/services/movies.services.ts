import {axiosServices} from "./axios.services";

import {urls} from "../constants";
import {IMovie} from "../interfaces";

export const moviesServices = {
    getAll: (currentPage: number, genreId: string) => axiosServices.get<IMovie>(urls.movies + currentPage + '&with_genres=' + genreId),
    getById: (id: number) => axiosServices.get<IMovie>(urls.movieById + `${id}?api_key=865a7502a1780159827b764af0bee919`)
}