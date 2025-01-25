import axios from 'axios';

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: 'https://mern-blogs-steel.vercel.app', // Base URL for all requests
  timeout: 10000, // Timeout for requests (in milliseconds)
  headers: { 
    'Content-Type': 'application/json', // Default Content-Type header
  },
});

export default axiosInstance;