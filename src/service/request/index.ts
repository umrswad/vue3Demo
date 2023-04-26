import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig } from 'axios';
class HYRequest {
    instance: AxiosInstance;
    constructor(config: AxiosRequestConfig) {
        this.instance = axios.create(config);
    }
    request(config: AxiosRequestConfig): void {
        this.instance.request(config).then((res) => {
            console.log('====================================');
            console.log(res);
            console.log('====================================');
        });
    }
}
export default HYRequest;
