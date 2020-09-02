export default class ResponseGetter {
  #response = null;

  #error = false;

  /**
   * @param {Object} response
   * @param {Boolean} hasError
   */
  constructor(response = {}, hasError = false) {
    this.#response = response;
    this.#error = hasError;
  }

  /**
   * @public
   * @param {string} paths
   * @param {*|null} defaultValue
   */
  paths(paths, defaultValue = null) {
    return ResponseGetter.getPathsFrom(paths, this.#response, defaultValue);
  }

  /**
   * @public
   * @returns {Object|null}
   */
  get d() {
    return this.#response.d;
  }

  /**
   * @public
   * @returns {Object|null}
   */
  get e() {
    return this.#response.e;
  }

  /**
   * @public
   * @returns {Number|null}
   */
  get f() {
    return this.#response.f;
  }

  /**
   * @public
   * @returns {string|null}
   */
  get m() {
    return this.#response.m;
  }

  /**
   * @param paths
   * @param defaultValue
   * @returns {*}
   */
  dataPaths(paths, defaultValue = null) {
    return ResponseGetter.getPathsFrom(paths, this.paths('d', null), defaultValue);
  }

  /**
   * @param paths
   * @param defaultValue
   * @returns {*}
   */
  extraPaths(paths, defaultValue = null) {
    return ResponseGetter.getPathsFrom(paths, this.paths('e', null), defaultValue);
  }

  /**
   * @returns {Object}
   */
  getRaw() {
    return this.#response;
  }

  /**
   * @public
   * @returns {Boolean}
   */
  hasError() {
    return this.#error;
  }

  /**
   * @public
   * @returns {String}
   */
  getError() {
    return this.paths('m', 'Unknown Error');
  }

  /**
   * @private
   * @param {string} paths
   * @param {object|null} container
   * @param {*} defaultValue
   */
  static getPathsFrom(paths, container, defaultValue) {
    if (container === null) {
      return defaultValue;
    }

    let value = container;
    paths.split('.').forEach((path) => {
      if ((typeof value !== 'object') || !(path in value)) {
        return defaultValue;
      }
      value = value[path];
    });
    return value;
  }
}
