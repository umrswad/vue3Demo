import HYRequest from './request';
import { BASE_URL, TIME_OUT } from './request/config';
const hyRequest = new HYRequest({
    baseURL: BASE_URL,
    timeout: TIME_OUT,
    interceptors: {
        requestInterceptor: (config) => {
            console.log('请求成功拦截');
            return config;
        },
        requestInterceptorCatch: (error) => {
            console.log('请求失败拦截');
            return error;
        },
        responseInterceptor: (res) => {
            console.log('响应成功拦截');
            return res;
        },
        responseInterceptorCatch: (error) => {
            console.log('响应失败拦截');
            return error;
        }
    }
});

export default hyRequest;
