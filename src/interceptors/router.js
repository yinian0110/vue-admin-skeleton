import globalVariables from '../config/variables';
import { EVENT_ROUTER_AFTER_EACH, EVENT_ROUTER_BEFORE_EACH } from '../config/consts';


/**
 * @param {Route|*} to
 * @param {Route|*} from
 * @param {Function} next
 */
export function onRouterBeforeEach(to, from, next) {
  globalVariables.$bus.$emit(EVENT_ROUTER_BEFORE_EACH, to, from);
  next();
}

/**
 * @param {Route|*} to
 * @param {Route|*} from
 */
export function onRouterAfterEach(to, from) {
  globalVariables.$bus.$emit(EVENT_ROUTER_AFTER_EACH, to, from);
}
