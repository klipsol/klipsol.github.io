export const GetUtmParams = (payload = {}) =>
  findKeysWithPrefix(payload, 'utm_');

export const findKeysWithPrefix = (payload = {}, prefix = '') => {
  const result = {};

  const recursiveSearch = (obj) => {
    for (const [key, value] of Object.entries(obj)) {
      if (key.startsWith(prefix)) {
        result[key] = value;
      }
      if (typeof value === 'object' && value !== null) {
        recursiveSearch(value);
      }
    }
  };

  recursiveSearch(payload);
  return result;
};
