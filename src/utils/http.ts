import Axios from 'axios';

const axios = Axios.create({
  baseURL: process.env.REACT_APP_NODE_ENV === 'production' ? 'https://dapi.kakao.com' : '',
  headers: {
    Authorization: `KakaoAK ${process.env.REACT_APP_API_KEY}`,
  },
});

export const http = {
  get: function get<Response = unknown>(url: string) {
    return axios.get<Response>(url).then();
  },
  post: function post<Request = any, Response = unknown>(url: string, data?: Request) {
    return axios.post<Response>(url, { data }).then(res => res.data);
  },
};
