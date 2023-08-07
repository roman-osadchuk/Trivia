import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import type { TStore } from 'src/store';
import env from 'react-native-config';

export class HttpClientConfig {
  public httpClient!: AxiosInstance
  private store!: TStore

  public async initialize(store: TStore): Promise<void> {
    this.store = store
    this.setHttpClientConfig()
  }

  private setHttpClientConfig() {
    this.httpClient = axios.create({
      baseURL: env.BASE_URL,
      headers: {},
    })

    this.httpClient.interceptors.request.use(this._handleRequest, e => {
      throw e
    })

    this.httpClient.interceptors.response.use(this._handleResponse, this._handleError);
  }

  create(arg0: { baseURL: any; headers: {}; }): AxiosInstance {
    throw new Error('Method not implemented.');
  }

  private _handleRequest = async (config: AxiosRequestConfig) => {
    return config;
  }

  private _handleResponse = (response: AxiosResponse<any>): AxiosResponse<any> | Promise<AxiosResponse<any>> | any => {
    return {
      data: response.data,
      error: null,
    };
  }

  private _handleError = async (error: AxiosError) => {
    // Global error handling can be implemented here
    // this.store.dispatch(setGlobalError(error));

    return Promise.reject(error)
  }
}

export const httpClientConfig = new HttpClientConfig();
