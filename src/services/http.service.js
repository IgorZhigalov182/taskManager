import axios from 'axios';

axios.defaults.baseURL = 'https://1jsonplaceholder.typicode.com';

const httpService = {
  get: axios.get,
};

export default httpService;
