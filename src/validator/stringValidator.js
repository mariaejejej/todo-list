const isString = (string) => typeof string === "string";

const isStringWithCharacters = (string, minCharacter = 0) =>
  isString(string) && string.length > minCharacter;
  
export { isString, isStringWithCharacters };
