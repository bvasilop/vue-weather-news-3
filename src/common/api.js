// Base API Configuration

import axios from 'axios';

export const API = axios.create({
    baseURL: '//api.openweathermap.org/data/2.5/'
});

API.interceptors.request.use(function (config) {
    // Set common parameters for each request to the API.

    config.params.APPID = 'c3d24c0fe7fdf7c01ffb4d800f4e6a36';
    config.params.units = 'imperial';

    return config;
}, function (error) {
    return Promise.reject(error);
});