import { AxiosInstance } from 'axios';

export class MainApi {
  httpClient!: AxiosInstance;

  initialize(httpClient: AxiosInstance) {
    this.httpClient = httpClient;
  }
}

export const api = new MainApi();
