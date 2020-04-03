/**
 * @function Removes a single item from an array
 * @param {Array} arr - The array to be filtered
 * @param {Primitive} item - An item that would be removed from the array
 * @returns Filtered array.
 */
const _removeItem = (arr, item) => {
  const index = arr.findIndex(itm => itm === item);
  if (index > -1) return [...arr.slice(0, index), ...arr.slice(index + 1)];
  else return arr;
};

/**
 * @function Filters and remove a multiple items from an array
 * @param {Array} arr - The array to be filtered
 * @param  {...Primitive} items - The list of args that would be removed from the array.
 * @returns {Array} Filtered array
 */
const remove = (arr, ...items) => {
  let tempArr = [...items];
  let returnValue = [...arr];
  while (tempArr.length) {
    const tempItem = tempArr.pop();
    returnValue = _removeItem(returnValue, tempItem);
  }
  return returnValue;
};

export default remove;