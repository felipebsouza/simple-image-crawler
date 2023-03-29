import axios, { AxiosResponse, AxiosError } from 'axios';

export class HttpClient {
  async get(url: string): Promise<AxiosResponse> {
    try {
      return await axios.get(url, { timeout: 6000 });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.code === 'ECONNABORTED') {
          throw new Error('Request timed out');
        } else if (error.code === 'ECONNREFUSED' ) {
          throw new Error('Connection could not be made. Check if the http(s) protocol is present in the URL - eg: https://www.site.com');
        }
        else {
          throw new Error('Network Error');
        }
      } else {
        throw new Error('Unknown error');
      }
    }
  }
}
