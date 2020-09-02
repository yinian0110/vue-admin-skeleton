/**
 * @param {AxiosRequestConfig} request
 * @return {AxiosRequestConfig}
 */
export function onRequestSuccess(request) {
  return request;
}

/**
 * @param {string} reason
 * @return {Promise<string>}
 */
export function onRequestFail(reason) {
  return Promise.reject(reason);
}

/**
 * @param {AxiosResponse} response
 * @return {Promise<object>|{data, extra}}
 */
export function onResponseSuccess(response) {
  if (typeof response.data === 'string') {
    return Promise.reject(new Error(response.data));
  }

  switch (response.data.f) {
    case 1:
      return response.data;
    default:
      return Promise.reject(response.data);
  }
}

/**
 * @param {AxiosError} error
 * @return {Promise<string>}
 */
export function onResponseFail(error) {
  const { response, message } = error;

  if (typeof response.data === 'object') {
    if (response.data.m) {
      return Promise.reject(response.data);
    }
  }
  // eslint-disable-next-line prefer-promise-reject-errors
  return Promise.reject({ f: error.code, m: message });
}
