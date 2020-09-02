import globalVariables from '../config/variables';


export default {
  /**
   * @param {object} Vue
   */
  install: (Vue) => {
    // -- event bus
    Vue.prototype.$bus = globalVariables.$bus;
    // -- action provider
    Vue.prototype.$provider = globalVariables.$provider;
  },
};
