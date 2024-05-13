export const sortByItems = (arr, critia) => {
  return arr.sort((a, b) => {
    if (a[critia] > b[critia]) return 1;
    if (a[critia] < b[critia]) return -1;
    return 0;
  });
};

export const sortByItemsNoDup = (arr, critia) => {
  return [...new Set(sortByItems(arr).map((item) => JSON.stringify(item)))].map(
    (item) => JSON.parse(item),
  );
};
