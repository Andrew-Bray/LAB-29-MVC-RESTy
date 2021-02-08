export const makeFetch = (url, request, content) => {
  const output = `You requested from "${url}"
  , clicked on the ${request} button,
  and typed in "${content}`;
  return output;
};
