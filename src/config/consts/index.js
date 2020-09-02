// -- environment name
import { isTrue } from '../../utils/boolean';


export const ENV_PRODUCTION_NAME = 'production';
export const ENV_DEVELOPMENT_NAME = 'development';

// -- environment variables
export const REQUEST_WITH_CREDENTIALS = isTrue(process.env.VUE_APP_REQUEST_WITH_CREDENTIALS);
export const REQUEST_BASE_URL = process.env.VUE_APP_REQUEST_BASE_URL;

// -- default event names
export const EVENT_ROUTER_BEFORE_EACH = 'router.guard.before';
export const EVENT_ROUTER_AFTER_EACH = 'router.guard.after';

// -- request provider configure
export const REQUEST_RESPONSE_COLLECTION = true;
