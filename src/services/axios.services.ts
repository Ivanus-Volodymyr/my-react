import axios from "axios";
import baseUrl from "../constants/urls";

export const axiosServices = axios.create({baseURL: baseUrl});