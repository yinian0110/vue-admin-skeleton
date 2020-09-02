import {
  ENV_PRODUCTION_NAME,
  REQUEST_BASE_URL,
  REQUEST_WITH_CREDENTIALS,
} from './consts';

// -- environment definitions
export const NODE_ENV = process.env.NODE_ENV || ENV_PRODUCTION_NAME;
export const IS_PRODUCTION_ENV = NODE_ENV === ENV_PRODUCTION_NAME;

// -- vur-router configure by default
export const DEFAULT_ROUTER_CONFIGURE = {
  mode: 'history',
};

// -- axios configure by default
export const DEFAULT_AXIOS_CONFIGURE = {
  // `timeout` specifies the number of milliseconds before the request times out.
  timeout: 10000,
  // `withCredentials` indicates whether or not cross-site Access-Control requests
  withCredentials: REQUEST_WITH_CREDENTIALS || true,
  // `baseURL` will be prepended to `url` unless `url` is absolute.
  baseURL: REQUEST_BASE_URL,
};

// -- store configure by default
export const DEFAULT_STORE_CONFIGURE = {
  strict: true,
};

// -- vue & devtools
export const VUE_DEVTOOLS_ENABLED = !IS_PRODUCTION_ENV;
export const VUE_PRODUCTION_TIPS = !IS_PRODUCTION_ENV;

// -- exports application variables
export const APPLICATION_EXPORTS_DEBUG = !IS_PRODUCTION_ENV;
