import title from "./title";

/**
 * It formats an array into readable sentences
 * @param {Array} arr 
 * @param {string} sep 
 * @param {string} last 
 */
const print = (arr, sep, last) => {
  const filteredArr = arr.filter(n => n != "Normal");
  if(arr.length==1) return arr[0]
  if (sep) {
    if (last) {
      const first = filteredArr.slice(0, filteredArr.length - 1);
      return title(first.join(sep) + last + filteredArr[filteredArr.length - 1]);
    }
    return title(filteredArr.join(sep));
  } else return title(filteredArr.join(" "));
};

export default print;
