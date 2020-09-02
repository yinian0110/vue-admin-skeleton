/**
 * @param {*} value
 * @return {boolean}
 */
export function isTrue(value) {
  if (typeof value === 'boolean') {
    return value;
  }

  if (typeof value === 'string') {
    return ['true', 'yes', 'on', 'ok'].includes(value.toLowerCase());
  }

  return !!value;
}

/**
 * @param {*} value
 * @return {boolean}
 */
export function isFalse(value) {
  return !isTrue(value);
}
