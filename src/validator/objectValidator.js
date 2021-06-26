const isObject = (object) => {
  return object && typeof object === "object" && object.constructor === Object;
};

const isObjectWithValues = (object) =>
  !!(isObject(object) && Object.keys(object).length > 0);

export { isObject, isObjectWithValues };
