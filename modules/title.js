const title = word => {
  const [start, end] = [
    word.slice(0, 1).toUpperCase(),
    word.slice(1).toLocaleLowerCase()
  ];
  return start + end;
};

export default title;