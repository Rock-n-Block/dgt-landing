import axios, { apiPoints } from './core';
import { ISendRequest } from './types';

const emails = {
  sendRequest(data: ISendRequest) {
    return axios.post(apiPoints.v2.email, data);
  },
};

const APIs = {
  emails,
};

export default APIs;
