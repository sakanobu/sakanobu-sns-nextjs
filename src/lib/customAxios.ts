import axios from 'axios';

const baseURL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3001'
    : 'https://sakanobu-sns-rails.herokuapp.com/';

export const apiClient = axios.create({
  baseURL: baseURL,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
});
