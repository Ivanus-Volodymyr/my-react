import axios from "axios";

import BaseUrl from "../configs/url";

export const axiosService = axios.create({baseURL: BaseUrl});

