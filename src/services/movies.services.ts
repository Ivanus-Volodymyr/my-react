import {axiosServices} from "./axios.services";

import {urls} from "../constants";
import {IMovie} from "../interfaces";

export const moviesServices = {
    getAll: (currentPage: number, genreId: string) => axiosServices.get<IMovie>(urls.movies + currentPage + '&with_genres=' + genreId)
}