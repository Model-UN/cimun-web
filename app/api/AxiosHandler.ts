/**
 * A simple implementation of an Axios-based request handler.
 */
import axios, { AxiosRequestConfig, AxiosResponse, Method } from 'axios';

export interface IAxiosHandler {
  callRaw<T, D>(url: string, method: Method, data?: D, token?: string,
    axiosConfig?: AxiosRequestConfig): Promise<AxiosResponse<T>>;

  get<T>(url: string, axiosConfig?: AxiosRequestConfig): Promise<T>;

  post<T, D>(url: string, data?: D, axiosConfig?: AxiosRequestConfig): Promise<T>;
}

export default class AxiosHandler implements IAxiosHandler {
  callRaw = <T, D>(
    url: string,
    method: Method,
    data?: D,
    token?: string,
    axiosConfig?: AxiosRequestConfig)
  : Promise<AxiosResponse<T>> => {
    // Create required request params
    const params: AxiosRequestConfig = {
      method,
      url,
    };
    // Handle assigning auth header
    if (token) {
      params.headers = { Authorization: `Bearer ${token}` };
    }
    if (data) {
      params.data = data;
    }
    // Perform request and return promise
    return axios.request<T>({ ...params, ...axiosConfig });
  };

  get = async <T>(url: string, axiosConfig?: AxiosRequestConfig): Promise<T> => {
    const res = await this.callRaw<T, null>(url, 'GET', null, null, axiosConfig);
    return res.data;
  };

  post = async <T>(url: string, data?: unknown, axiosConfig?: AxiosRequestConfig): Promise<T> => {
    const res = await this.callRaw<T, typeof data>(url, 'POST', data, null, axiosConfig);
    return res.data;
  };
}
