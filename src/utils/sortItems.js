export const sortByItems = (arr, critia) => {
  return arr.sort((a, b) => {
    if (a[critia] > b[critia]) return 1;
    if (a[critia] < b[critia]) return -1;
    return 0;
  });
};
