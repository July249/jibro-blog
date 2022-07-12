import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://jibro-blog.herokuapp.com/api/',
});
