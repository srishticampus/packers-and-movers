import axios from 'axios';

const axiosInstance = axios.create({

  // server api

  // baseURL: 'http://43.204.92.123:4017/packers_and_Movers_api', 

//local api

  baseURL: 'http://localhost:4017/packers_and_Movers_api', 

  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance