type IsValidSearch = (search: string, keys?: string[]) => boolean;

const isValidSearch: IsValidSearch = (search, keys) => {
  const searchMap = new URLSearchParams(search);
  return !keys || !keys.some((key) => searchMap.has(key) === false);
};

export default isValidSearch;
