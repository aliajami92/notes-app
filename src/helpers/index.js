/**
 * Checks if value is an empty object or array.
 *
 * @param   {Object|Array} 	value
 * @return  {boolean}
 */
export const isEmpty = value =>
  [Object, Array].includes((value || {}).constructor) && !Object.entries(value || {}).length;
