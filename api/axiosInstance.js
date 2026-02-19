const axios = require("axios");

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 5000,
});

// Request interceptor
instance.interceptors.request.use(
  (config) => {
    console.log("Request:", config.method.toUpperCase(), config.url);
    return config;
  },
  (error) => Promise.reject(error),
);

// Response interceptor
instance.interceptors.response.use(
  (response) => {
    console.log("Response:", response.status, response.config.url);
    return response;
  },
  (error) => Promise.reject(error),
);

module.exports = instance;
