/*
 * @Author: Zhang Chunming
 * @Date: 2022-06-20 16:55:20
 * @Description:
 * @FilePath: \vite-ts\src\utils\request.js
 */

import axios from 'axios';
// import env from './env';

// 创建axios实例
const service = axios.create({
  baseUrl: '',
  headers: {}, // 请求头
  settimeout: 20000// 超时时间
});
// 添加请求拦截器
service.interceptors.request.use(
  config => {
    // 在发送请求之前做些什么
    config.headers.deviceType = 'H5';
    console.log('请求的数据:', config);
    return config;
  },
  error => {
    // 对请求错误做些什么
    // eslint-disable-next-line prefer-promise-reject-errors
    return Promise.reject('出错', error);
  }
);

// 添加响应拦截器
service.interceptors.response.use(
  response => {
    // 对响应数据做点什么
    // console.log("返回的数据", response);
    return response;
  },
  error => {
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);
export default service;
