import axios from 'axios';

const client = axios.create();

// client.defaults.baseURL = 'https://external-api-sever.com/';
// client.defaults.headers.common['Authorization'] = 'Bearer a1b2c';
// axios.intercepter.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     return Promise.reject(error);
//   },
// );

export default client;
