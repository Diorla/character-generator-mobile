import title from "./title";

const print = (sep, ...words) =>
  title(words.filter(word => word != "Normal").join(sep));

export default print;
