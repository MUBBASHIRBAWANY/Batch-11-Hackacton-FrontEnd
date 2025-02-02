import axios from 'axios';

const api = axios.create({
  baseURL: 'https://batch-11-hackacton-backend-az7b.vercel.app/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
