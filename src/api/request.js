import axios from 'axios'
const  mockAjax = axios.create({
    baseURL: '/mock',
    timeout: 5000,
  });

export const getBanner = ()=>mockAjax.get('/banner','GET')