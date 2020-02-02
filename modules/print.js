import title from "./title";

const print = (arr, sep, last) => {
  const filteredArr = arr.filter(n => n != "Normal");
  if (sep) {
    if (last) {
      const first = filteredArr.slice(0, arr.length - 2);
      return title(first.join(sep) + last + arr[arr.length - 1]);
    }
    return title(filteredArr.join(sep));
  } else return title(arr.join(" "));
};

export default print;
