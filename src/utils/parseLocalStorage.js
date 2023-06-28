const parseLocalStorage = (rawData) => {
  try {
    return JSON.parse(rawData);
  } catch (error) {
    return undefined;
  }
};

export default parseLocalStorage;
