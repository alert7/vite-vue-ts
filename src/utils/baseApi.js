/*
 * @Author: Zhang Chunming
 * @Date: 2022-06-21 09:54:51
 * @Description:
 * @FilePath: \vite-ts\src\utils\baseApi.js
 */

import request from './request';

class Api {
  // 这里可以统一做些异常处理
  dealRequestPromise ({ url, method, data }) {
    return new Promise(function (resolve, reject) {
      request({ url, method, data })
        .then(result => {
          const { data = {} } = result;
          const { resultCode = '' } = data;
          if (resultCode === 0) {
            resolve(data.result)
          } else {
            // reject(data.resultMessage)
          }
        })
        .catch(err => {
          reject(err)
        });
    })
  }
}

export default new Api();
