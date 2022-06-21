/*
 * @Author: Zhang Chunming
 * @Date: 2022-06-20 17:02:41
 * @Description:
 * @FilePath: \vite-ts\src\views\home\api.js
 */

// 引入request.js文件
import service from '@/utils/baseApi';

export function queryActivityList (data) {
  return service.dealRequestPromise({
    url: '/ebank/marketing/v1/queryActivityList', // 这个地址是去掉公共地址和私有域名之后剩下的地址
    method: 'POST', // 请求方式 支持多种方式  get post put delete 等等
    data// 发送请求要配置的参数 无参数的情况下也可以不写
  });
}

export function queryDetailByActivityId (data) {
  console.log('service', service);
  return service.dealRequestPromise({
    url: '/ebank/marketing/v1/queryDetailByActivityId', // 这个地址是去掉公共地址和私有域名之后剩下的地址
    method: 'POST', // 请求方式 支持多种方式  GET POST PUT DELETE 等等
    data // 发送请求要配置的参数 无参数的情况下也可以不写
  });
}
