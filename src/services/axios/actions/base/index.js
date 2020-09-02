import { REQUEST_RESPONSE_COLLECTION } from '../../../../config/consts';
import ResponseGetter from '../../response';


export default class ActionBase {
  /**
   * @param {AxiosInstance} axios
   */
  constructor(axios) {
    /**
     * @private
     * @type {AxiosInstance}
     */
    this.axios = axios;
  }

  /**
   * @protected
   * @param {string} url
   * @param {Object} params
   * @returns {Promise<ResponseGetter|Object>|Q.Promise<any>}
   */
  get(url, params = {}) {
    return this.request('get', url, params);
  }

  /**
   * @protected
   * @param {string} url
   * @param {Object|string} data
   * @param {Object} params
   * @returns {Promise<ResponseGetter|Object>|Q.Promise<any>}
   */
  post(url, data = {}, params = {}) {
    return this.request('post', url, data, {
      params,
    });
  }

  /**
   * @protected
   * @param {string} url
   * @param {Object|string} data
   * @param {Object} params
   * @returns {Promise<ResponseGetter|Object>|Q.Promise<any>}
   */
  put(url, data = {}, params = {}) {
    return this.request('put', url, data, {
      params,
    });
  }

  /**
   * @protected
   * @param {string} url
   * @param {Object|string} data
   * @param {Object} params
   * @returns {Promise<ResponseGetter|Object>|Q.Promise<any>}
   */
  delete(url, data = {}, params = {}) {
    return this.request('delete', url, {
      data,
      params,
    });
  }

  /**
   * @private
   * @param method
   * @param args
   * @returns {Promise<ResponseGetter|Object>|Q.Promise<any>}
   */
  request(method, ...args) {
    const actionGenerate = (hasError = false) => (response) => {
      if (!REQUEST_RESPONSE_COLLECTION) {
        if (hasError) {
          return Promise.reject(response);
        }
        return Promise.resolve(response);
      }

      if (hasError) {
        return Promise.reject(new ResponseGetter(response, hasError));
      }
      return Promise.resolve(new ResponseGetter(response, hasError));
    };

    return this.axios[method](...args)
      .then(actionGenerate(), actionGenerate(true))
      .catch(actionGenerate(true));
  }
}
