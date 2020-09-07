import axios, {AxiosRequestConfig} from "axios";
import includes from "lodash/includes";

export function configureAxiosHttpInterceptors() {

  // Add a request interceptor
  axios.interceptors.request.use(function (config) {
    _appendCacheKiller(config);
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

  // Add a response interceptor
  axios.interceptors.response.use(function (response) {
    // Do something with the response
    return response;
  }, function (error) {
    return Promise.reject(error);
  });
}

function _appendCacheKiller(config: AxiosRequestConfig) {
  if (!_isHtmlResource(config.url)) {
    let requestSeparatorChar = '?';
    if (includes(config.url, '?')) {
      requestSeparatorChar = '&';
    }
    config.url += requestSeparatorChar + '_t=' + Date.now();
  }
}

function _isHtmlResource(url: string | undefined): boolean {
  return includes(url, '.html');
}