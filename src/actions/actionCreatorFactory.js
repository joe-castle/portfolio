/**
 * @description Action Creator Factory
 * Makes action creator functions with provided type and keys.
 *
 * The output from calling the returned function
 * will have the following signature:
 *
 * actionCreator() = {
 *   type: type,
 *   key1: value1,
 *   key2: value2
 *   ...etc
 * }
 *
 * @param {String} type - The action type.
 * @param {Array} keys - All the keys for an action as an array.
 *
 * @return {Function} The action creator function.
 */
export default (type, ...keys) => (...values) => (
  keys.reduce((action, key, index) => ({
    ...action,
    [key]: values[index],
  }), { type })
);
