export const isArray = (array) => Array.isArray(array);
export const isArrayWithItems = (array) =>
  Array.isArray(array) && array.length > 0;
